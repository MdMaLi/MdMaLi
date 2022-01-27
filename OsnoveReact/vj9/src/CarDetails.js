import React, { Component } from 'react'

const carDetails = (props) => {
    return (
        <>
            <h1>{props.detalji}: </h1>
            <ul>
                <li>{props.boja}</li>
                <li>{props.model}</li>
                <li>{props.HP}</li>
            </ul>
            <button onClick={props.promjeniBoju}>Promjeni boju</button>
            {props.children}
        </>
    )
}

export default carDetails
