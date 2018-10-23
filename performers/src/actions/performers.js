const axios = require('axios');

const FETCH_PERFORMERS = () => {
  return dispatch => {
    axios.get('https://mobile-staging.gametime.co/v1/performers')
    .then((response) => {
      dispatch({
        type: 'FETCH_PERFORMERS',
        payload: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default FETCH_PERFORMERS;
