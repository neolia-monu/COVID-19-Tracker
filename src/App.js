import styles from "./App.module.css";
import React from "react";
import { Cards } from "./components/Cards/Cards";
import { Country } from "./components/CountryPicker/Country";
import { fetchData } from "./api";
import { CovidChart } from "./components/Chart/Chart";

// import { Cards, Chart, Country } from "./components";

class App extends React.Component {
  state = {
    data: ""
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        {/* <Country />
        <Chart /> */}
        <CovidChart />
      </div>
    );
  }
}

export default App;
