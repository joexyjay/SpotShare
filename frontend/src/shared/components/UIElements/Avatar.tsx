import './Avatar.css';
import { CSSProperties } from 'react';

interface AvatarProps {
    image: string;
    alt: string;
    width: string;
    className: string;
    style: CSSProperties;  
}

const Avatar = (props: AvatarProps) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
