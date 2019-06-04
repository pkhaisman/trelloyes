import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
    // how does this.props have a value if i don't define super(props)?
    render() {
        const {
            allCards = {},
            header = '',
            cardIds = [],
        } = this.props

        return (
            <section className="List">
                <header className="List-header">
                    <h2>{header}</h2>
                </header>
                <div className="List-cards">
                    {
                        cardIds.map((card) => {
                            return <Card
                                id={card}
                                listId={this.props.id}
                                handleAddCard={this.props.handleAddCard}
                                handleDeleteCard={this.props.handleDeleteCard}
                                key={card} 
                                title={allCards[card].title}                           
                                content={allCards[card].content} />
                        })
                    }
                </div>
            </section>
        )
    }
}

export default List;