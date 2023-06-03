export const CartReducer=(state,action)=>{

let index = -1
if(action.payload){

     index=state.cartItems.findIndex(x=>x.id===action.payload.id)

switch(action.type){
    case "ADD":
    case "INCQTY":
        if(index === -1){
            state.cartItems.push({...action.payload,quantity:1})
            console.log("Item added"+state?.cartItems?.quantity)
            console.log(state)
        }
        else{
           state.cartItems[index].quantity++
            console.log("quntatity increased"+state?.cartItems?.quantity)
        }
        break
    case "REMOVE":
        if(index > -1){
            state.cartItems.splice(index,1)
            console.log("Item Removed")
        }
        break

    case "DECQTY":
        if(index>-1){
            state.cartItems[index].quantity--
            console.log("Item decreased")
            
        }
        break

    case "CLEAR":
        state.cartItems=[]
        console.log("Items Cleared")
    break

    default:
      
} 

}
return state
}