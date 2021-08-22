import React, { Component } from "react";
import About from "./About";

import { PanelStatus } from "./constants";
import GalleryDisplay from "./GalleryDisplay";
import ItemDisplay from "./ItemDisplay";

class Display extends Component {
  render() {
    switch (this.props.panelState) {
      case PanelStatus.GALLERY:
        return (
          <GalleryDisplay
            images={this.props.activeGallery}
            setOverlayImage={this.props.setOverlayImage}
          />
        );
      case PanelStatus.ITEM:
        return (
          <ItemDisplay
            item={this.props.activeItem}
            setOverlayImage={this.props.setOverlayImage}
          />
        );
      case PanelStatus.ABOUT:
      default:
        return <About />;
    }
  }
}

export default Display;
