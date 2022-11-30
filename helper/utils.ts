import { Storage, Client, Account } from 'appwrite'

const client = new Client()
try {
    client
    	.setEndpoint('http://localhost/v1')
	.setProject('63862bdd688314151b29')
} catch (error) {
    alert('error')
    console.log(error)
}

export const appwriteSDK = () => {
    const storage = new Storage(client)
    return storage
}

export const accountSDK = () => {
    const account = new Account(client)
    return account
}
