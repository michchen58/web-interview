const React = require('react');

const Performer = props => {
  return (
    <div className="performer" performerid={props.performerData.id}>
      <h3 className="performerName">{props.performerData.name}</h3>
      <img src={props.performerData.hero_image_url} />
      <span className="category">{props.performerData.category_group}</span>
    </div>
  );
}

export default Performer;
