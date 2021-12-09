const pageReducer = (state = "Welcome to my beverage website", action) => {
  switch (action.type) {
    case "BeverageList ":
      return (state = action.payload);

    case "BuyBeverage":
      return (state = action.payload);

    case "Coffee":
      return (state = action.payload);

    case "Tea":
      return (state = action.payload);

    case "Milk":
      return (state = action.payload);

    default:
      return state;
  }
};
export default pageReducer;
