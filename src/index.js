// class User {
//     public id: number;
//     constructor(id: number) {
//         this.id = id;
//     }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     saveDB(db: DB) {
//         if (this.id) {
//             return db.saveUser(this)
//         }
//     }
// }
// class DB {
//     saveUser(user: User) {
//         console.log(`save ${user.id}`)
//     }
// }
// let user = new User(1);
// user.saveDB(new DB())
function Logger(_constructor) {
    console.log('logger');
}
var Hellow = /** @class */ (function () {
    function Hellow() {
        console.log('hello');
    }
    Hellow = __decorate([
        Logger
    ], Hellow);
    return Hellow;
}());
new Hellow();
