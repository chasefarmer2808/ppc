import React, { useState } from 'react';
import { hitCountApi } from './api';

export const HitComponent = () => {
    const [hits, setHits] = useState(0);

    const handleHit = async () => {
        const hitData = await hitCountApi();
        setHits(hitData.value);
    }

    return (
        <section>
            <h2>Hit Count</h2>
            <strong>{hits}</strong>
            <button onClick={handleHit}>Hit</button>
        </section>
    )
}