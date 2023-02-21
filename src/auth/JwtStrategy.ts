import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstanst } from './jwtConstants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstanst.secret
        });
    }
    async validate(payload: any) {
        return {
            userId: payload.id, name: payload.name
        }
    }
}

