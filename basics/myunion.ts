
//  (union) | helps  you to define more datatype to your variable

let score:number | string | boolean=343
score="2fwef"


type USer={
    name:string,
    email:string
}
type admin={
    username:string ,
    id:string
}
let Archit :USer | admin={name:"archuit",email:"arhcir@ndjnae"}
Archit={username:"arnvujw",id:"af23"}

// function getid(id:number|string){
//     console.log(`db id id ${id}`)
// // }
// getid(23)
// getid("23")
function getid(id:number|string){

if (typeof id === "string" ){
    id.toLowerCase();
}




}








const data: number[]=[23,2,323,23]
const data2: string[]=["23","34","23"]

// wrong WAy of defining 2 or more types in an arrya
const data3: string[] | number[]=["23","34","23"]

// right way
const data4: (string | number)[]=["23","34","23",23,2,3,23]

// strict type allocation
let seatallotment: "upper"|"lower"|"middle"
seatallotment="upper"
// not allowed this is strict type allotment
// seatallotment="asdc"






export{}