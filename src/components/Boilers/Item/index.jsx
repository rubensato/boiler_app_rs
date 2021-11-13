import { useState } from 'react';

import Button from '../../Shared/Button';
import EditBoiler from '../EditBoiler';

import style from './Item.module.css';

const Item = ({ boiler, onDelete }) => {
  const [showEditBoiler, setShowEditBoiler] = useState(false);
  const [boilers, setBoilers] = useState([]);

  // onClick function to set showEditBoiler
  const onClickEdit = () => {
    setShowEditBoiler(!showEditBoiler);
  };

  const editBoiler = async (updatedValuesBoiler) => {
    console.log(
      'editBoiler: ' +
        updatedValuesBoiler.id +
        ' , ' +
        updatedValuesBoiler.description +
        ' , ' +
        updatedValuesBoiler.type
    );

    setBoilers(
      boilers.map((boiler) => 
        boiler.id === updatedValuesBoiler.id ? { ...boiler, description: updatedValuesBoiler.description,
        type: updatedValuesBoiler.type } : boiler
      )
    )
  };

  return (
    <>
      <tr>
        <td>{boiler.id}</td>
        <td>{boiler.description}</td>
        <td>{boiler.type}</td>
        <td className={style.actions}>
          <Button
            color='green'
            text='Edit'
            color={showEditBoiler ? 'red' : 'green'}
            text={showEditBoiler ? 'Cancel Edit' : 'Edit'}
            onClick={onClickEdit}
          />
          {!showEditBoiler && (
            <Button
              color='red'
              text='Delete'
              onClick={() => onDelete(boiler.id)}
            />
          )}
        </td>
      </tr>
      {showEditBoiler && <EditBoiler boiler={boiler} onEdit={editBoiler} />}
    </>
  );
};

export default Item;
