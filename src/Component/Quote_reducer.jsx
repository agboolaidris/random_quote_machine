const initial = {
  isLoading: true,
};
const reducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const result = action.payload.quotes;

      return {
        Data: result,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
