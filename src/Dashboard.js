import React, { Component } from "react";
import PanelNavigation from "./PanelNavigation";
import Display from "./Display";

import { inspoImages } from "./data";
import { PanelStatus } from "./constants";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      activeItem: null,
      scrollTop: 0,
      activeGallery: null,
      panelState: PanelStatus.ABOUT,
      overlayImage: null,
    };
  }
  listenScrollEvent = () => {
    const scrollTop = this.myRef.current.scrollTop;
    this.props.onScrollPanel(this.state.scrollTop - scrollTop);
    this.setState({
      scrollTop: scrollTop,
    });
  };
  render() {
    return (
      <div className="wrapper">
        {this.state.overlayImage != null ? (
          <div
            className={"overlay-container"}
            onClick={() => this.setState({ overlayImage: null })}
          >
            <img
              className="display-image"
              src={this.state.overlayImage}
              alt={this.props.title}
            />
          </div>
        ) : (
          <div />
        )}
        <div
          className="panel"
          onScroll={this.listenScrollEvent}
          ref={this.myRef}
        >
          <div className="header">
            <h1 className="heading">Kio Murayama</h1>
          </div>
          <div className="header-nav">
            <div
              className={
                this.state.panelState === PanelStatus.ABOUT
                  ? "nav-box-active"
                  : "nav-box"
              }
              onClick={this.setAbout}
            >
              <p>about</p>
            </div>
            <div
              className={
                this.state.activeGallery === inspoImages
                  ? "nav-box-active"
                  : "nav-box"
              }
              onClick={this.setInspo}
            >
              <p>inspo</p>
            </div>
          </div>
          <PanelNavigation
            setGallery={this.setGallery}
            setItem={this.setItem}
            gallery={this.state.activeGallery}
            panelState={this.state.panelState}
            activeItem={this.state.activeItem}
          />
          <div className="footer"></div>
          <div className="nav-fill-remaining"></div>
        </div>
        <div></div>
        <Display
          panelState={this.state.panelState}
          activeItem={this.state.activeItem}
          activeGallery={this.state.activeGallery}
          setOverlayImage={this.setOverlayImage}
        />
      </div>
    );
  }

  setItem = (item) => {
    this.setState({
      activeItem: item,
      activeGallery: null,
      panelState: PanelStatus.ITEM,
    });
  };

  setGallery = (gallery) => {
    this.setState({
      activeItem: null,
      activeGallery: gallery,
      panelState: PanelStatus.GALLERY,
    });
  };

  setAbout = () => {
    this.setState({
      activeItem: null,
      activeGallery: null,
      panelState: PanelStatus.ABOUT,
    });
  };

  setInspo = () => {
    this.setState({
      activeItem: null,
      activeGallery: inspoImages,
      panelState: PanelStatus.GALLERY,
    });
  };

  setOverlayImage = (path) => {
    this.setState({ overlayImage: path });
  };
}

export default Dashboard;
