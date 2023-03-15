import "reflect-metadata";
import { DataSource } from "typeorm";
import { Order } from "./entity/Order";
import { Customer } from "./entity/Customer";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Customer, Order],
    migrations: [],
    subscribers: [],
});
