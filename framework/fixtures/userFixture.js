import { faker } from '@faker-js/faker'

export function generateUserCredentials() {
  return {
    userName: faker.internet.email(),
    password: 'Paroll@19'
  }
}