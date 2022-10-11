import styles from "./App.module.css";
import React from "react";
import { Cards } from "./components/Cards/Cards";
import { Chart } from "./components/Chart/Chart";
import { Country } from "./components/CountryPicker/Country";
import { fetchData } from "./api";

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

    console.log(data);

    return (
      <div className={styles.container}>
        <Cards data={data} />
        {/* <Country />
        <Chart /> */}
      </div>
    );
  }
}

export default App;
