"use strict";
// calsses in ts
//  use commapn tsc -w to watch ts file run
// class User {
//  public email: string;
//   name: string;
// //   accesss specifier public and private and on eother
// private  readonly city: string = "Agra";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
    constructor(email, name, userid) {
        this.email = email;
        this.name = name;
        this.userid = userid;
        // private _courseno = 23;
        // protected access specifier can be used in same class and inherited class
        this._courseno = 23;
    }
    // private method can be accessed in the class only 
    deletetoken() {
        console.log("token deleted");
    }
    //   getters and setters
    get getemaial() {
        return ` email is ${this.email}`;
    }
    get courseno() {
        return this._courseno;
    }
    set courseno(course) {
        if (course <= 1) {
            throw new Error("Courseno should be ,more than 1");
        }
        this._courseno = course;
    }
}
class Subuser extends User {
    constructor() {
        // inheritance 
        // this can not aquire private methods
        super(...arguments);
        this.isFamily = true;
    }
    changecourseno() {
        this._courseno = 22;
    }
}
const hitesh = new User("Architrdc@sdvd", "Hitesh", "2ewds");
