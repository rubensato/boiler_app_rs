import { useRef } from 'react';

import style from './EditBoiler.module.css';

const EditBoiler = ({ boiler, onEdit }) => {
  const descriptionInputRef = useRef();
  const typeInputRef = useRef();

  const { id, description, type } = boiler;

  const editAndSave = () => {
    const enteredDescription = descriptionInputRef.current.value;
    const enteredType = typeInputRef.current.value;

    console.log('entered Description: ' + enteredDescription);
    console.log('enteredType: ' + enteredType);

    const updatedValuesBoiler = {
      id: id,
      description: enteredDescription,
      type: enteredType,
    };

    onEdit(updatedValuesBoiler);
  };

  return (
    <>
      <tr>
        <td colspan='4'>
          <form className={style.editForm} onSubmit={editAndSave}>
            <div className='form-control'>
              <label>id</label>
              <input type='text' value={id}></input>
            </div>
            <div className='form-control'>
              <label>description</label>
              <input
                className='form-control'
                type='text'
                defaultValue={description}
                ref={descriptionInputRef} 
              ></input>
            </div>
            <div className='form-control'>
              <label>type</label>
              <input
                className='form-control'
                type='text'
                defaultValue={type}
                ref={typeInputRef}
              ></input>
            </div>
              <button
                type='submit'
                className={style.buttonSave}
              >
                Save Data
              </button>
          </form>
        </td>
      </tr>
    </>
  );
};

export default EditBoiler;
