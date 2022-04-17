import 'reflect-metadata';
import { Service } from "typedi"

@Service()
export class ExampleService {
    constructor(){}

    hello (){
        return "hello from service"
    }
}