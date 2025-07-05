import React, { useEffect, useState } from 'react';
import quoteList from './../assets/data/quotes.json';
import './QuoteGenerator.css';

function QuoteGenerator() {
    const [category,setCategory]=useState('Life & Wisdom');
    const [displayedQuotes,setDisplayedQuotes]=useState([]);

    const onClickCategory=(cat)=>{
     setCategory(cat);
    }

 // Initialize with all quotes on first render
    useEffect(() => {
        setDisplayedQuotes(quoteList.quotes);
    }, []);

    // Filter quotes when category changes
    useEffect(() => {
        const filtered = quoteList.quotes.filter(q => q.category === category);
        setDisplayedQuotes(filtered);
    }, [category]);


    return (
        <div className="container">
            <div className="left-section">
              <h1>Quotes</h1>
              <h2>{category}</h2>
              {displayedQuotes.map((q, index) => (
                    <div key={index} className="quote-item">
                        <blockquote>{q.quote}</blockquote>
                        <p className="author">- {q.author}</p>
                    </div>
                ))}
              
            </div>
            <div className="right-section">
                <h3>Topics</h3>
                <ul>
                    <li onClick={()=>onClickCategory('Life & Wisdom')}>Life & Wisdom</li>
                    <li onClick={()=>onClickCategory('Success & Motivation')}>Success & Motivation</li>
                    <li onClick={()=>onClickCategory('Courage & Resilience')}>Courage & Resilience</li>
                    <li onClick={()=>onClickCategory('Creativity & Innovation')}>Creativity & Innovation</li>
                    <li onClick={()=>onClickCategory('Love & Relationships')}>Love & Relationships</li>
                    <li onClick={()=>onClickCategory('Humor & Wit')}>Humor & Wit</li>
                    <li onClick={()=>onClickCategory('Philosophy & Deep Thinking')}>Philosophy & Deep Thinking</li>
                </ul>
            </div>
        </div>
    );
}

export default QuoteGenerator;