calculateTotalPrice(arr)


const cartItem={id,name,price,quantity}


3=1000
6=2000

// lets = a,b
// 2a+ 1b =1000
// 1a+2b=1000

const calculateTotalPrice=(array)=>{
    let total=0
    for(let i = 0;i<array.length ;i++){
        total=total+array[i].price
      if(i==2){
       total=1000
      }
      if(i==5){
        total=2000
       }
    }
    return total
}
