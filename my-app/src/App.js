import React from 'react';
import Card from './Card';

function App() {
    return (
        <div className="App">
            <Card title="First Card" />
            <Card text="How are you?" />
            <Card title="Third Card" text="Hello, how are you?" />
        </div>
    );
}
export default App;
