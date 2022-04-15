import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


const content = (notes) => {

   return <Note key={notes.id} title= {notes.title} content={notes.content} />

}

const App = () => {

   return ( <> <Header/> {notes.map(content)} <Footer /> </> );

} 

export default App;