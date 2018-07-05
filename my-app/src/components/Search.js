import React, { Component } from 'react';
import "./Search.css";



const Search = (props) =>{
  console.log(props);
    return (
     <form onSubmit = {props.getWeather} className = "form-container">
       <input type = "text" name = "country" placeholder = "Country"/>
       <input type = "text" name = "city" placeholder = "City"/>
       <button><i className="fa fa-search"></i></button>
     </form> 
    )
}



export default Search;