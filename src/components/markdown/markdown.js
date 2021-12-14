import React from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const Markdown = () => {


    const readme = useSelector(state => state.github.readme);


    return (
        <div>
            <Link to='/'>Go Back</Link>
            <div>
                <ReactMarkdown>
                    {readme}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Markdown;