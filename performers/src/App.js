import React from 'react';
import './App.css';

import Performer from './components/Performer.jsx';
import PerformerList from './components/PerformerList.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      performers: []
    }
  }

  componentDidMount() {
    axios.get('https://mobile-staging.gametime.co/v1/performers')
      .then((response) => {
        // console.log(response.data.performers[0]);
        this.setState({
          performers: response.data.performers.slice(0,99)
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <PerformerList performerData={this.state.performers}/>
      </div>
    );
  }
}

export default App;
