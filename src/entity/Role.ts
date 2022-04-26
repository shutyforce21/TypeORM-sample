import {Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    readonly id?: number

    @Column({length: '50'})
    name: string

    @ManyToMany(type => User, users => users.roles, {
        cascade: true
    })
    @JoinTable()
    users?: User[]

    constructor(name: string) {
        this.name = name
    }
}
