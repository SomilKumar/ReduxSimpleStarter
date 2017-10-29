import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDJm4tctOf4GAHy5bEMu0rIrPpm4mbOM_s';

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    ) ;
}

ReactDOM.render(<App />, document.querySelector('.container'));