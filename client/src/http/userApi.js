import {$authHost, $host} from './index';
import jwtDecode from 'jwt-decode';

export const registration = async (email, password) => {
    const {data} = await $host.post('api/users/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/users/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
export const check = async () => {
    const {data} = await $authHost.get('api/users/auth')
    return jwtDecode(data.token)
}
