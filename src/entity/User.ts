import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Photo } from "./Photo"
import { Address } from "./Address"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Photo, (photo) => photo.id)
    photos: Photo;

    @OneToMany(() => Address, (address) => address.id)
    addresses: Address;
}