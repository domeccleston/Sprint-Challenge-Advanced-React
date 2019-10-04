import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import Card from './Card'

 
/*             this.props.data.map((player, index) => (
                <Card player={player} id={index}/>
)) */

class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log(this.props.data)
        return (   
            <div></div>
        )
    }
}
 
export default Cards;