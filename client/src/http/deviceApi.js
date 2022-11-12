import {$authHost, $host} from './index';

export const createType = async (type) => {
    const {data} = await $authHost.post('api/types', type)
    return data
}

export const getTypes = async () => {
    const {data} = await $host.get('api/types')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brands', brand)
    return data
}

export const getBrands = async () => {
    const {data} = await $host.get('api/brands')
    return data
}

export const createDevice = async (devices) => {
    const {data} = await $authHost.post('api/devices', devices)
    return data
}

export const getDevices = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get('api/devices', {
        params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const getDevice = async (id) => {
    const {data} = await $host.get(`api/devices/${id}` )
    return data
}
