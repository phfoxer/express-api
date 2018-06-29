import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

@Entity()
export class UserEstabelecimento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    estabelecimento_id: number;

    @Column()
    user_id: number;

}
