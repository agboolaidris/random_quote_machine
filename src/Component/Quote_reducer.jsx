const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        quotes: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
