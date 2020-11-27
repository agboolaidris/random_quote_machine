const initial = {
  Data: [{ quote: "i love africe", author: "iggg " }],
  isLoading: true,
};
const reducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      const result = action.payload.quotes;
      console.log(result);
      return {
        Data: result,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
