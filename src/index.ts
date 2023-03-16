import { Question } from "./entity/Question"
import { Category } from "./entity/Category"
import { AppDataSource } from "./data-source"
const { Post } = require("./entity/Post")

AppDataSource.initialize()
.then(async () => {
    const category1 = new Category()
    category1.name = "TypeScript"
    await AppDataSource.manager.save(category1)

    const category2 = new Category()
    category2.name = "Programming"
    await AppDataSource.manager.save(category2)

    const question = new Question()
    question.title = "TypeScript"
    question.text = `TypeScript is Awesome!`
    question.categories = [category1, category2]

    const post = new Post()
    post.title = "TypeScript"
    post.text = `TypeScript is Awesome!`
    post.categories = [category1, category2]

    await AppDataSource.manager.save(post)
    await AppDataSource.manager.save(question)
    

    console.log("Question has been saved: ", question)
})
.catch((error) => console.log("Error: ", error))