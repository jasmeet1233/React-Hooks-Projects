const reducer = (state, action) => {
  if (action.type === "Clear_Cart") {
    return { ...state, cart: [] };
  }
  if (action.type === "Remove") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "Increase") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "Decrease") {
    const updatedCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount !== 0);
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "Get_Total") {
    let { amount, total } = state.cart.reduce(
      (accumulator, currentItem) => {
        accumulator.amount += currentItem.amount;
        accumulator.total += (currentItem.price * currentItem.amount);
        return accumulator;
      },
      { amount: 0, total: 0 }
    );
    total = parseFloat(total.toFixed(2))

    return { ...state, amount, total }; //amount is no. of items
  }
  if(action.type === 'Loading'){
      return ({...state, loading: true})
  }
  if(action.type === 'Display_Items'){
      return({...state, cart: action.payload, loading:false})
  }
};

export default reducer;
