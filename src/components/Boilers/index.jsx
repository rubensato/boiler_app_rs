import Button from './Button';

import style from './Boilers.module.css';

const Boilers = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.headerTitle}>
        <h2 className=''>Boilers General Listing</h2>
        <Button />
      </div>
      <table>
        <thead>
          <tr>
            <th> Id &#35; </th>
            <th> Description </th>
            <th> Type </th>
          </tr>
        </thead>
        {/* <tbody>
          {buildings.length === 0
            ? 'No hay Calderas'
            : boilers.map((boiler) => (
                <Boiler key={boiler._id} building={building} />
              ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default Boilers;
