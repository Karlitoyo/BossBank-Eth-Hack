import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    age: number;

    @Column()
    salary: number;
}