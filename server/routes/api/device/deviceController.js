const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo, Brand} = require('../../../models/models');
const ApiError = require('../../../utils/errors/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + '.png'
            image.mv(path.resolve(__dirname, '../../../', 'static', fileName))

            const device = await Device.create({
                name,
                price: Number(price),
                brandId: Number(brandId),
                typeId: Number(typeId),
                image: fileName
            })

            if (info) {
                info = JSON.parse(info)
                info.forEach(field => {
                    DeviceInfo.create({
                        title: field.title,
                        description: field.description,
                        deviceId: device.id
                    })
                })
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let devices
        let query = {include: [{model: Brand, as: 'brand'}]}
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({...query, limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({...query, where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({...query, where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({...query, where: {brandId, typeId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne({
            where: {id},
            include: [{model: DeviceInfo, as: 'info'}]
        })
        return res.json(device)
    }
}

module.exports = new DeviceController()
