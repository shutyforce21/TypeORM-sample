import User from "./user";

export default class Database {
    saveUser(user: User) {
      console.log(`Saved ${user.userName}!`) // Saved yamada! 
    }
}