import React, { Component } from 'react';

class ItemDisplay extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        return (<div className="display-wrap">
            <h2 className="display-title">{this.props.item.title}</h2>
            {this.props.item.details.map((detail)=><p className="display-detail">{detail}</p>)}
            <div className="display-image-wrap"><img className="display-image" src={"photos/"+ this.props.item.image} alt={this.props.title}/></div>
            <div className="display-description">
                <h3 className="display-description-title">Description:</h3>
                <p className="display-detail">{this.props.item.description}</p>
            </div>
        </div>);
    }    
}

export default ItemDisplay;