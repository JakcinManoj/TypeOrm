import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm"
import { Category } from "./Category"

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToMany(() => Category, (category) => category.questions)
    @JoinTable()
    categories: Category[]
}