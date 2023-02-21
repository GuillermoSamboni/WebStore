
import { PartialType } from '@nestjs/mapped-types';
import { loginAuthDto } from './login-auth-dto';
import { IsNotEmpty } from 'class-validator';

export class registerAuthDto extends PartialType(loginAuthDto) {
    @IsNotEmpty()
    name: string
}
