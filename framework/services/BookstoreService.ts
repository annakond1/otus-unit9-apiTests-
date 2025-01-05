import config from '../config/configBookstore'

const axios = require('axios')

async function newUser() {
    const urlUser = `${config.baseURL}/User`
    const urlToken = `${config.baseURL}/GenerateToken`
    const anna = {
        userName: config.username,
        password: config.password
    }
    
    const userId = await axios.post(urlUser, anna)
    const token = await axios.post(urlToken, anna)
    return {userId, token}
    }

    const newUserBook = async () => {
    const response = await fetch(`${config.baseURL}/Books`, {
      method: 'POST',
      headers: [
        { 'Content-Type': 'application/json' }, 
        { 'Authorization': token }
      ],
      body: JSON.stringify({
        userId: userId,
        collectionOfIsbns: [
    {
      "isbn": "9781449325862"
    }
  ]
    })
  })
    return {
      headers: response.heders,
      status: response.status,
      data: await response.json()
    }
  }

    const putUserBook = async () => {
      const response = await fetch(`${config.baseURL}/Books/9781449325862`, {
        method: 'PUT',
        headers: [
          { 'Content-Type': 'application/json' }, 
          { 'Authorization': token }
        ],
        body: JSON.stringify({
          userId: userId,
          collectionOfIsbns: [
      {
        "isbn": "9781449331818"
      }
    ]
      })
    })
      return {
        headers: response.heders,
        status: response.status,
        data: await response.json()
      }
    } 


    const bookInfo = async () => {
      const response = await fetch(`${config.baseURL}/Book?ISBN=9781449331818`)
    }
    return {
      status: response.status,
      data: await response.json()
    }
    
    const bookDelete = async () => {
      const response = await fetch(`${config.baseURL}/Book`), {
        method: 'DELETE',
        headers: [
          { 'Content-Type': 'application/json' }, 
          { 'Authorization': token }
        ],
        body: JSON.stringify({
          isbn: "9781449331818",
          userId: userId
      })
    }
    return {
      status: response.status,
      data: await response.json()
    }
    }

    export default {
      newUser,
      newUserBook,
      putUserBook, 
      bookInfo, 
      bookDelete
    }