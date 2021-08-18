import React, { Component } from "react";

class GalleryDisplay extends Component {
  render() {
    return (
      <div className="panel">
        <div className="gallery">
          <div class="gallery-row">{this.renderImages()}</div>
        </div>
        <div className="nav-fill-remaining"></div>
        <div className="footer-border"></div>
      </div>
    );
  }

  renderImages = () => {
    let images = this.props.images;
    let numImages = this.props.images.length;
    let colOne = images.slice(0, numImages / 3);
    let colTwo = images.slice(numImages / 3, (2 * numImages) / 3);
    let colThree = images.slice((2 * numImages) / 3, numImages);
    let colImageLists = [colOne, colTwo, colThree];
    let cols = colImageLists.map((list) => (
      <div className="gallery-col">
        {list.map((img) => (
          <img
            src={"photos/" + img}
            className="gallery-img "
            alt={img}
            onClick={() => this.props.setOverlayImage("photos/" + img)}
          ></img>
        ))}
      </div>
    ));
    return cols;
  };
}

export default GalleryDisplay;
