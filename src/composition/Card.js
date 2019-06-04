import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        const {
            id,
            handleDeleteCard,
            handleAddCard,
            title,
            content,
            listId
        } = this.props

        return (
            <div className="Card">
                <button type="button" onClick={() => handleDeleteCard(id)}>delete</button>
                <button type="button" onClick={() => handleAddCard(listId)}>add</button>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}

export default Card;