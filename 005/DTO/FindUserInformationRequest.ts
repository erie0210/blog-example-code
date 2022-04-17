import { IsNumber, IsPhoneNumber, IsString } from "class-validator"

export class FindUserInformationRequest{
    @IsString()
    name: string;

    @IsPhoneNumber()
    phone: number;

    constructor(){}
}