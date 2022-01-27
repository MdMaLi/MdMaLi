import React, { Component } from 'react'
import List from './List'

export default class Person extends Component {
    state = {
        listName : "Hobi",
        hobbies : new Array("Gledanje serija", "Slušanje muzike"),
        countries : new Array("Hrvatska", "Slovenija")
    }
  render() {
    return (
      <>
        <List  {... this.state}></List>
      </>
    )
  }
}
