import React from 'react'

import PetBrowser from './PetBrowser'

class Pet extends React.Component {

  generateBtnElement = (prop) => {
    if (prop === false) {
      return <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }


  render() {
    return (
      <div className="card">
      {console.log(this.props.pet)}
      
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.generateBtnElement(this.props.pet.isAdopted)}
        </div>
      </div>
    )
  }
}

export default Pet
