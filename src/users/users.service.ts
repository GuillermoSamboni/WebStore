
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocument } from './schema/users.schema';
import { Model } from 'mongoose';
import { structureResponse } from '../structureResponse';
import { dataUsersResponseDto } from './response/dataUserResponseDto';
import { responseGlobal } from '../responseGlobal';

export class UsersService {
  constructor(@InjectModel(Users.name) private usersModeule: Model<UsersDocument>) {}

  async create(createUserDto: CreateUserDto) {
    return await this.usersModeule.create(createUserDto);
  }

  async findAll(): Promise<structureResponse<dataUsersResponseDto>> {
    const response = new structureResponse<dataUsersResponseDto>();
    const users = await this.usersModeule.find();

    if (users.length <= 0) {
      response.code = responseGlobal.codeSuccesNotFound
      response.message = responseGlobal.messageSuccesNotFound;
      response.count = 0
      response.data = []
    } else {
      response.code = responseGlobal.codeSucces;
      response.message = responseGlobal.messageSucces;
      response.count = users.length;
      response.data = users.map(user => {
        const userDto = new dataUsersResponseDto()
        userDto.name = user.name;
        userDto.age = user.age;
        userDto.identification = user.identification;
        userDto.email = user.email;
        userDto.phone = user.phone;
        userDto.direction = user.direction;
        userDto.user = user.user;
        userDto.password = user.password;
        userDto.codeVerification = user.codeVerification;
        userDto.sexualGender = user.sexualGender;
        userDto.isActive = user.isActive;
        return userDto;
      })
    }
    return response;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
