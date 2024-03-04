import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';

import firstImage from './images/first.jpg';
import secondImage from './images/second.jpg';
import thirdImage from './images/third.jpg';

const images = [firstImage, secondImage, thirdImage];

function App() {
    return (
        <div className="App">
            <Carousel images={images} />
        </div>
    );
}

export default App;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
