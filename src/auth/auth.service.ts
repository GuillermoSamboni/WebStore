import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { loginAuthDto } from './dto/login-auth-dto';
import { registerAuthDto } from './dto/register-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/users/schema/users.schema';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private authModel: Model<UsersDocument>,
    private jwtService: JwtService) { }

  async register(registerAuthDto: registerAuthDto) {
    const { password } = registerAuthDto;
    const plainToHash = await hash(password, 10)
    registerAuthDto = { ...registerAuthDto, password: plainToHash }
    return this.authModel.create(registerAuthDto)
  }

  async Login(userLogin: loginAuthDto) {
    const { email, password } = userLogin
    const findUser = await this.authModel.findOne({ email })
    if (!findUser) throw new HttpException("User no exist", 404)
    const checkPassword = await compare(password, findUser.password)
    if (!checkPassword) throw new HttpException("Password invalid", 403)

    const payload = {
      id: findUser.id,
      name: findUser.name
    }
    
    const token = await this.jwtService.sign(payload)
    const data = {
      user: findUser,
      token: token
    }


    return data;
  }
}
