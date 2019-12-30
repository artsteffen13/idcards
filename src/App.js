import React, {useState} from 'react';
import Header from './Components/Header'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {
    const [newCard, setNewCard] = useState({
        color: 'yellow',
            name: '',
            position: '',
            pic:''
    });

    const getItems = (name, value) => {
        setNewCard(prevValue => {
            return (
                {...prevValue, [name]: value}
            )
        })
    };

    return (
        <div>
            <Header/>
            <Form
                fetchItems={getItems}
                values={newCard}
            />
            <Card
                name={newCard.name}
                color={newCard.color}
                position={newCard.position}
                pic={newCard.pic}
            />
        </div>
    );
}

export default App;
