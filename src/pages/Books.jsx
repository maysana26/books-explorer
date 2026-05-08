import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get(`https://openlibrary.org/search.json?q=programming`)
            .then((response) => {

                console.log(response.data.docs);
                setBooks(response.data.docs);

                setLoading(false);
            })

            .catch((error) => {

                console.log(error);
                setLoading(false);
            })

    }, []);

    if (loading) {

        return <h1>Loading Books...</h1>;

    }

    return (


        <div>
            {books.map((book, index) => {
                const id = book.key.split('/').pop()

                return (
                    <div className="container">

                        <h1 className="mb-4">Programming Books</h1>

                        <div className="row">

                            {books.map((book, index) => {

                                const id = book.key.split('/').pop();

                                return (

                                    <div className="col-md-4 mb-4" key={index}>

                                        <div className="card h-100 p-3">

                                            {book.cover_i ? (
                                                <img
                                                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                                    alt={book.title}
                                                    className="card-img-top"
                                                />
                                            ) : (
                                                <div className="no-cover">
                                                    No Cover Available
                                                </div>
                                            )}
                                            <div className="card-body">

                                                <h5>{book.title}</h5>

                                                <p>
                                                    {book.author_name?.join(", ")}
                                                </p>

                                                <Link
                                                    className="btn btn-success"
                                                    to={`/books/${id}`}
                                                >
                                                    View Details
                                                </Link>

                                            </div>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    </div>
                );

            })

            }



        </div>
    );


}
export default Books;