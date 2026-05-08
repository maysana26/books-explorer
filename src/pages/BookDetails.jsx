import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {

    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`https://openlibrary.org/works/${id}.json`)
            .then((response) => {

                console.log(response.data);
                setBook(response.data);


            })

            .catch((error) => {

                console.log(error);

            })

    }, [id]);

    if (!book) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (


        <div className="container text-center">

            <h1 className="mb-4">{book.title}</h1>

            {book.covers && (

                <img
                    src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                    alt={book.title}
                    className="mb-4"
                />

            )}

            <p className="mt-3">

                {typeof book.description === "string"

                    ? book.description

                    : book.description?.value}

            </p>

        </div>

    );


}
export default BookDetails;