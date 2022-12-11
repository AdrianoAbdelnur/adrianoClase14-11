import React from 'react'
import './episodes.css'
import Counter from '../../counter/Counter'
import {useState} from 'react'
import Breaking from '../../BB/Breaking'

const Episodes = () => {  
    const [contador, setContador] = useState(0);
    return (
        <div className='episodes_container'>
            <Counter cont={contador} setCont={setContador} />
            <h2>Characters who appear in episode {contador}</h2>
            <Breaking cont={contador} setCont={setContador} />
        </div>
    )
}

export default Episodes
