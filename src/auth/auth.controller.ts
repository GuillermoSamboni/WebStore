import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginAuthDto } from './dto/login-auth-dto';
import { registerAuthDto } from './dto/register-auth.dto';
import { structureResponse } from 'src/utils/response/structureResponse';
import { dataUsersResponseDto } from 'src/users/response/dataUserResponseDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/register')
  registerUser(@Body() registerUser: registerAuthDto) {
    return this.authService.register(registerUser)
  }

  @Post('/login')
  async loginUser(@Body() userLogin: loginAuthDto):Promise<structureResponse<dataUsersResponseDto>> {
    return await this.authService.Login(userLogin)
  }
}
