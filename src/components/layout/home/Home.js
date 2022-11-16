import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import './home.css'
import Breaking from '../../BB/Breaking';
import Counter from '../../counter/Counter';

const Home = () => {
  const [contador, setContador] = useState(0);
  return (
    <div className='home_container'>
      <Counter cont={contador} setCont={setContador} />
      <h2>Characters who appear in episode {contador}</h2>
      <Breaking cont={contador} setCont={setContador} />
    </div>
  )
}

export default Home