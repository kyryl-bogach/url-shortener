import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
})

export const insertLink = payload => api.post(`/`, payload)
export const getLinks = () => api.get(`/`)
export const updateLink = (key, payload) => api.put(`/${key}`, payload)
export const deleteLink = key => api.delete(`/${key}`)
export const getLink = key => api.get(`/${key}`)

const apis = {
    insertLink,
    getLinks,
    updateLink,
    deleteLink,
    getLink,
}

export default apis
