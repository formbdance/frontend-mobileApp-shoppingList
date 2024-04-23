import axios from "axios";

const api_url = 'http://192.168.0.2:5000'; // server http://ip:port

// Карты

// сохранение карты
export async function saveCard(options) {
    const res = await axios.post(`${api_url}/cards`, options.data, 
    {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*"
        }
    },
    )
    if (res.status !== 201) {
        throw new Error('Ошибка при сохранении карты!')
    }
    return res.data
}

// получение карт
export async function getCards() {
    const res = await axios.get(`${api_url}/cards`)
    if (res.status !== 200) {
        throw new Error('Ошибка при получении карты')
    }
    
    return res.data
}

// удаление карты
export async function deleteCard(options) {
    const res = await axios.delete(`${api_url}/cards/${options.data._id}`)
    if (res.status !== 204) {
        throw new Error('Ошибка при удалении карты')
    }
    
    return res.data
}


