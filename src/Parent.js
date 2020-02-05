import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './parent.css'

function Parent() {
    const [newPost, setNewPost] = useState([])
    useEffect(() => {
        Axios.get('http://demo1826744.mockable.io/items')
            .then(res => {
                console.log(res)
                setNewPost(res.data.items)
            })

    }, [])

    return (
        <div>
            <div className='list'>
                {
                    newPost.map((val) => {
                        return <li>{val.name}</li>

                    })
                }
            </div>

        </div>
    )
}

export default Parent;