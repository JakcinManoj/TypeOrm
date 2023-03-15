import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @OneToOne(() => User, (user) => user.profile)
    @JoinColumn()
    user: User
}