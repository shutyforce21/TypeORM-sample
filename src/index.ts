import { read } from "fs";
import { createConnection, getRepository, Repository } from "typeorm";
import { User } from "./entity/User";

const createUser = async (userRepository: Repository<User>) => {
    console.log('### insert user ###');
    await userRepository.insert({
        firstName: "taro",
        lastName: "hakase",
        age: 25
    });
    await userRepository.save({
        firstName: "mako",
        lastName: "hakase",
        age: 40
    });
}

const readUsers = async (userRepository: Repository<User>) => {
    console.log('### Read Users ###');
    const users = await userRepository.find();
    const usersJson = JSON.stringify(users)
    console.log(`All User: ${usersJson}`);
}

const findUser = async (userRepository: Repository<User>) => {
    console.log('### Get User ###');
    const user = await userRepository.findOne({id: 1});
    const userJson = JSON.stringify(user)
    console.log(`User: ${userJson}`);
}

const updateUser = async (userRepository: Repository<User>) => {
    console.log('### Update user ###');
    const user = await userRepository.findOne({id: 1});
    user.firstName = 'updateTaro';
    user.lastName = 'updateHakase';
    user.age = 100;
    await userRepository.save(user);
}

const deleteUser = async (userRepository: Repository<User>) => {
    console.log('### Delete user ###');
    const user = await userRepository.findOne({id: 1});
    await userRepository.remove(user);
}

(async () => {
    console.log("Connecting db...")
    const connection = await createConnection();
    console.log("done")
    const userRepository = getRepository(User);
    await readUsers(userRepository);
    await findUser(userRepository);
    await updateUser(userRepository);
    await findUser(userRepository);
    await deleteUser(userRepository);
    await readUsers(userRepository);
    await connection.close()
})()