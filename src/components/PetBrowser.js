import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePetComponents = () => {
    return this.props.pets.map((pet, idx) => <Pet key={idx} pet={pet} onAdoptPet={this.props.onAdoptPet} /> )
  } 

  render() {
    return (
      <div className="ui cards">
        {this.generatePetComponents()}
  
      </div>
    )
  }
}

export default PetBrowser



