import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginAuthDto } from './dto/login-auth-dto';
import { registerAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/register')
  registerUser(@Body() registerUser: registerAuthDto) {
    return this.authService.register(registerUser)
  }

  @Post('/login')
  loginUser(@Body() userLogin: loginAuthDto) {
    return this.authService.Login(userLogin)
  }
}
