import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = (filter) => {
    console.log(filter)
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: filter
      })
    })
  }


  onFindPetsClick = () => {

    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }

    fetch(endpoint)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }))

    console.log(this.state.filters.pets)  

  }


  onAdoptPet = id => {
    console.log(id)
    const pets = this.state.pets.map(pet => { return pet.id === id ? {...pet, isAdopted: true} : pet } )
    this.setState({ pets: pets })  
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} onAdoptPet={this.onAdoptPet} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
