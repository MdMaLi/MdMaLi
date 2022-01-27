import React, { Component } from 'react'
import CarDetails from './CarDetails'

export default class Car extends Component {
    state = {
        boja: 'Crvena',
        model: 'Peugeot',
        HP: 75,
    }
    poruka = () => {
        alert(this.state.boja)
    }
    dvostrukiKlik = () => {
        this.setState({ boja: 'Plava' })
    }
    onLeve = (hp) => {
        this.setState({ HP: hp })
    }

    render() {
        return (
            <>
                <button onClick={this.poruka}>Klikni</button>
                <button onDoubleClick={this.dvostrukiKlik}>
                    Dvostruki klikni
                </button>
                <button onMouseLeave={(e) => this.onLeve(95)}>
                    Dvostruki klikni
                </button>
                <CarDetails
                    detalji="Detalji auta"
                    {...this.state}
                    promjeniBoju={this.dvostrukiKlik}
                >
                    <strong>Poslano iz roditeljske komponente</strong>
                </CarDetails>
            </>
        )
    }
}
