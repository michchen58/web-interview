import Performer from './Performer.jsx';
import {connect} fom 'react-redux';
const React = require('react');

const PerformerList = props => {
  if (!props.performerData) {
    return (<div></div>);
  }
  return (
    <div>
      {props.performerData.map(x => {
        return (<Performer performerData={x} key={x.id}/>);
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    performerData: state.performers
  };
};

export default connect(state, null)(PerformerList);
