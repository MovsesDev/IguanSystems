// import React from "react";
// import { connect } from "react-redux";
// import { editFormAC, deleteQuote } from "./redux/formReducer";
// import { useState } from "react";
// import styles from './App.module.css'

// const App = (props) => {
  
//   const [quote, setQuote] = useState("");
//   const [isContentEditable, setIsContentEditable] = useState(false)
//   const [quotes, setQuotes] = useState([])


//   const addQuote = () => {
//     setQuotes([...quotes, quote])
//     props.editFormAC(...quotes);
//     setQuote('')
//     setQuotes([])
//   };

//   const onQuoteChange = (e) => {
//     setQuote(e.target.value)
    
//   }

//   const onQuoteClick = () => {
//     if(isContentEditable) {
//       setIsContentEditable(false)
//     } else {
//       setIsContentEditable(true)
//     }
//   }

//   const deleteQuote = (idx) => {
//     props.deleteQuote(idx)
//   }

//   return (
//     <div className={styles.form}>
//       {props.quotes.map((q, idx) => (
         
//         <div contentEditable={isContentEditable} onClick={onQuoteClick} className={styles.quote}>
//           {q} - {props.authores}
//           <button onClick={deleteQuote(idx)} className={styles.deleteBtn}>Delete</button>
//         </div>
//       ))}

//       <textarea
//         value={quote}
//         onChange={onQuoteChange}
//         placeholder="Enter new placeholder"
//       ></textarea>
//       <div>
//         <button onClick={addQuote}>Add quote</button>
//       </div>
//     </div>
//   );
// };

// let mapStateToProps = (state) => ({
//   quotes: state.form.quotes,
//   authores: state.form.authores,
// });

// export default connect(mapStateToProps, {
//   editFormAC, deleteQuote
// })(App);


