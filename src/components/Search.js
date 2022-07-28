import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Search() {

    const [keyword, setKeyword] = useState("Programming");
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await Axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: keyword
                }
            });

            setResults(data.query.search);
        }

        if (keyword && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (keyword) {
                    search();
                }
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            }
        }


    }, [keyword]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid ${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Keyword</label>
                    <input className="input" type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;