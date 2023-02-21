import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
    @Prop({ require: true })
    name: string;

    @Prop({ required: true })
    age: string;

    @Prop({ required: true, unique: true })
    identification: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    phone: number;

    @Prop({ required: true })
    direction: string;

    @Prop({ required: true })
    user: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    codeVerification: string;

    @Prop()
    sexualGender: string;

    @Prop({ required: true })
    isActive: boolean;
}

export const Userschema = SchemaFactory.createForClass(Users);