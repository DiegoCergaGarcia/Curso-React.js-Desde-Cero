import React from "react";
import { Link } from "wouter";

const POPULAR_GIFS = ["Matrix", "Peru", "Futbol", "Coding", "Universitario de Deportes"]

export default function Home() {
    return (
        <>
            <h3 className="App-Title">Los gifs mas populares</h3>

            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}