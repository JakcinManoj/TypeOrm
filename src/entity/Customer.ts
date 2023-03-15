import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Order} from "./Order";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Order, order => order.customer)
    orders: Order[];

}
