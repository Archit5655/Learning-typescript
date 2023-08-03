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

// we can write a interface again and add more properties

interface USer{
    githubid:string
}

// interface has also inheritance

interface Admin extends USer{
    role:"Admin" | "User"
}


const Archit:USer= {dbid:2323,email:"asd@cdcdd",id:23, githubid:"f34f34fw",start:()=>{
    return "arcwdf"
    

},
getcoupon:(name:"archiut",off:10)=>{
    return 10
}
}

