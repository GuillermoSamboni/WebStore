import { IsNotEmpty, IsNumber, IsString, Length, Max, Min } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsNumber()
    idProduct: Number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @Length(250)
    decription: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    price: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    amountStock: number;

    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    skuCodeProduct: string;

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsNumber()
    model: number;

    @IsNumber()
    weightInKilos: number;

    @IsString()
    dimensions: string;

    @IsNotEmpty()
    @IsString()
    createAt: string;

    @IsNotEmpty()
    @IsString()
    updateAt: string;

    @IsNotEmpty()
    @IsString()
    labels: string;
}
