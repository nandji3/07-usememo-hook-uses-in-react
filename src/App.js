import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [toggleButton, setToggleButton] = useState(false)

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const descendingOrderListchangeHandler = useCallback(() => {
    setToggleButton(!toggleButton);
  }, [toggleButton]);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} toggleButton={toggleButton} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={descendingOrderListchangeHandler}>{!toggleButton ? "Change to Descending Order" : "Change to Ascending Order"}</Button>
    </div>
  );
}

export default App;
