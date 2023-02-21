import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from '../products/schema/products.schema'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { dataProductResponseDto } from './dto/response/dataProductResponseDto';
import { responseGlobal } from '../utils/response/responseGlobal';
import { structureResponse } from 'src/utils/response/structureResponse';


@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products.name) private productsModule: Model<ProductsDocument>,) { }

  async create(createProductDto: CreateProductDto) {
    return await this.productsModule.create(createProductDto)
  }

  async findAll(): Promise<structureResponse<dataProductResponseDto>> {
    const response = new structureResponse<dataProductResponseDto>(); // agregamos <dataProductResponseDto> como el parámetro de tipo genérico
    const products = await this.productsModule.find();
  
    response.code = responseGlobal.codeSucces;
    response.message = responseGlobal.messageSucces;
  
    response.count = products.length;
    response.data = products.map(product => {
      const productDto = new dataProductResponseDto();
      productDto.idProduct = product.id;
      productDto.name = product.name;
      productDto.decription = product.decription;
      productDto.price = product.price;
      productDto.amountStock = product.amountStock;
      productDto.category = product.category;
      productDto.image = product.image;
      productDto.skuCodeProduct = product.skuCodeProduct;
      productDto.brand = product.brand;
      productDto.model = product.model;
      productDto.weightInKilos = product.weightInKilos;
      productDto.dimensions = product.dimensions;
      productDto.createAt = product.createAt;
      productDto.updateAt = product.updateAt;
      productDto.labels = product.labels;
  
      return productDto;
    });
  
    return response;
  }
  

  findOne(id: string) {
    return this.productsModule.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    return await this.productsModule.findByIdAndRemove(id);
  }
}
