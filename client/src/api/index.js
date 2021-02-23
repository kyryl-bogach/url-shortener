import axios from 'axios'

global.API_URL = 'https://link.bogach.es'

const api = axios.create({
    baseURL: global.API_URL,
})

export const insertLink = payload => api.post(`/`, payload)
export const getLinks = () => api.get(`/`)
export const updateLink = (key, payload) => api.put(`/${key}`, payload)
export const deleteLink = key => api.delete(`/${key}`)
export const getLink = key => api({url: `/${key}`, headers: {"Accept": "application/json"}})

const apis = {
    insertLink,
    getLinks,
    updateLink,
    deleteLink,
    getLink,
}

export default apis
