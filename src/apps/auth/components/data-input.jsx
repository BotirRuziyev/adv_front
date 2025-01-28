import React from 'react'
import {label} from './data.js'

function DataInput(props) {
    const {text, input} = props

    return (
        <>
            <div className='data-container'>
                <p className='label' id='label-email'>{props.text}</p>
                <input type = {props.type} className='input' id='in-eamil' placeholder={props.input} />
            </div>
        </>
    );
}

export default DataInput