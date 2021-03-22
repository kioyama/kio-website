import React, { Component } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

class ImageCarousel extends Component {
  render() {
    return (
      <div className="carousel">
        <div className="control">
          <MdChevronLeft></MdChevronLeft>
        </div>
        <div className="control">
          <MdChevronRight></MdChevronRight>
        </div>
      </div>
    );
  }
}

export default ImageCarousel;
