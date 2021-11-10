const Boilers = () => {
  
  return (
    <>
      <h2 className=''>Listado de Calderas</h2>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>escription</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {buildings.length === 0
            ? 'No hay Calderas'
            : boilers.map((boiler) => (
                <Boiler key={boiler._id} building={building} />
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Boilers;