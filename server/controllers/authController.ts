import {userModel, User} from "../models/User";
import {Request, Response, NextFunction} from 'express';
import {validPassword, genPassword, issueJWT} from '../utils'

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User | null = await userModel.findOne({username: req.body.username});
        if (!user) {
            return res.status(401).json({success: false, msg: "could not find user"});
        }

        const isValid: boolean  = validPassword(req.body.password, user.hash, user.salt);

        if (isValid) {

            const tokenObject = issueJWT(user);

            res.status(200).json({success: true, token: tokenObject.token, expiresIn: tokenObject.expires});

        } else {

            res.status(401).json({success: false, msg: "you entered the wrong password"});

        }

    } catch (err: any) {
        next(err)
    }
}

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const saltHash: {salt: string, hash: string} = genPassword(req.body.password);

        const salt: string = saltHash.salt;
        const hash: string = saltHash.hash;

        const newUser = await userModel.create({
            username: req.body.username,
            hash: hash,
            salt: salt,
        });

        const user = await newUser.save();
        res.json({ success: true, user: user });
    } catch (err: any) {
        next(err);
    }
};


export = {
    login,
    register
}