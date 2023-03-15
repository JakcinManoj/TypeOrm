import { Photo } from "./entity/Photo"
import { User } from "./entity/User"
import { Address } from "./entity/Address"
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
.then(async () => {
    const user = new User()
    user.name = "Leo"
    await AppDataSource.manager.save(user)

    const photo1 = new Photo()
    photo1.url = "me.jpg"
    photo1.user = user
    await AppDataSource.manager.save(photo1)

    const photo2 = new Photo()
    photo2.url = "me-and-bears.jpg"
    photo2.user = user
    await AppDataSource.manager.save(photo2)

    const address1 = new Address()
    address1.Address = "123 Main St"
    address1.user = user
    await AppDataSource.manager.save(address1)

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find({
    relations: {
        photos: true,
    },
    })
    console.log("Users: ", users);

    const photoRepository = AppDataSource.getRepository(Photo)
    const photos = await photoRepository.find({
    relations: {
        user: true,
    },
})
console.log("Photos: ", photos);
const addressRepository = AppDataSource.getRepository(Address)
const addresses = await addressRepository.find({
    relations: {
        user: true,
    }
})
})
.catch((error) => console.log("Error: ", error))
