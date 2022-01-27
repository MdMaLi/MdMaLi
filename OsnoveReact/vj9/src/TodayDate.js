import React, { Component } from 'react'

const todayDate = (props) => {
    return (
        <>
            {' '}
            {props.children}
            <h1>Danasnj datum {props.datum}</h1>
            <button onClick={props.resetiraj}>Reset</button>{' '}
        </>
    )
}

export default todayDate
