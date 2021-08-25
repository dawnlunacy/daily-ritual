import React from 'react';
import './DailyRune.css';
import {data} from '../../data';
import {useState} from 'react';

export const DailyRune = () => {

    const [runeOfTheDay, setRuneOfTheDay] = useState();

    const onCast = () => {
        console.log("casting")
        let fatesChoice = Math.round(Math.random() * 32);
        console.log("fate", fatesChoice)
        summonRune(fatesChoice);
    }

    let summonRune = (fatesChoice) => {
         setRuneOfTheDay(data.runeNames[fatesChoice]);
        console.log("runeOfTheDay", runeOfTheDay)
    }

    return (
        <section className="dailyRuneContainer">
            <div>
                <span className="laRune"> {runeOfTheDay} </span>
            </div>
            <button onClick={onCast} className="cast"> Cast Rune </button>
        </section>
    )
}
