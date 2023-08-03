interface USer{
    readonly dbid:number
    email:string,
    id:number
    // method 1
    // start:()=>string
    // method 2
    start():string

    getcoupon(coupanname:string,value:number):number


}

const Archit:USer= {dbid:2323,email:"asd@cdcdd",id:23,start:()=>{
    return "arcwdf"
    

},
getcoupon:(name:"archiut",off:10)=>{
    return 10
}
}

