import React from 'react';
import '../About/About.css'
import { connect } from "react-redux";
import { increment, decrement } from '../../Redux/action'

class Home extends React.Component {

    render() {
        console.log(this.props)

        return (
            <div>
            <div className='Nav'>
                <button onClick={()=>this.props.history.push('/')}>Home</button>
                <button onClick={()=>this.props.history.push('/contact')}>Contact</button>
                <button onClick={()=>this.props.history.push('/about')}>About</button>
            </div>
                <h1>Redux Home</h1>
                <h1>{this.props.counter}</h1>
                <button onClick={()=>this.props.increment(this.props.counter+1)} >Increament</button>
                <button onClick={()=>this.props.decrement()} >Decrement</button>
            </div>
        )
    }
}
const mapToStateProps = state => {
    return {
        name: state.name,
        age: 0,
        School: 'Saylani',
        counter: state.count
    }
}

const MapDispatchToConst=(disptch)=>{
    return {
        increment : () => disptch(increment()),
        decrement : () => disptch(decrement())
    }
}

export default connect(mapToStateProps, MapDispatchToConst)(Home)