'use client'
import React, { createContext, ReactNode, useState } from 'react';
 const BooksContext = createContext({});
 
const BookProvider = ({children}:{children:ReactNode}) => {
  const [readBooks,setReadBooks] =useState([]);
  const [wishlist , setWishList] = useState([]);
  const shereData = { 
    readBooks,setReadBooks,wishlist,setWishList
  }
  return ( <BooksContext.Provider value={shereData}>{children}</BooksContext.Provider>
  );
};

export default BookProvider;