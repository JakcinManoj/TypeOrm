import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata"


AppDataSource.initialize().then(async () => {
    console.log("Inserting a new photo into the database...")
    const photo = new Photo()
    photo.name = "Me and Bears"
    photo.description = "I am near polar bears"
    photo.filename = "photo-with-bears.jpg"
    photo.views = 1
    photo.isPublished = true

    console.log("Inserting a New dataBase ....");
    const photoMetadata = new PhotoMetadata()
    photoMetadata.height = 640
    photoMetadata.width = 480
    photoMetadata.compressed = true
    photoMetadata.comment = "cybershoot"
    photoMetadata.orientation = "portait"
    photoMetadata.photo = photo // we connect them through this
    
    const photoRepository = AppDataSource.getRepository(Photo)
    const metadataRepository = AppDataSource.getRepository(PhotoMetadata)

    await photoRepository.save(photo)
    await metadataRepository.save(photoMetadata)

}).catch(error => console.log(error))

