import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from '../api/axios';
function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/books').then((res) => {
      setItems(res.data.data);
    });
  }, []);
  return (
    <section className="bg-white md:h-[77.4vh] md:relative sm:px-[100px] px-[30px]">
      <div className="container">
        <h1 className="h1 text-center mb-10">My Book</h1>
        <div className="flex justify-between mb-5 px-14">
          <a
            href="/add-book"
            className="link no-underline text-primary-500"
          >
            + ADD BOOK
          </a>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          <Card data={items} />
        </div>
      </div>
    </section>
  );
}

export default HomePage;