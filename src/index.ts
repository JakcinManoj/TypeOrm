import { Order } from "./entity/Order"
import { Customer } from "./entity/Customer"
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
.then(async () => {
    const customer = new Customer();
customer.name = "John Smith";
    await AppDataSource.manager.save(customer);

    const order1 = new Order();
    order1.orderNumber = "12345";
    order1.customer = customer;
    await AppDataSource.manager.save(order1);

    const order2 = new Order();
    order2.orderNumber = "67890";
    order2.customer = customer;
    await AppDataSource.manager.save(order2);

    const order3 = new Order();
    order3.orderNumber = "54321";
    order3.customer = customer;
    await AppDataSource.manager.save(order3);


})
.catch((error) => console.log("Error: ", error))