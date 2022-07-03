import { AuthInfo } from "entity/AuthInfo";

export class FindUserInformationResponse{
    private readonly identification: number;
    private readonly password: string;

    constructor(authInfo : AuthInfo){
        this.identification = authInfo.id;
        this.password = authInfo.pw;
    }
}