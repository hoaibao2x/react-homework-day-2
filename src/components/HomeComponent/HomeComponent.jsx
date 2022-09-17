import React, { Component } from 'react'
import BodyComponent from './BodyComponent/BodyComponent'
import FooterComponent from './FooterComponent/FooterComponent'
import HeaderComponent from './HeaderComponent/HeaderComponent'

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <BodyComponent />
                <FooterComponent />
            </div>
        )
    }
}
