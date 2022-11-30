import { PrismaClient } from '@prisma/client'

export default async function upload(req, res) {
    const { name, upload } = req.body
    const prisma = new PrismaClient()

    await prisma
	.upload
	.create({
	    data: {
		name,
		uploadId: upload,
	    },
	})
	.then((response) => response.status(200).json(response))
	.catch((error) => {
	    console.log(error)
	    res.json(error)
	})
}
