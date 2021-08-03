import React, { useContext } from 'react';
import { myContext } from './app';

export function context() {
  return (
    <div>
      <Display />
    </div>
  );
}

function Display() {
  debugger;
  const value = useContext(myContext);
  return <div>Context Value is {value}.</div>;
}
