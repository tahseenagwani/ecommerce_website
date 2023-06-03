export const CartReducer=(state,action)=>{
    let index = -1
    if(action.payload)
        index=state.cartItems.findIndex(x=>x.id===action.payload.id)

    let newItems=[...state.cartItems];
    
    switch(action.type){
    case "ADD":
    case "INCQTY":
        if(index === -1){
            newItems.push({...action.payload,quantity:1})
        
        }
        else{
            newItems[index].quantity++;
           
        }
        break;
    case "REMOVE":
        if(index > -1){
            // state.cartItems.splice(index,1)
            newItems=state.cartItems.filter(x=> x.id !== action.payload.id)
          
        }
        break

    case "DECQTY":
        if(index > -1){
            if(newItems[index].quantity > 1)
            {

                newItems[index].quantity--;
            }
            //state.cartItems[index].quantity--
           
            
        }
        break

    case "CLEAR":
      newItems=[]
      
    break;

    default:
      
} 


state.cartItems=newItems;
return state

}
