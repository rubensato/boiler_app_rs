import { useState } from 'react';

import Button from '../Shared/Button';
import Item from './Item';
import AddBoiler from './AddBoiler';

import style from './Boilers.module.css';

const Boilers = () => {
  const [showAddBoiler, setShowAddBoiler] = useState(false);

  const [boilers, setBoilers] = useState([
    { id: 1, description: 'Zoolab', type: 'A' },
    { id: 3, description: 'Zoolab', type: 'C' },
    { id: 4, description: 'Gembucket', type: 'D' },
    { id: 5, description: 'Holdlamis', type: 'C' },
    { id: 6, description: 'Tampflex', type: 'A' },
    { id: 7, description: 'Bitwolf', type: 'A' },
    { id: 8, description: 'Tresom', type: 'D' },
    { id: 9, description: 'Opela', type: 'B' },
    { id: 10, description: 'Stringtough', type: 'C' },
    { id: 11, description: 'Konklab', type: 'A' },
    { id: 12, description: 'Sonair', type: 'B' },
  ]);

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
