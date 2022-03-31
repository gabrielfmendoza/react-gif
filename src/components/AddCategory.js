import React, { useState } from "react";
import PropTypes from 'prop-types'

 export const AddCategory = ({setCategories}) => {
    
    
    const [inputValue, setInputValue] = useState("");


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0){
            setCategories(cats => {
                if(cats.find(cat => cat === inputValue)){
                    const newCats = [...cats];
                    newCats.splice(newCats.indexOf(inputValue), 1);
                    newCats.unshift(inputValue);
                    return newCats;
                }else{
                    return [ inputValue,...cats];
                }
            });
            setInputValue("");
        }
       
    }
   
  return (
    <form onSubmit={handleSubmit}>
      <input
         type="search"
         value={inputValue}
          onChange={handleInputChange}
          
         
      />
    </ form >
  );
};
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};

