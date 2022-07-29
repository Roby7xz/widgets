import React, { useState, useEffect } from 'react';
import Axios from "axios";

// It can be used only on localhost:3000, in other case the request will fail
const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

function Convert({ language, text }) {

    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId =
            setTimeout(() => {
                setDebouncedText(text);
            }, 500);
        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {

        const doTranslation = async () => {
            const { data } = await Axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: KEY
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation();

    }, [language, debouncedText]);


    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}

export default Convert;