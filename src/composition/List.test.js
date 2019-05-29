import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from '../store';

describe('Card component', () => {
    const {
        allCards ={},
        lists = []
    } = STORE

    // smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            lists.map((list) => {
                return <List
                    key={list.id}
                    header={list.header} 
                    allCards={allCards} 
                    cardIds={list.cardIds} 
                /> 
            })
            , div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
          .create(
            lists.map((list) => {
                return <List
                    key={list.id}
                    header={list.header} 
                    allCards={allCards} 
                    cardIds={list.cardIds} 
                /> 
            })
          )
          .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});