import React from 'react';
import Button from './Button';
import Styles from './App.module.css'

function App(): JSX.Element {
  return (
    <div>
      <h1 className={Styles.title}>Welcom!</h1>
      <Button text='continue'/>
    </div>
  );
}

export default App;
