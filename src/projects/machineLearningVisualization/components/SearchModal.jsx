import React, { useState } from 'react';

import { listOfSKLearnTransformers } from './SearchModal/utils';

const SearchModal = () => {
    const [ transformers, setTransformers ] = useState(listOfSKLearnTransformers)
    const [ search, setSearch ] = useState('');
    const [ debounce, setDebounce ] = useState(false);

    const handleSearch = (e) => {
        if (debounce && e.target.value !== '') {
            setSearch(e.target.value);
            return;
        }

        setSearch(e.target.value);
        setDebounce(true);
        const filteredTransformers = listOfSKLearnTransformers.filter(transformer => transformer.toLowerCase().includes(e.target.value.toLowerCase()))
        setTransformers(filteredTransformers)
        
        setDebounce(setTimeout(() => {
            setDebounce(false);
        }, 500));
    }

    return (
        <div>
            <input placeholder='search transformers' value={search} onChange={handleSearch} />
            <div className='pipeline-search-modal'>
                {transformers.map(transformer => <div key={transformer}>{transformer}</div>)}
            </div>
        </div>
    )
}

export default SearchModal;