import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Customer} from "./Customer";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderNumber: string;

    @ManyToOne(() => Customer, customer => customer.orders)
    customer: Customer;

}
