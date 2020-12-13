import React, { useState, useEffect } from 'react';

function Main () {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    // Update the document title using the browser API
        document.title = 'react hook';
    });

    return (
        <div>
            <h1>This is a project about react hook</h1>
            <article><a rel="noreferrer" href="https://react.docschina.org/docs/getting-started.html" target="_blank" >Document address</a></article>
        </div>
    );
}
export default Main;
