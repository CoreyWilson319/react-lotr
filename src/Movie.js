import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Title: {this.props.title}</h1>
                <p>Time: {this.props.hours}:{this.props.minutes}</p>
            </div>
        );
    }
}

export default Movie