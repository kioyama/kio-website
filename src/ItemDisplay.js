import React, { Component } from "react";
import ImageCarousel from "./ImageCarousel";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

class ItemDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIndex: 0,
    };
  }

  indexHandler = (offset) => {
    if (this.state.carouselIndex === 0 && offset === -1) {
      return;
    } else if (
      this.state.carouselIndex === this.props.item.images.length - 1 &&
      offset === 1
    ) {
      return;
    } else {
      this.setState({ carouselIndex: this.state.carouselIndex + offset });
    }
  };

  renderProcessGrid = () => {
    if (this.props.item.processImages.length > 0) {
      return this.props.item.processImages.map((img) => <div>
        <img  onClick={() =>
              this.props.setOverlayImage(
                "photos/" + img
              )} src={"photos/" +  img} />
        </div>)
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div className="display-wrap">
        <h2 className="display-title">{this.props.item.title}</h2>
        {this.props.item.details.map((detail) => (
          <p className="display-detail">{detail}</p>
        ))}
        <div className="display-image-wrap">
          <div className="arrow-wrap">
            <MdChevronLeft
              className={
                this.state.carouselIndex === 0 ? "icon-disabled" : "icon"
              }
              onClick={() => this.indexHandler(-1)}
            />
          </div>
          <img
            className="display-image"
            src={"photos/" + this.props.item.images[this.state.carouselIndex]}
            alt={this.props.title}
            onClick={() =>
              this.props.setOverlayImage(
                "photos/" + this.props.item.images[this.state.carouselIndex]
              )
            }
          />{" "}
          <div className="arrow-wrap">
            <MdChevronRight
              className={
                this.state.carouselIndex === this.props.item.images.length - 1
                  ? "icon-disabled"
                  : "icon"
              }
              onClick={() => this.indexHandler(1)}
            />
          </div>
        </div>
        <div className="display-description">
          <h3 className="display-description-title">Description:</h3>
          <p className="display-detail">{this.props.item.description}</p>
        </div>
        {this.props.item.processImages.length > 0 ? <h3 className="display-description-title">Process:</h3> : <div/>}
        <div className="process-grid">
          {this.renderProcessGrid()}
        </div>
      </div>
    );
  }
}

export default ItemDisplay;
