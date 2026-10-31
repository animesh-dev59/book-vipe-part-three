import { IBook } from '@/types/bookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}:{book:IBook}) => {
  return (
    <article
              key={book.bookId}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Category Badge */}
                <span className="absolute top-3 right-3 z-10 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur-md border border-cyan-500/30">
                  {book.category}
                </span>

                {/* Rating Badge */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 rounded-lg bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md border border-slate-700/50">
                  <span>⭐</span>
                  <span>{book.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  {/* Tags */}
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {book.tags?.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="rounded-md bg-cyan-950/70 px-2.5 py-0.5 text-[11px] font-medium text-cyan-300 border border-cyan-800/40"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Author */}
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400 line-clamp-1">
                    {book.bookName}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    By <span className="text-slate-200">{book.author}</span>
                  </p>

                  {/* Review / Excerpt */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-400 line-clamp-2">
                    {book.review}
                  </p>
                </div>

                {/* Metadata & Footer */}
                <div className="mt-6 border-t border-slate-800/80 pt-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div>
                      <span>Publisher: </span>
                      <span className="text-slate-300 font-medium">{book.publisher}</span>
                    </div>
                    <div>
                      <span>Year: </span>
                      <span className="text-slate-300 font-medium">{book.yearOfPublishing}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div>
                      <span>Pages: </span>
                      <span className="text-slate-300 font-medium">{book.totalPages}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={`/books/${book.bookId}`}> 
                     <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/25 active:scale-95">
                    View Details
                  </button>
                  </Link>
                </div>
              </div>
            </article>
  );
};

export default BookCard;