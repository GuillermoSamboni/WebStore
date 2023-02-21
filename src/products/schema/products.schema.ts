import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products {

    @Prop({ unique: true, required: true })
    idProduct: Number;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    decription: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    amountStock: number;

    @Prop({ unique: true, required: true })
    category: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    skuCodeProduct: string;

    @Prop({ unique: true, required: true })
    brand: string;

    @Prop()
    model: number;

    @Prop()
    weightInKilos: number;

    @Prop()
    dimensions: string;

    @Prop({ required: true })
    createAt: string;

    @Prop({ required: true })
    updateAt: string;

    @Prop({ required: true })
    labels: string;
}

export const ProducstSchema = SchemaFactory.createForClass(Products);