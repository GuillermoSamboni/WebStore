import { IsEmail, MaxLength, MinLength } from "class-validator";

export class loginAuthDto {

    @IsEmail()
    email: string

    @MinLength(4)
    @MaxLength(14)
    password: string
}
