import React from "react";
import classes from './MyModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootModal = [classes.myModal];

    if (visible) {
        rootModal.push(classes.active);
    }

    return (
        <div className={rootModal.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;