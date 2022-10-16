import styles from "./App.module.css";
import React from "react";
import { Cards } from "./components/Cards/Cards";
import { Country } from "./components/CountryPicker/Country";
import { fetchData } from "./api";
import { CovidChart } from "./components/Chart/Chart";

import image from "./images/COVID-19.png";
// import { Cards, Chart, Country } from "./components";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
    // console.log(fetchChangeUrl);

    // console.log(country);

    //fetch the data

    // set the state
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-10" />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <CovidChart data={data} country={country} />
      </div>
    );
  }
}

export default App;
