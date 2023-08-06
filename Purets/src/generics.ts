const score:Array<number>=[]
const names:Array<string>=[]


function identity1(val:boolean | number): boolean | number{

return val


}


function identity2(val:any): any{
    return val

}

function identity3<Type>(val:Type) : Type{
    return val

}

identity3("3")
identity3(3)
identity3(true)
identity3("Arcit")

function identity4<T>(val:T):T{
    return val
}


interface bottle{
    brand:string,
    type:number 
}

// identity4<bottle>({/})


function getproducts<T>(products:T[]):T{
    const index=4

    return products[index]
}

const getmoreproducts=<T>(products: number[]): number=>{
    const index=34;
    return products[index]
}

interface database{
    connection:string,
    username:string,
    password:string
}

function hey<T,U extends database>( val1:T,val2:U):{}{
    return {
        val1,
        val2
    }


}
// hey(3,{})

interface quiz{
    name:string,
    type:string,

}
interface course{

name:string,
author:string,
subject:string

}

class sell<T>{
    public cart:T[]=[] 

addtocart(products:T){
    this.cart.push(products)
}

}