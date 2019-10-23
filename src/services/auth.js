import api from './api'

export async function login(data) {
    console.log(data)
    try {
        const response = await api.post('/admin/login', data)
    
        const user = response.data
    
        if (user.status) {
            localStorage.setItem('@user.name', user.name)
            localStorage.setItem('@user.email', user.email)
            localStorage.setItem('@user.token', user.token)
    
            return true
        } else {
            return false
        }
        
    } catch (error) {
        return false
    }
}

export function logout() {
    localStorage.removeItem('@user.token')
}

export function getToken() {

    const aux = localStorage.getItem('@user.token')
    const token = 'Bearer '+aux

    return token
}

export function isAuthenticated() {

    const token = localStorage.getItem('@user.token') !== null

    if (token) {
        return true
    } else {
        return false
    }
}