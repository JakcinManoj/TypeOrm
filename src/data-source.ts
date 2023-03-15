import "reflect-metadata"
import { DataSource } from "typeorm"
import { Category } from "./entity/Category"
import { Post } from "./entity/Post"
import { Manager } from "./entity/Manager"
import { Employee } from "./entity/Employee"
import { NEmployee } from "./entity/nonTechEmployee"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Category, Post, Manager, Employee, NEmployee],
    migrations: [],
    subscribers: [],
})
