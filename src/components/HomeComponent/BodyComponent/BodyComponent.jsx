import React, { Component, Fragment } from 'react'
import './BodyStyling/BodyStyling.css';

export default class BodyComponent extends Component {

  glassList = [
    {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./img/glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./img/glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./img/glassesImage/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./img/glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./img/glassesImage/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./img/glassesImage/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./img/glassesImage/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./img/glassesImage/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./img/glassesImage/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ]

  state = {
    name: '',
    url: '',
    desc: ''
  }

  renderGlassList = () => {
    return this.glassList.map((glass) => {
      let { name, url, desc } = glass;
      return <div className='col-md-2'>
        <img className='glass__btn' onClick={() => {
          this.setState({
            name: `${name}`,
            url: `${url}`,
            desc: `${desc}`
          })
        }} style={{ width: '160px', height: '65px', cursor: 'pointer' }} src={url} alt='glass__image' />
      </div>

    })
  }


  render() {
    return (
      <div className='store__body'>
        <div className="body__content">
          <div className="content__top container">
            <div className="row">
              {/* Left */}
              <div className="col-md-4">
                <div className="top__glass">
                  {/* Image */}
                  <img className='glass__image' src={`${this.glassList[1].url}`} alt="" />
                  {/* Info */}
                  <div className="glass__info">
                    <h4 className="info__name">{this.glassList[1].name}</h4>
                    <p className="info__desc">
                      {this.glassList[1].desc}
                    </p>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="col-md-4">
                <div className="top__glass">
                  {/* Image */}
                  <img className='glass__image' src={this.state.url} alt="" />
                  {/* Info */}
                  <div className="glass__info">
                    <h4 className="info__name">{this.state.name}</h4>
                    <p className="info__desc">
                      {this.state.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content__bottom container">
            <div className="row">
              {this.renderGlassList()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
