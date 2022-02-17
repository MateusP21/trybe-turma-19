import { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    const { averageWeight, id, image, moreInfo, name, type } =
      this.props.pokemon;

    return (
      <div className='card'>
        <div className='card-left'>
          <h1>{name}</h1>
          <p>{type}</p>
        </div>
        <div className='card-right'>
          <img src={image} alt='' />
          <span>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</span>
        </div>
      </div>
    );
  }
}
