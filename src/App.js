import './App.css';
import React from 'react';

// Need the index.js in the components folder to import as such
import { Cards, Chart, CountryPicker} from "./components";
import styles from './App.module.css';
import { fetchData} from './api'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData})
    console.log("data", this.state.data);
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <h1>Apppp</h1>
        <Cards data={data}/>
        <Chart/>
        <CountryPicker/>
      </div>
    );
  }
}

export default App;
