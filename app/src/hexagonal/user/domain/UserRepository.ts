import UserModel from "./UserModel";

interface UserRepository {
    registerUser: (user: UserModel) => Promise<UserModel | undefined | any>;
    searchUser: (user: UserModel) => Promise<UserModel | undefined | any>;
    deleteUset: (user: UserModel) => Promise<UserModel | undefined>;
}

export default UserRepository;