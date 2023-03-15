import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Profile } from "./entity/Profile"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Jakcin"
    user.lastName = "Manoj"
    user.age = 25

    const profile = new Profile()
    profile.name = "username1"

    const userRepository = AppDataSource.getRepository(User)
    const profileRepository = AppDataSource.getRepository(Profile)

    await userRepository.save(user)
    console.log("user saved");

    await profileRepository.save(profile)
    
    console.log("User details:")
console.log(user)

console.log("Profile details:")
console.log(profile)


}).catch(error => console.log(error))