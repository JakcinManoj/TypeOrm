import { Question } from "./entity/Question"
import { Category } from "./entity/Category"
import { AppDataSource } from "./data-source"

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

    await AppDataSource.manager.save(question)
    const categoriesWithQuestions = await AppDataSource
    .getRepository(Category)
    .createQueryBuilder("category")
    .leftJoinAndSelect("category.questions", "question")
    .getMany()

    console.log("Question has been saved: ", question)
})
.catch((error) => console.log("Error: ", error))