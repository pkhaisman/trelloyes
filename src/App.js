import React from 'react';
import List from './composition/List';
import './composition/App.css';

class App extends React.Component {
	render() {
		const {
			store: {
				lists = [],
				allCards = {}
			}
		} = this.props

		return (
			<div>
				<main className="App">
					<header className="App-header">
						<h1>Trelloyes!</h1>
					</header>
					<div className="App-list">
						{
							lists.map((list) => {
							return <List 
								key={list.id}
								header={list.header} 
								allCards={allCards} 
								cardIds={list.cardIds} />  
							})
						}
					</div>
				</main>
			</div>
		);
	}
}

export default App;