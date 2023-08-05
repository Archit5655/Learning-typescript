// Abstract classes we cannot create the object of abstract class but of that which is inheritinf that class
abstract class takephoto{
    constructor(
        public cameramode:string,
        public filter:string
    ){}

    //  abastract methods are compulsary methods for the and non abstract methods are not compulsary
abstract getlund():void
getreeltime():number{
    return 8;
}

}
class Instagram2 extends takephoto{
    constructor(public cameramode:string,
        public filter :string,
       public bust:number){
            super(cameramode,filter)
        }
        getlund(): void {
            console.log("you are a male now")
        }
    
}
const Archit=new Instagram2("dark","yes",23)
Archit.getreeltime()


