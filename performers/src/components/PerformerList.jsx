import Performer from './Performer.jsx';
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


export default PerformerList;
