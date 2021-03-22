import React, { Component } from "react";
import PanelNavigationItem from "./PanelNavigationItem";
import { sections } from "./data";
import { PanelStatus } from "./constants";

class PanelNavigation extends Component {
  render() {
    return this.renderSections();
  }

  renderSections() {
    return sections.map((section) => {
      if (section.type === "item_view") {
        return (
          <div>
            <div className="section-header">
              <h2 className="section-heading">{section.title}</h2>
            </div>
            {this.renderNavItems(section.items)}
          </div>
        );
      } else {
        return (
          <div>
            <div className="section-header">
              <h2 className="section-heading">{section.title}</h2>
            </div>
            <div className="nav-row">
              <div
                className={(this.props.panelState === PanelStatus.GALLERY && this.arrayEquals(this.props.gallery, section.images))  ? "nav-item-active" : "nav-item"}
                onClick={() => this.props.setGallery(section.images) }
              >
                <p>View all</p>
              </div>
              <div className="blank-nav-item"></div>
            </div>
          </div>
        );
      }
    });
  }

  renderNavItems = (items) => {
    let rows = [];
    for (var i = 0; i < items.length; i = i + 2) {
      rows.push(
        <div className="nav-row">
          <PanelNavigationItem
            item={items[i]}
            active={items[i] === this.props.activeItem}
            onClick={this.props.setItem}
          />
          {i + 1 < items.length ? (
            <PanelNavigationItem
              item={items[i + 1]}
              active={items[i + 1] === this.props.activeItem}
              onClick={this.props.setItem}
            />
          ) : (
            <div className="blank-nav-item" />
          )}
        </div>
      );
    }
    return rows;
  };

  arrayEquals = (a, b) => {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }
}

export default PanelNavigation;
