import Axios from "axios";
const initial = {};
const quotes = Axios.get(
  `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
)
  .then((response) => {
    initial = response;
  })
  .catch((error) => console.log(error));
console.log(quotes);
console.log(initial);
const reducer = (state = initial, action) => {
  return state;
};

export default reducer;
