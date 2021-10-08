import React, { useState } from 'react';
import { hitCountApi } from './api';
import './HitComponent.css';

export const HitComponent = () => {
    const [hits, setHits] = useState(0);

    const handleHit = async () => {
        const hitData = await hitCountApi();
        setHits(hitData.value);
    }

    return (
        <section className="hit-component-root">
            <h2>Hit Count</h2>
            {hits > 0 ? <p><strong>{hits}</strong></p> : <p>Click the button to get the latest hits</p>}
            <button onClick={handleHit}>Hit</button>
        </section>
    )
}