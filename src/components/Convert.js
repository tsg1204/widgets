import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { KEY } from './dev.js';

const Convert = ( { language, text }) => {
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: KEY
            }
        })

    }, [language, text]);

    return (
        <div></div>
    )
}

export default Convert;
