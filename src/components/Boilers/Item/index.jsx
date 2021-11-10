const Item = () => {
  return (
    <tr>
      <td>{id}</td>
      <td>{description}</td>
      <td>{type}</td>
      <td className='actions'>
        <button type='button'>Editar</button>
        <button type='button'>Eliminar</button>
      </td>
    </tr>
  );
};

export default Building;
