import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany, ManyToMany} from "typeorm";
import { Phone } from "./Phone";
import { Post } from "./Post";
import { Role } from "./Role";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    readonly id?: number;

    @Column({length: '100'})
    name: string

    @OneToOne(type => Phone, phone => phone.user)
    phone?: Phone

    @OneToMany(type => Post, posts => posts.user)
    posts?: Post[]

    @ManyToMany(type => Role, roles => roles.users)
    roles: Role[]

    constructor(name: string, roles: Role[]) {
        this.name = name
        this.roles = roles
    }

}
