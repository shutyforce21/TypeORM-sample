import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
  } from 'typeorm'
import { User } from './User'

@Entity()
export class Phone {
    @PrimaryGeneratedColumn()
    readonly id?: number

    @Column({length: '30', unique: true})
    tel: string

    @OneToOne(type => User, {cascade: true})
    @JoinColumn()
    user?: User

    constructor(tel: string) {
        this.tel = tel
    }
}
