import axios from 'axios'
const URL_API = 'http://localhost:5555/api/prompt'

export const makeRequest = async (prompt) => {
    const {
        data
    } = await axios.post(URL_API, prompt)
    return data
}