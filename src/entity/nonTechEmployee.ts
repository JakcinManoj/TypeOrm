import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Manager } from "./Manager"
    @Entity()
    export class NEmployee {
        @PrimaryGeneratedColumn()
        id: number
    
        @Column()
        title: string
    
        @Column("text")
        text: string
    
        @ManyToMany((type) => Manager)
        @JoinTable()
        managers: Manager[]
    }