import User from "../../../configs/UserSchema";
import UserModel from "../domain/UserModel";
import UserRepository from "../domain/UserRepository";

export class UserRepositoryDB implements UserRepository{
    registerUser = async(user: UserModel) =>{
        try{
            const data = await User.create(user);
            return data;
        }catch(err){
            return undefined;
        }
    }

    searchUser = async(user: UserModel) => {
        try{
            const data = await User.findOne(user);
            return data;
        }catch(err){
            return undefined;
        }
    }
    
    deleteUset = async(user: UserModel) => {
        try{
            await User.deleteOne(user);
            return user;
        }catch(err){
            return undefined;
        }
    }
    
}