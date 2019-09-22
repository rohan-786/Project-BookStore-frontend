import React from 'react';
import style from './cards.scss';

class Card extends React.Component {
    constructor(props){
        super(props);
        this.state={
            onHover :!1
        }
    }

    handleOnHover=()=>{
        this.setState({
            onHover : !this.state.onHover
        })
    }
    
    render() {
        const {onHover} = this.state;
        return (<div onMouseEnter={this.handleOnHover} 
             onMouseLeave={this.handleOnHover}>
            <div className= {onHover ? 'onHoverCard':''}>
            {this.props.children}
            </div>
        </div>);
    }
}

export default Card;