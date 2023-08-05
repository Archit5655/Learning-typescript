// defining a interface
// type of protocols every classs that implements this should have can have more but not less 
interface photo{

    cameramode:string,
    filter:string,
    bustmode:number,

}
// implementing the properties of interface

class Instagram implements photo{
    constructor(
        public cameramode:string,
        public filter:string,
        public bustmode:number,

    ){}


}
// another interface 
interface story{
    createstory():void
}



class Youtube implements photo,story{
    constructor(
        public cameramode:string,
        public filter:string,
        public bustmode:number,
        public shorts:string

    ){}
    createstory(): void {
        console.log("this is a story")

    }
}



