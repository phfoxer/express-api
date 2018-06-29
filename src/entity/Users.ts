import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserEstabelecimento } from "./UserEstabelecimento";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    photo: string;

    @OneToOne(type => UserEstabelecimento)
    @JoinColumn()
    estabelecimento: UserEstabelecimento;

}
