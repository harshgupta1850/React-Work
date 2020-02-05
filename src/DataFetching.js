import React, { useState, useEffect } from "react";
import Axios from "axios";
import FilteredPost from './FilteredPost'

function DataFetching(){
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idButton,setIdButton] = useState(1)

    const [newPost,setNewPost]=useState([])
    useEffect( () => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })

        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setNewPost(res.data)
        })  

    },[idButton])
    const handleChange = () => {
        setIdButton(id)
    }
    return(
        <div>
            <input type='text' value={id} onChange={ e => setId(e.target.value)}/>
            <button onClick={handleChange}>Fetch Title</button>
            <ul>
            
            
            {post.title}
            </ul>
            <FilteredPost/>
            {/* <input type='text' />
            {newPost.map( (data) => {
                return <li key={data.id}>{data.title}</li>
            })} */}
        </div>

    )
}

export default DataFetching;