import { useState } from 'react';

import style from './AddBoiler.module.css';

const AddBoiler = () => {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  return (
    <form className={style.addForm}>
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
        <input type='text' placeholder='Add Boiler Type' 
          value={type}
          onChange={(e) => setType(e.target.value)} />
      </div>

      <input type='submit' value='Save Boiler' className='btn btn-block' />
    </form>
  );
};

export default AddBoiler;
