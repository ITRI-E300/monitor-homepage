import React, { useState, useEffect } from 'react'
import './index.css'
import defaultImg from '../../Asstes/images/service.png'

function checkServer(url, timeout, onSuccess, onFail) {
    const controller = new AbortController();
    const signal = controller.signal;
    const options = { mode: 'no-cors', signal };
    return fetch(url, options)
        .then(setTimeout(() => { controller.abort() }, timeout))
        .then(response => onSuccess())
        .catch(error => onFail());
}

export default function ServiceCard(props) {
    const [serviceState, setserviceState] = useState('unknow')
    let { serviceUrl = '' } = props
    useEffect(() => {
        setInterval((() => {
            if (serviceUrl !== '') {
                checkServer(
                    serviceUrl,
                    5000,
                    () => setserviceState('alive'),
                    () => setserviceState('dead')
                )
            }
        })(), 10000)
    // eslint-disable-next-line
    }, [])

    return (
        <div
            className={`card ${serviceState === 'dead' ? 
                                "cursor-not-allowed" : serviceUrl===""?"cursor-default":"cursor-pointer"}`}
        >
            <img className='card-img-top' src={defaultImg} alt="" srcSet="" />
            <div className="card-body">
                <h5 className="card-title">
                    {serviceUrl !== '' ?
                        <span className={`${serviceState} dot me-2`}></span> : <></>
                    }
                    {props.title}
                </h5>
                <hr />
                <div className="card-text">
                    {props.children}
                </div>
            </div>
        </div>)
}