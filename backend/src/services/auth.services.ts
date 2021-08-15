import { repository } from "@loopback/repository";
import { threadId } from "worker_threads";
import { User } from "../models";
import { UserRepository } from "../repositories";

export class AuthService{
    constructor(@repository(UserRepository)
                public userRepository: UserRepository
    ){

    }

    async Identyfy(username:string, password:string):Promise<User | false>{
        let user = await  this.userRepository.findOne({where: {username}})
        if(user){
          //  let crypsPass = new EncryptDecript() 
        }
        return false;
    }

}