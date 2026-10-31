import { IBook } from '@/types/bookType';
import Image from 'next/image';
import React from 'react';

interface IViewDetailsButtonProps{ 
  params:Promise<{ 
    id:string
  }>
}
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

const ViewDetailsButton = async({params}:IViewDetailsButtonProps) => { 
  console.log(params,'params');
  const {id} = await params;
  const booksData = await getBooks();
  // console.log(id,'id is the value');
  const book = booksData.find((book:IBook)=> String(book.bookId) === id) as IBook;
  // console.log(book);
  return (<main className="min-h-screen bg-white px-4 py-12 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 bg-[#F3F3F3] rounded-3xl p-10 sm:p-14 flex items-center justify-center shadow-sm border border-slate-100">
            <div className="relative h-[420px] w-full max-w-[280px] mx-auto flex items-center justify-center">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                priority
                className="object-contain drop-shadow-2xl m-auto"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {book.bookName}
            </h1>

            <p className="text-sm sm:text-base font-medium text-slate-600 border-b border-slate-200 pb-4">
              By : <span className="text-slate-900 font-semibold">{book.author}</span>
            </p>

            <p className="text-sm font-medium text-slate-800 pt-1 border-b border-slate-200 pb-4">
              {book.category}
            </p>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
              <span className="font-bold text-slate-900">Review : </span>
              {book.review}
            </div>

            <div className="flex items-center gap-4 pt-2 pb-4 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-900">Tag</span>
              <div className="flex flex-wrap gap-2">
                {book.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-3 pt-1 text-xs sm:text-sm text-slate-500">
              <div>Number of Pages:</div>
              <div className="font-bold text-slate-900">{book.totalPages}</div>

              <div>Publisher:</div>
              <div className="font-bold text-slate-900">{book.publisher}</div>

              <div>Year of Publishing:</div>
              <div className="font-bold text-slate-900">{book.yearOfPublishing}</div>

              <div>Rating:</div>
              <div className="font-bold text-slate-900">{book.rating}</div>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <button className="rounded-lg border border-slate-300 px-8 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-all">
                Read
              </button>
              <button className="rounded-lg bg-[#59C6D2] hover:bg-[#4ab5c1] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition-all">
                Wishlist
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
   
  );
};

export default ViewDetailsButton;