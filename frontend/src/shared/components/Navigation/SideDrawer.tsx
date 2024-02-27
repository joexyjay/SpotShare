import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'
import './SideDrawer.css'

interface SideDrawerProps {
    show: boolean | undefined;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>; // Add this line
}

const SideDrawer = (props: SideDrawerProps) => {

    const content =  (
        <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <aside className="side-drawer" onClick={props.onClick}> {/* Change this line */}
                {props.children}
            </aside>
        </CSSTransition>
    )

    return (
       ReactDOM.createPortal(
           content,
           document.getElementById('drawer-hook') as HTMLElement
       )
    )
}

export default SideDrawer
