import React from 'react';
import { connect } from "react-redux";
import '../About/About.css'


class Contact extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className='Nav'>
                    <button onClick={() => this.props.history.push('/')}>Home</button>
                    <button onClick={() => this.props.history.push('/contact')}>Contact</button>
                    <button onClick={() => this.props.history.push('/about')}>About</button>
                </div>
                <h1>Redux Contact</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

const mapToStateProps = state => {
    return {
        name: state.name,
        age: 21,
        School: 'Saylani'
    }
}

export default connect(mapToStateProps, null)(Contact)