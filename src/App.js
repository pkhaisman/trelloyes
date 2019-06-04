import React from 'react';
import List from './composition/List';
import STORE from './store';
import './composition/App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = STORE;
	}

	newRandomCard = () => {
		const id = Math.random().toString(36).substring(2, 4)
			  + Math.random().toString(36).substring(2, 4);
		return {
			id,
			title: `Random Card ${id}`,
			content: 'lorem ipsum',
		}
	}

	handleDeleteCard = (cardId) => {
		const {lists} = this.state;
		const newLists = lists.map(list => ({
			...list,
			cardIds: list.cardIds.filter(id => id !== cardId) 
		}));
		this.setState({
			lists: newLists
		})
	}

	handleAddCard = (listId) => {
		const {lists, allCards} = this.state;
		const newCard = this.newRandomCard();
		const newLists = lists.map(list => {
			if (listId === list.id) {
				return {
					...list,
					cardIds: [...list.cardIds, newCard.id]
				}
			}
			return list;
		});
		this.setState({
			lists: newLists,
			allCards: {
				...allCards,
				[newCard.id]: newCard
			  }
		})
		console.log(newLists);
	}

	render() {
		const {	
			lists = [],
			allCards = {}	
		} = this.state

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
								id={list.id}								
								handleAddCard={this.handleAddCard}
								handleDeleteCard={this.handleDeleteCard}
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