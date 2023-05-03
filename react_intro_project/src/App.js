import { useEffect } from 'react';
import React from 'react';

const API_URL = 'http//www.ombd.api.com?apikey=410f6701'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;