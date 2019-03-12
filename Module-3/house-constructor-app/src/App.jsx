import React, { Component } from 'react';
import style from './App.module.css';
import Button from './Button/Button';
import Image from './Image/Image';
import Address from './Address/Address';
import Price from './Price/Price';
import Area from './Area/Area';
import Card from './Card/CardWrapper';

class App extends Component {

  state = {
    templates: [],
    houseData: [],
    mark: [],
  }

  fetchHouseData = () => {
    fetch('http://demo4452328.mockable.io/properties')
      .then(res => res.json())
      .then(data => this.setState({
        houseData: data.data,
      }))
  }

  fetchTemplates = () => {
    fetch('http://demo4452328.mockable.io/templates')
    .then(res => res.json())
    .then(data => this.setState({
      templates: data,
    }))
  }

  componentDidMount() {
    this.fetchHouseData();
    this.fetchTemplates();
  }

  renderTemplate = ({target}) => {
    const selectedTemplate = this.state.templates.find(el => el.id === Number(target.dataset.id));
    const filledHouseObj = this.state.houseData.map(el => 
      selectedTemplate.template.map(x => 
          (x.component === 'IMAGE' && <Image src={el[x.field]} cardObj={x} price={el.price} />) ||
          (x.component === 'ADDRESS' && <Address address={el[x.field]} /> ) || 
          (x.component === 'PRICE' && <Price price={el[x.field]} />) || 
          (x.component === 'AREA' && <Area area={el[x.field]} />)
      ));
    this.setState({
    mark : filledHouseObj,
  })
  }
 
  render() {
    return (
      <div className="App">
        <div className={style['btn-wrapper']}>
          <Button value='Template 1' className={style.btn} action={this.renderTemplate} id='1' />
          <Button value='Template 2' className={style.btn} action={this.renderTemplate} id='2' />
          <Button value='Template 3' className={style.btn} action={this.renderTemplate} id='3' />
        </div>
        <Card markup={this.state.mark} />
      </div>
    );
  }
}

export default App;
