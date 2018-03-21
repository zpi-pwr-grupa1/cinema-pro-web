import React, { Component } from 'react';

class CinemaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: [{
        id: 1,
        name: 'kino jakiestam',
      }, {
        id: 2,
        name: 'kino inne'
      }],
    };

  }

  componentDidMount() {

  }

  render() {
    console.log(this.state.cinemas)
    return (
      <div>
        CinemaList
        {this.state.cinemas.map((cinema) =>
          <div key={cinema.id}>
            {cinema.name}
          </div>
        )}
      </div>
    )
  }
}

export default CinemaList;
