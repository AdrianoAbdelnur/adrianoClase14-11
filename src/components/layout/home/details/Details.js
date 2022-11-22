import React, { useEffect, useState } from 'react'
import { Button , Card } from 'react-bootstrap';
import './details.css'
import { useNavigate } from 'react-router-dom';

const Details = () => {
    let navigate = useNavigate()
    const localCharacters = JSON.parse(localStorage.getItem('localCharacters'))
    const user = JSON.parse(localStorage.getItem('user'));
    const charFound = localCharacters.find((character) => character.char_id == window.location.hash.substring(1));
    if (!charFound.comments) {
        charFound.comments= [];
    }
    const [comments, setComements] = useState(charFound.comments)
    const sendComment = (e) => {
        e.preventDefault();
        const commentary = '('+ todayDate() + ') ' +user.nombre + ' said: ' +  e.target[0].value;
        console.log(comments.length)
        if (comments.length === 0) {
            setComements([commentary])
        } else {
            setComements([commentary, ...comments])
        } 
        e.target[0].value = ''
    } 

    useEffect(() => {
        for (const character of localCharacters) {
            if (charFound.char_id === character.char_id ) {
                character.comments = comments;
            }
        }
        localStorage.setItem('localCharacters', JSON.stringify(localCharacters));
    }, [comments])
    
    const todayDate = () => {
        let today = new Date(),
        date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear()+'-' +today.getHours()+ ':' + today.getMinutes();
        console.log(date)
        return date;
    }

    return (
        <div className='details_container'>
            <div className='cont'>
                <h3>{charFound.name}</h3>
                <div className='info_container'>
                    <img className='characterImg' src={charFound.img}></img>
                    <div>
                        <ul>
                            <li>birthday: {charFound.birthday}</li>
                            <li>nickname: {charFound.nickname}</li>
                            <li>occupation: {charFound.occupation}</li>
                            <li>status: {charFound.status}</li>
                        </ul>
                        <h5>People's comments about {charFound.name}: </h5>
                        <div className='comments_container'>
                            {
                                comments.length !== 0? ( 
                                        comments.map((comment) => <div key={comment}>{comment}</div>)
                                    ) : (
                                        <p>There aren´t comments to this character</p>
                                )
                            }
                        </div>
                    
                        <form className='commentForm' onSubmit={sendComment}>
                            <textarea name="comment" rows="20" cols="50" className='inputComment' placeholder='Add your comment about this character here' required></textarea>
                            <Button type='submit' >Send</Button>
                        </form>
                    </div>
                </div>    
                <Button className='m-3' variant='secondary' onClick={() => navigate(`/home`)}>back</Button>   
            </div>
        </div>
    )
}

export default Details
