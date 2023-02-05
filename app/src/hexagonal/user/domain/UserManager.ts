import UserModel from "./UserModel";
import UserRepository from "./UserRepository";

export class UserManager{
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository){
        this.userRepository = userRepository;
    }

    registerUser = async(user: UserModel) => {
        const data = await this.userRepository.searchUser(user);
        if(!data){
            await this.userRepository.registerUser(user);
        }
    }

    authUser = (user: UserModel) => {
        return this.userRepository.searchUser(user)
    }
}
