import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [value, setValue] = useState('');

  function handleChildChange(newValue) {
    setValue(newValue); // update the parent component's state
  }

  return (
    <div>
      <ChildComponent onChange={handleChildChange} />
      <p>Value in parent component: {value}</p>
    </div>
  );
}
export default ParentComponent;
