import React, { Component } from 'react'

import './HeaderStyling/HeaderStyling.css';

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className='store__header'>
                <div className="header__content">
                    <span className='content__title'>try glass app online</span>
                </div>
            </div>
        )
    }
}
