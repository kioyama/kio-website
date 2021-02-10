import React, { Component } from "react";
import ItemDisplay from "./ItemDisplay";
import PanelNavigation from "./PanelNavigation";
import { defaultItem, inspoImages } from "./data";
import GalleryDisplay from "./GalleryDisplay";
import About from "./About";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: defaultItem,
      activeGallery: null,
      displayPhotoGallery: false,
      displayDrawingGallery: false,
      displayAbout: true,
      displayInspo: false,
    };
  }

  render() {
    console.log(inspoImages);
    return (
      <div className="wrapper">
        <div className="panel">
          <div className="header">
            <h1 className="heading">Kio Murayama</h1>
          </div>
          <div className="header-nav">
            <div className={this.state.displayAbout ? "nav-box-active" : "nav-box"} onClick={this.setAbout}>
              <p>About</p>
            </div>
            <div className="nav-right" onClick={this.setInspo}>
              <p>Inspo</p>
            </div>
          </div>
          <PanelNavigation
            setPhotoGallery={this.setPhotoGallery}            
            setDrawingGallery={this.setDrawingGallery}
            setActiveItem={this.setItem}
            activeItem={this.state.activeItem}
            displayPhotoGallery={this.state.displayPhotoGallery}
            displayDrawingGallery={this.state.displayDrawingGallery}
        />
          <div className="nav-fill-remaining"></div>
        </div>
        {this.state.displayPhotoGallery || this.state.displayDrawingGallery || this.state.displayInspo ? (
          <GalleryDisplay images={this.state.activeGallery} />
        ) : this.state.displayAbout ? (
          <About />
        ) : (
          <ItemDisplay
            item={this.state.activeItem}
            activeItem={this.state.activeItem}
          />
        )}
      </div>
    );
  }

  setItem = (item) => {
    this.setState({
      displayAbout: false,
      displayPhotoGallery: false,
      displayDrawingGallery: false,
      activeItem: item,
      displayInspo: false,
      activeGallery: null,
    });
  };

  setPhotoGallery = (images) => {
    this.setState({
      activeGallery: images,
      displayPhotoGallery: true,
      displayDrawingGallery: false,
      displayAbout: false,
      activeItem: null,
    });
  };

  setDrawingGallery = (images) => {
    this.setState({
      activeGallery: images,
      displayPhotoGallery: false,
      displayDrawingGallery: true,
      displayAbout: false,
      activeItem: null,
    });
  };

  setAbout = () => {
    this.setState({ displayInspo: false, displayPhotoGallery: false, displayDrawingGallery:false, displayAbout: true, activeItem: null, activeGallery:null });
  };

  setInspo = () => {
    this.setState({ displayInspo: true, displayAbout: false,  displayPhotoGallery: false, displayDrawingGallery:false, activeItem: null, activeGallery: inspoImages });
  };
}

export default Dashboard;
