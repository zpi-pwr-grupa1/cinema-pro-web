import React, {Component} from 'react';
import './index.scss';

class Home extends Component {

  componentDidMount() {}

  render() {
    return (
      <div className="home-view">
        <h3>Wybierz swoje kino</h3>

        <form>
          <select>
            <option value="placeholder">Placeholder</option>
          </select>
          <br />
          <input type="submit" value="Wybieram" />

        </form>
      </div>
    )
  }
}

export default Home;
