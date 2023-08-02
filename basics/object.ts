// const Uaser={
//     name:"Arcjhot",
//     age:23,
//     ismale:true
// }

// function createuser({name: string,ispaid: boolean}){}

// // if we want to pass more properties to the create user we can pass it in this way
// let newuser={name:"arhit",ispaid:true,email:"arwf@QDSfs"}
// createuser(newuser)

// // this function will return an object with these two properties
// function createcourse():{name: string,price: number}{

//     return{name:"react",price:3434}

// }

// type User={
//     name:string,
//     email:string,
//     isActive:boolean
// }

// function Createuser(user:User):User{
//     return {name:"",email:"",isActive:true}
// }

// Createuser({name:"",email:"",isActive:true})

type User = {
  // readonly keyword defines a value that it cant bechanged
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;

  //  the ? symbolize optional value
  credcard?: number;
};

let myuser: User = {
  _id: "32434",
  name: "asdfer",

  email: "wefwef@fsdvc",
  isActive: false,
};


type carnumber={
    num:string
}
type carddate={
    date:string
}
type carddetails=carnumber &carddate & {
    cvv:number
}



myuser.email = "architgarg@gmaisal";

// in this we cannot assing a diff value to the id as it is only readonly unlike email
// myuser._id="123edwdc"

export {};
