import { Column } from "typeorm";

export class AuthInfo{
    @Column()
    id: number;

    @Column({length: 50})
    identification: string;

    @Column({length:100})
    pw: string;

    @Column({length: 100})
    name: string;

    @Column({nullable: false})
    phone: number;
}