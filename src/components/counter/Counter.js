import React from 'react'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import './counter.css'

const Counter = ({cont, setCont}) => {
     

    useEffect(() => {
        validadorpositivo();
    }, [cont])

    const validadorpositivo = () => {
        if (cont<2) {
                setCont(1)
            }
    }    
    
    return (
        <div className='counter_Container' >
            {/* <h4>Episode {cont}</h4> */}
            <Button variant='secondary' onClick={() => setCont(cont-1)}>Previous </Button>
            <Button variant='secondary' onClick={() => setCont(cont+1)}>Next </Button>
            <Button variant='danger' onClick={() => setCont(1)}>Restart</Button>
        </div>  
    )
}

export default Counter