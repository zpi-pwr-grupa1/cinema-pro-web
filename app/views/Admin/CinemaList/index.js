import React, {Component} from 'react';
import Page from 'components/Page';
import splitEvery from "ramda/es/splitEvery";
import './index.scss';

class CinemaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: [
      	{
					id: 1,
					name: 'kino pierwsze',
					description: 'opis kina 1',
      	},
				{
					id: 2,
					name: 'kino drugie',
					description: 'opis kina 2',
				},
				{
					id: 3,
					name: 'kino drugie',
					description: 'opis kina 2',
				},
				{
					id: 4,
					name: 'kino drugie',
					description: 'opis kina 2',
				},
				{
					id: 5,
					name: 'kino drugie',
					description: 'opis kina 2',
				},

			],
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Page>
				<div className="cinema-list">
					<section className="hero is-light">
						<div className="hero-body">
							<div className="container">
								<h1 className="title">
									Lista wszystkich kin
								</h1>
							</div>
						</div>
					</section>

					<div className="container">
						{splitEvery(3, this.state.cinemas)
							.map((threeCinemas, index) =>
								<div key={index} className="tile is-parent">
									{threeCinemas
										.map(cinema =>
											<div key={cinema.id} className="tile is-4 is-parent cinema-tile hvr-grow">
												<article className="tile is-child notification is-dark">
													<p className="title">{cinema.name}</p>
													<p className="subtitle">{cinema.description}</p>
												</article>
											</div>
										)}

									{ Math.floor(this.state.cinemas.length/3) === index
										&& <a className="button add-button">+</a>
									}
								</div>
							)}

						{ !(this.state.cinemas.length % 3)
								&& <div className="tile is-4 is-parent cinema-tile hvr-grow">
											<a className="button add-button">+</a>
										</div>
						}
					</div>
				</div>
			</Page>
    )
  }
}

export default CinemaList;
