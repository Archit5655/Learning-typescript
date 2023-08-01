// in functions you should give the type to the values
function add(num: number): number {  // we can also specify type of value a func wil return
  return num + 2;

// return "hello"

}

function signup(name: string, email: string, password: any) {
  console.log(name, email, password);
}
add(5);

let login = (name: string, email: string, password: any = "dsfvwer") => {
  console.log(name);
};
login("asfde", "efwrfv");

signup("archit", "archit@jrngv", 34343);


function getval(val:number):boolean{
    if (val>5){
        return true;
    } 
    return false

}
// in arrow func 
const gethello=(s:string):string=>{
    return ""
}


const heros=["thor","ironman","me"]
// way in which ts automatically assume that hero is a string
heros.map(hero=>{
    return `hero is ${hero}`
})
// in this we declare the type using this way

heros.map((hero1):string=>{
    return hero1
})
// by using a void we are specifying that a func will never return a value
function consoleerror(error:string) :void{
    console.log(error)

}
// by using never we are specifying that a function will not return any value 
function handleerror(error:string) :never{
throw new Error(error)

}



export {};
