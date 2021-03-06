import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import { Component } from "react";
import ImageList from "./components/ImageList";
import PageCentered from "./styling/Styled";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <PageCentered>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </PageCentered>
    );
  }
}

export default App;
