import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsNumber()
    age: string;

    @IsString()
    identification: string;

    @IsString()
    email: string;

    @IsNumber()
    phone: number;

    @IsString()
    direction: string;

    @IsString()
    user: string;

    @IsString()
    password: string;

    @IsString()
    codeVerification: string;

    @IsString()
    sexualGender: string;
    
    @IsBoolean()
    isActive: boolean;
}
