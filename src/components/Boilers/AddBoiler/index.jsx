import { useState } from 'react';

import style from './AddBoiler.module.css';

const AddBoiler = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      alert('Please add a description for boiler');
      return;
    }

    if (!type) {
      alert('Please add the type for boiler');
      return;
    }

    onAdd({ description, type });

    setDescription('');
    setType('');
  };

  return (
    <form className={style.addForm} onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Add Boiler Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Type</label>
        <input
          type='text'
          placeholder='Add Boiler Type'
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Boiler' className='btn btn-block' />
    </form>
  );
};

export default AddBoiler;
