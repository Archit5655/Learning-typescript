// calsses in ts
//  use commapn tsc -w to watch ts file run 
class User{
    email:string
    name:string
   readonly city:string="Agra"

    constructor(email:string,name:string){
        this.email=email;
        this.name=name
    }
}
const hitesh=new User("Architrdc@sdvd","Hitesh")
