import Button from '../Shared/Button';
import Item from './Item';

import style from './Boilers.module.css';

const Boilers = ({ boilers }) => {
  const onClick = () => {
    console.log('Click');
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.headerTitle}>
        <h2 className=''>Boilers General Listing</h2>
        <Button color='green' text='+ Add Boiler' onClick={onClick} />
      </div>
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
            ? 'No hay Calderas'
            : boilers.map((boiler) => (
                <Item key={boiler.id} boiler={boiler} />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Boilers;
