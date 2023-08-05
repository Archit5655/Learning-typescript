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
  private _courseno = 23;
  constructor(
    public email: string,
    public name: string,
    private userid: string
  ) {
   
  }
  // private method can be accessed in the class only 
  private deletetoken() {
    console.log("token deleted")
    
  }
  //   getters and setters
  get getemaial(): string {
    return ` email is ${this.email}`;
  }

  get courseno(): number {
    return this._courseno;
  }
  set courseno(course) {
    if (course <= 1) {
      throw new Error("Courseno should be ,more than 1");
    }
    this._courseno = course;
  }
}
const hitesh = new User("Architrdc@sdvd", "Hitesh", "2ewds");
