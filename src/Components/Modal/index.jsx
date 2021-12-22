import React from 'react';
import Popup from 'reactjs-popup';
import './index.css'
// eslint-disable-next-line
export default (props) => (
    <Popup
        trigger={props.trigger}
        modal
        nested
    >
        {close => (
            <div id="Modal">
                <button className="close btn-sm btn btn-secondary" onClick={close}>
                    &times;
                </button>
                {props.children}
            </div>
        )}
    </Popup>
);