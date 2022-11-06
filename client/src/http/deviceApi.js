import {$host} from './index';

export const createType = async (type) => {
    const {data} = await $host.post('api/type', type)
    return data
}

export const getTypes = async (email, password) => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $host.post('api/brand', brand)
    return data
}

export const getBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}


export const createDevice = async (devices) => {
    const {data} = await $host.post('api/device', devices)
    return data
}

export const getDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}

export const getDevice = async (id) => {
    const {data} = await $host.get(`api/device/${id}` )
    return data
}
