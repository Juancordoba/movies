// Uncomment these imports to begin using these cool features!

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories";
import {post, requestBody} from '@loopback/rest'
//import {inject} from '@loopback/core';

class Credentials{
  username: string;
  password: string;
}

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository
  ) {}

/*
  @post('/login',{
    responses:{
      '200':{
        description: 'Login'
      }
    }
  })

  async login(@requestBody() credentials: Credentials
  ): Promise<object>  {

  }

}
*/
