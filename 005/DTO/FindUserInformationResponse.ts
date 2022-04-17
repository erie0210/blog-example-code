import { Exclude } from "class-transformer";
import { IsString } from "class-validator";
import { AuthInfo } from "entity/AuthInfo";

export class FindUserInformationResponse{
    @Exclude() private readonly _id: number;
    @Exclude() private readonly _password: string;

    constructor(authInfo : AuthInfo){
        this._id = authInfo.id;
        this._password = authInfo.pw;
    }

    // id의 첫 4글자만 알려준다.
    @IsString()
    id: string;

    // password의 첫 4글자만 알려준다.
    @IsString() 
    password: string;
}