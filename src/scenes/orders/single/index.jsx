import React from 'react';
import "./single.css";


const Single = (props) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <h2>Rider's Detail</h2>
        <div className="info">
          <div className="topInfo">
            {props.imgs && <img src={props.imgs} alt="" />}
            <h1>{props.riderName}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.infos).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="activities">
        <h2>Order Tracking</h2>
        
      </div>
    </div>
  );
};

export default Single;