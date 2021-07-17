import './App.css';
import React from 'react';

// Need the index.js in the components folder to import as such
import { Cards, Chart, CountryPicker} from "./components";
import styles from './App.module.css';
import { fetchData} from './api'
import { render } from '@testing-library/react';

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData();
    console.log("data", data);
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>Apppp</h1>
        <Cards/>
        <Chart/>
        <CountryPicker/>
      </div>
    );
  }
}

export default App;
