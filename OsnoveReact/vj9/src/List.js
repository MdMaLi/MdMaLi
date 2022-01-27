import React, { Component } from 'react'

const list = (props) => {
    return (
        <>
            {' '}
           
            <h1>{props.listName}</h1>
            {props.hobbies.map(item => { return <div>{item}</div> } ) }
            {props.countries.map(item => { return <div>{item}</div> } ) }
         
        </>
    )
}

export default list