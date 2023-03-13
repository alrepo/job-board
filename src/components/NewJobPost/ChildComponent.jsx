import React, { useState } from "react";

function ChildComponent(props){
    const [value, setValue] = useState('');
  
    function handleChange(event) {
      const { value } = event.target;
      setValue(value);
      props.onChange(value); // call the parent component's callback function
    }
  
    return (
      <input onChange={handleChange} />
    );
  }
  export default ChildComponent;