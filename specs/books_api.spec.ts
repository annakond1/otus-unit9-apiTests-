//import config from '../config/configBookstore'
import { newUserBook, putUserBook, bookInfo, bookDelete } from '../framework/services/BookstoreService'
//return { userId };
//const axios = require('axios')

describe('POST Создание книги пользователю', () => {
    it('POST Создание книги пользователю'), async () => {
        const response = await newUserBook()
        
        const data = await response.json()

        expect(response.status).toBe(201)
        expect (data.token).toBeDefined('Created')
        expect (data.result).toBe('Создание книги пользователю')
    }
})

describe('PUT Обновление книги пользователю', () => {
    it('PUT Обновление книги пользователю'), async () => {
        const response = await putUserBook()
        
        const data = await response.json()

        expect(response.status).toBe(200)
        expect (data.token).toBeDefined('Ok')
        expect (data.result).toBe('Обновление книги пользователю')
    }
})

describe('Получение данных о книге', () => {
    it('Получение данных о книге', async () => {
    const response3 = await bookInfo() 

    expect(response3.status).toBe(200) 

    const data = await response3.json()

    expect(data.token).toBeDefined('OK')
    expect(data.result).toBe('Получение данных о книге')
})
  })

  describe('DELETE удаление книги пользователю', () => {
    it('DELETE удаление книги пользователю', async () => {
    const response3 = await bookDelete() 

  expect(response3.status).toBe(200)
  const data = await response3.json()
  
  expect(data.token).toBeDefined('OK')
  expect(data.result).toBe('Удаление книги пользователю')
})
  })


 