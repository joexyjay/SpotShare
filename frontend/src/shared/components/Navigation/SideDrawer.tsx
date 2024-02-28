import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

interface SideDrawerProps {
    show: boolean | undefined;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const SideDrawer: React.FC<SideDrawerProps> = (props) => {
    const asideRef = useRef<HTMLDivElement>(null);

    return (
        <CSSTransition
            in={props.show}
            timeout={200}
            classNames="slide-in-left"
            mountOnEnter
            unmountOnExit
            nodeRef={asideRef} // Add the nodeRef prop
        >
            <aside
                className="side-drawer"
                onClick={props.onClick}
                ref={asideRef} // Add the ref to the aside element
            >
                {props.children}
            </aside>
        </CSSTransition>
    );
};

export default SideDrawer;