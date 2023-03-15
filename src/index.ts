import { Post } from "./entity/Post"
import { Category } from "./entity/Category"
import { Manager } from "./entity/Manager"
import { Employee } from "./entity/Employee"
import { AppDataSource } from "./data-source"
import { NEmployee } from "./entity/nonTechEmployee"

AppDataSource.initialize()
.then(async () => {
    const category1 = new Category()
    category1.name = "TypeScript"
    await AppDataSource.manager.save(category1)

    const category2 = new Category()
    category2.name = "Programming"
    await AppDataSource.manager.save(category2)

    const post = new Post()
    post.title = "TypeScript"
    post.text = `TypeScript is Awesome!`
    post.categories = [category1, category2]

    await AppDataSource.manager.save(post)

    const Manager1 = new Manager()
    Manager1.name = "Manager1"
    await AppDataSource.manager.save(Manager1)

    const Manager2 = new Manager()
    Manager2.name = "Manager2"
    await AppDataSource.manager.save(Manager2)
    
    const Manager3 = new Manager()
    Manager3.name = "Manager3"
    await AppDataSource.manager.save(Manager3)

    const employee = new Employee()
    employee.title = "Employee"
    employee.text = `Employee is Awesome!`
    employee.managers = [Manager1, Manager2, Manager3]
    await AppDataSource.manager.save(employee)

    const NEmployee1 = new NEmployee()
    NEmployee1.title = "NEmployee1"
    NEmployee1.text = `NEmployee1 is Awesome!`
    NEmployee1.managers = [Manager1, Manager2, Manager3]
    await AppDataSource.manager.save(NEmployee1)


    

    console.log("Post has been saved: ", post)
})
.catch((error) => console.log("Error: ", error))