import { useState, useEffect } from 'react';

import Button from '../Shared/Button';
import Item from './Item';
import AddBoiler from './AddBoiler';

import style from './Boilers.module.css';

const Boilers = () => {
  const [showAddBoiler, setShowAddBoiler] = useState(false);

  const [boilers, setBoilers] = useState([]);

  useEffect(() => {
    const getBoilers = async () => {
      const boilersFromServer = await fetchBoilers();
      setBoilers(boilersFromServer);
    };

    getBoilers();
  }, []);

  //fetch boilers
  const fetchBoilers = async () => {
    const res = await fetch('http://localhost:5000/boilers');
    const data = await res.json();

    return data;
  };

  //Add Boiler
  const addBoiler = (boiler) => {
    const id = Math.floor(Math.random() * 100) + 1;

    const newBoiler = { id, ...boiler };
    setBoilers([...boilers, newBoiler]);
  };

  // Delete Boiler
  const deleteBoiler = (id) => {
    setBoilers(boilers.filter((boiler) => boiler.id !== id));
  };

  const onClick = () => {
    setShowAddBoiler(!showAddBoiler);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.headerTitle}>
        <h2 className=''>Boilers General Listing</h2>
        <Button
          color={showAddBoiler ? 'red' : 'green'}
          text={showAddBoiler ? 'Close' : '+ Add Boiler'}
          onClick={onClick}
        />
      </div>
      {showAddBoiler && <AddBoiler onAdd={addBoiler} />}
      <table className={style.tableStyle}>
        <thead>
          <tr>
            <th> Id &#35; </th>
            <th> Description </th>
            <th> Type </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {boilers.length === 0
            ? 'No Boilers To Show'
            : boilers.map((boiler) => (
                <Item key={boiler.id} boiler={boiler} onDelete={deleteBoiler} />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boilers;
