import style from './LeftBar.module.css';

function LeftBar() {
  return (
    <div className={style.leftBarContainer}>
      <div className={style.sectionLabel}>
        <p>Buildings</p>
      </div>
      <div className={style.sectionLabel}>
        <p>Users</p>
      </div>
      <div className={style.sectionLabelMark}>
        <p>Boilers</p>
      </div>
    </div>
  );
}

export default LeftBar;
