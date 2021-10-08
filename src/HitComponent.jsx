import React, { useState } from 'react';
import { hitCountApi } from './api';
import './HitComponent.css';

export const HitComponent = () => {
    const [hits, setHits] = useState(0);
    const [trick, setTrick] = useState(0);

    const handleHit = async () => {
        const hitData = await hitCountApi();
        setHits(hitData.value);
    }

    const getMessage = () => {
        switch (trick) {
            case 1:
                return 'Too slow!  Try again, or just hit the enter key.'
            case 2:
                return 'Got you again!  Come on, I know you are faster than that.'
            case 3:
                return 'Ok, Ok, you got me.  Thanks for playing!'
            default:
                return 'Click the button, or press enter, to get the latest hits'
        }
    }

    return (
        <section className="hit-component-root">
            <h2>Hit Count</h2>
            {hits > 0 
                ? <p className="fade-in-down" aria-label={hits}><strong>{hits}</strong></p> 
                : <p>{getMessage()}</p>}
            <button 
                className={`trick-${trick}`}
                onClick={handleHit} 
                onMouseEnter={() => trick < 3 && setTrick(prev => prev + 1)}
                autoFocus={true} 
                aria-label="Hit the counter API.">
                    Hit</button>
        </section>
    )
}