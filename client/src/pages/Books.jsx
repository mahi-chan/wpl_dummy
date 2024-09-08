import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
const Books = () => {

    const [books,setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])

    return (
        <div>
            <h1>Lama Book Shop</h1>
            <div className="books">
                {books.map((book) => (
                    <div className="book" key={book}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                        <button className="delete">Delete</button>
                        <button className="update">Update</button>
                        </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add new book</Link>
            </button>
                {books.map(book=>(
                    <div className="book" key={book.id}>
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <Link to={`/update/${book.id}`}>Update</Link>
                    </div>
                ))}
            </div>
    )
}
export default Books;