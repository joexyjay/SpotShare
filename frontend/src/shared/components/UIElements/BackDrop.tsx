import ReactDOM from 'react-dom';

import './BackDrop.css';

interface BackDropProps {
  onClick: () => void;
}

const BackDrop = (props: BackDropProps) => {
  const el = document.getElementById('backdrop-hook');
  return el ? ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    el
  ) : null;
};

export default BackDrop;
