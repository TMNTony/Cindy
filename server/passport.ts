import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import * as fs from 'fs';
import * as path from 'path';
import { PassportStatic } from 'passport';
import {User, userModel} from './models/User'; // Adjust the import path based on your actual project structure

const pathToKey: string = path.join(__dirname, './', 'id_rsa_pub.pem');
const PUB_KEY: string = fs.readFileSync(pathToKey, 'utf8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};

const strategy: Strategy = new Strategy(options, (jwtPayload, done: VerifiedCallback) => {
    userModel.findOne({ _id: jwtPayload.sub }, (err: any, user: User) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
})

export default (passport: PassportStatic) => {
    passport.use(strategy);
};
