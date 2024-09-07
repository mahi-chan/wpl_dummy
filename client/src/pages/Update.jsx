import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cover, setCover] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    
    function handleSubmit(event){
        event.preventDefault();

        axios.put('http://localhost:8800/update/'+id, {title, desc, cover})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }

    return (
        <>
            <h3>Update Books</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Enter title here' onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder='Enter description here' onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Cover</label>
                    <input type="text" placeholder='Enter cover here' onChange={(e) => setCover(e.target.value)}/>
                </div>
                <button>Update</button>
            </form>
        </>
    )
}

export default Update