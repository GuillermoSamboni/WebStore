import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { dataProductResponseDto } from './dto/response/dataProductResponseDto';
import { structureResponse } from 'src/structureResponse';
// import { productsResponseDto } from './dto/response/productsResponseDto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('/create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('/get')
  findAll(): Promise<structureResponse<dataProductResponseDto>> {
    return this.productsService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {

    return this.productsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
