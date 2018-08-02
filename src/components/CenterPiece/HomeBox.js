import React from 'react';

export const HomeBox = (props) => {
  const {title, img, tools } = props.data;

  return (
  <div className="center Work-outer-box">
    <h1>{title}</h1>
    <div className="Work-inner-box center">
      <img src={img} alt={title} />
    </div>
    <p>
      {tools.map((tool, i) => (
        <span key={i}>
          {tool} <span className="special">, </span>
        </span>
      ))}
    </p>
    <div className="Work-button center">
      <button>Github</button>
      <button>View More</button>
    </div>
  </div>
);
}
