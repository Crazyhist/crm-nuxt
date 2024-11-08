import { Account, Client, Databases, Storage } from 'appwrite'
import { APP_WRITE_ID } from './app.constans'

export const client = new Client()

client.setProject(APP_WRITE_ID)

export const account = new Account(client)
export const DB = new Databases(client)
export const storage = new Storage(client)