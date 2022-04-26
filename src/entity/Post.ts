import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm'
  
import { User } from './User'
  
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    readonly id?: number
  
    @Column({length: '50'})
    body: string
  
    @ManyToOne(type => User, {
      cascade: true
    })
    @JoinColumn()
    user: User
  
    constructor(body: string, user: User) {
        this.body = body
        this.user = user
    }
}