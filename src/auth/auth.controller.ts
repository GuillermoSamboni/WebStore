import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginAuthDto } from './dto/login-auth-dto';
import { registerAuthDto } from './dto/register-auth.dto';
import { structureResponse } from '../structureResponse';
import { dataUsersResponseDto } from '../users/response/dataUserResponseDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/registerr')
  registerUser(@Body() registerUser: registerAuthDto) {
    return this.authService.register(registerUser)
  }

  @Post('/login')
  async loginUser(@Body() userLogin: loginAuthDto):Promise<structureResponse<dataUsersResponseDto>> {
    return await this.authService.Login(userLogin)
  }
}
