import { ID, storage } from "../appwrite"

const uploadImage = async (file: File) => {
    if (!file) return
    const fileUploaded = await storage.createFile(
        "647d107ade3af5e430ee",
        ID.unique(),
        file
    )

    return fileUploaded
}

export default uploadImage