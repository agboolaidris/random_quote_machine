const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      console.log(action.payload);
      return {
        quotes: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
