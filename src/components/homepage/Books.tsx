// import { IBook } from '@/types/bookType';
// import React from 'react';
//  const getBooks = async (): Promise<IBook[]> => {

//   const res = await fetch('http://localhost:3000/booksData.json');
//   const data = await res.json();
//   return data;
//  }
// const Books = async() => {
//   const booksData = await getBooks();
//   // console.log(booksData,'booksDAdta');
//   return (
//     <div>
//       Books
//       { 
//         booksData.map((book:IBook,ind:number)=>{ 
//           return <div key={ind} book={book}> {book.bookName}</div>
//         })
//       }
//     </div>
//   );
// };

// export default Books;
import { IBook } from '@/types/bookType';
import Image from 'next/image';
import React from 'react';
import BookCard from '../shared/BookCard';

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch('http://localhost:3000/booksData.json', {
    cache: 'no-store', // প্রয়োজনে revalidate ব্যবহার করতে পারেন
  });

  if (!res.ok) {
    throw new Error('Failed to fetch books data');
  }

  const data: IBook[] = await res.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="min-h-screen bg-slate-200 px-4 py-12 text-slate-100 sm:px-6 lg:px-8 container mx-auto my-6 rounded-4xl">
      {/* Container */}
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 sm:text-5xl">
            Trending Books Collection of Popular
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Explore our curated selection of high-rated books across various genres.
          </p>
        </div>

        {/* Modern Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {booksData.splice(0,5).map((book: IBook) => (
            <BookCard key={book.bookId} book={book}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;