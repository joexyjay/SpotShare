import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './BackDrop';
import './Modal.css';

interface ModalOverlayProps {
  className?: string;
  style?: React.CSSProperties;
  headerClass?: string;
  header: string;
  onSubmit?: (event: React.FormEvent) => void;
  contentClass?: string;
  children: React.ReactNode;
  footerClass?: string;
  footer: React.ReactNode;
}

const ModalOverlay = (props: ModalOverlayProps) => {
  const modalContentWrapperRef = useRef<HTMLDivElement>(null);

  const content = (
    <div className={`modal ${props.className}`} style={props.style} ref={modalContentWrapperRef}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook') as Element);
};

interface ModalProps extends ModalOverlayProps {
  show: boolean;
  onCancel: () => void;
}

const Modal = (props: ModalProps) => {
const modalContentWrapperRef = useRef<HTMLDivElement>(null);

return (
    <>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={200}
            classNames="modal"
            nodeRef={modalContentWrapperRef}
        >
            <ModalOverlay {...props} />
        </CSSTransition>
    </>
);
};

export default Modal;

