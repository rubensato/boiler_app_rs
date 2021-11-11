import Button from '../../Shared/Button';

import style from './Item.module.css';

const Item = ({ boiler, onDelete }) => {
  return (
    <tr>
      <td>{boiler.id}</td>
      <td>{boiler.description}</td>
      <td>{boiler.type}</td>
      <td className={style.actions}>
        <Button color='green' text='Edit' />
        <Button color='red' text='Delete' onClick={() => onDelete(boiler.id)} />
      </td>
    </tr>
  );
};

export default Item;
