import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
    render() {
        const {
            allCards = {},
            header = '',
            cardIds = []
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