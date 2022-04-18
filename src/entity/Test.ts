import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Timestamp
} from "typeorm";

export enum SampleEnum {
    ONE = 'one',
    TWO = 'two'
}

@Entity()
export class Test {
    @PrimaryGeneratedColumn()
    readonly id?: number

    @Column()
    name: string
    
    @Column('text')
    text: string

    @Column({length: '32', unique: true})
    customShortText: string

    @Column()
    number: number

    @Column('int')
    int: number

    @Column('integer')
    integer: number

    @Column('smallint')
    smallint: number

    @Column('bigint')
    bigint: number

    @Column('float')
    float: number

    @Column()
    date: Date

    @Column('date')
    dateColumn: Date

    @Column('time')
    time: Date

    @Column('boolean')
    isBooleanColumn: boolean

    @Column('json')
    jsonColumn: any

    @Column('enum', {enum: SampleEnum})
    enum: SampleEnum

    @CreateDateColumn()
    createDate: Date

    @UpdateDateColumn()
    updateDate: Date
}
