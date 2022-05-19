import { quoteApi } from "../api/api,js";

const ADD_QUOTE = "ADD_QUOTE";
const DELETE_QUOTE = 'DELETE_QUOTE'

const initialState = {
  quotes: [  ],
  authores: ["Albert Einstein"],
  
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      
      return {
        ...state,
        quotes: [...state.quotes, action.quote],
      };

      case DELETE_QUOTE: 
      return {
        ...state,
        quotes: [...state.quotes.splice(action.index, 1)]
      }
  default:
      return state;
  }
};

// export const editFormAC = (newQuote) => ({type: EDIT_FORM, newQuote})

export const addQuote = (quote) => ({ type: ADD_QUOTE, quote });
export const deleteQuote = (index) => ({ type: DELETE_QUOTE, index });

// export const addQuote = () => {
//   return (dispatch) => {
//     quoteApi.sendQuote();
//   };
// };

export default formReducer;
