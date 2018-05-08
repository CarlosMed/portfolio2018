import React, { Component } from 'react';
import { BoxComponent } from './BoxComponent';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataPosition: 0,
    };
  }

  componentDidMount() {
    this.getPortfolioData();
  }

  getPortfolioData() {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  }

  boxInfo(toDo) {
    const { data, dataPosition } = this.state;

    // Checks to see if data is present and if undefined inputs an empty div
    // Needs a better way of handling it
    if (data.length === 0) {
      return (
        <div style={{ color: 'white' }}>
          <h1>Loading...</h1>
        </div>
      );
    }

    return <BoxComponent data={data[dataPosition]} />;
  }

  handleClick(action) {
    const { dataPosition } = this.state;

    if (action === 'next') {
      let next = dataPosition + 1;
      this.setState({ dataPosition: next });
    } else {
      let prev = dataPosition - 1;
      this.setState({ dataPosition: prev });
    }
  }

  render() {
    const { data, dataPosition } = this.state;
    // let disabled = dataPosition >= data.length || dataPosition === 0;
    console.log(
      `dataPosition: ${dataPosition}, data length: ${data.length -
        1}\n Does Data Position = Data Length: ${dataPosition ===
        data.length - 1}`
    );

    return (
      <section className="Work">
        <header className="Work-title">
          <h1>Work</h1>
        </header>
        <div className="Work-box">
          <button
            className="Work-switches"
            onClick={this.handleClick.bind(this, 'prev')}
            disabled={dataPosition === 0}>
            <i className="fas fa-angle-double-left" />
          </button>
          {this.boxInfo()}
          <button
            className="Work-switches"
            onClick={this.handleClick.bind(this, 'next')}
            disabled={dataPosition >= data.length - 1}>
            <i className="fas fa-angle-double-right" />
          </button>
        </div>
      </section>
    );
  }
}

export default Work;
