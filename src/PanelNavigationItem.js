import React, { Component } from 'react';

class PanelNavigationItem extends Component {

    render() {
        return (
            <div className={this.props.active ? "nav-item-active" : "nav-item"} onClick={()=>this.props.onClick(this.props.item)}>
                <p>{this.props.item.title}</p>
            </div>);

    }

}

export default PanelNavigationItem;