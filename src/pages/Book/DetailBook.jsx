import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useParams, useNavigate } from 'react-router-dom';

function DetailBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
  }, [id]);

  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container">
        <div className="max-12 rounded overflow-hidden shadow-lg">
          <div className="px-6 py-12">
            <div className="font-bold text-xl mb-2">{book.title}</div>
            <div className="mb-5 text-gray-500 text-xs">
              <p className='mb-2'>ISBN   : {book.isbn}</p>
              <p className='mb-2'>Author : {book.author}</p>
              <p className='mb-2'>Publisher : {book.publisher}</p>
              <p className='mb-2'>Published : {book.published}</p>
              <p className='mb-2'>Pages : {book.pages}</p>
              <p className='mb-2'>Website : {book.website}</p>
            </div>
            <p className="text-gray-700 text-base mb-5">
              {book.description}
            </p>
            <button className='btn-primary bottom-5 right-5 mr-5' onClick={() => navigate(`/edit-book/${book.id}`)}>Edit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DetailBook;