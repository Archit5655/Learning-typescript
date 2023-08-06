// narrowing

function detect(val:number |string ){
    if (typeof val==="string") {
       return val.toLowerCase()   
    }
    return val + 3
}
function provideId(id:string | null){
    if(!id){
        console.log("Please enter the id")
        return
    }
    id.toLowerCase()


}
function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

  interface USer3{
    name:string,
    email:string
  }
  interface Adminn{
    name:string,
    email:string,
    isAdmin:boolean
  }

function isAdmin(accout: User | Adminn){
    if ("isAdmin" in accout) {
        return accout.isAdmin
        
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 

    } else {
      console.log(x.toUpperCase());
                 

    }
  }


type Fish={swim:()=> void}
type Fly={fly:()=> void}
function isFish(pet: Fish | Fly): pet is Fish{
    return (pet as Fish).swim! == undefined
}



function getfood(pet: Fish | Fly){
    if (isFish(pet)) {
        pet
        return "Fish food"
        
    }
    pet
    return "fly food"

}


// discriminated union


interface circle{
    kind: "circle",
    radius:number,

}

interface square{
    kind: "square"
    side:number
}

interface rectangle{
    kind:"rectangle",
    length:number,
    width:number,
}

type Shape =circle |square |rectangle
function getshape(shape:Shape){
    if(shape.kind ==="circle"){
        return Math.PI *shape.radius**2

    }
// return shape.side * shape.side
}

function getArea(shape:Shape){
    switch (shape.kind){
        case "circle":
           return  Math.PI *shape.radius**2

           case "square":
            return  shape.side * shape.side
            case "rectangle":
                return shape.length*shape.width

            default :
            const shapedefault:never= shape
            return shapedefault


            }
}


