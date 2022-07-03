import { IsNumber, IsString } from "class-validator"

export class FindUserInformationRequest{
    @IsString()
    name: string;

    @IsNumber()
    phone: number;

    constructor(){}
}