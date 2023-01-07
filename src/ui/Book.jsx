import { icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Price from '../components/Price';
import Rating from '../components/Rating';

        const Book = ({book}) => {
            const [img, setImg] = useState();

            const mountedRef = useRef(false);
            
            useEffect(() => {
                const image = new Image();
                image.src = book.url;
                image.onload = () => {
                    setTimeout(() => {
                        if (mountedRef.current) {
                          setImg(image);
                        }
                    }, 300);
                };
                return () => {
                    // when the component mounts!
                    mountedRef.current = true;
                }
             })


            return (
            <div className="book">
            {
            img ? (
                <>  
            <Link to={`/books/${book.id}`} >
            <figure className="book__img--wrapper">
            <img src={img.src} alt="" className="book__img" />
            </figure>
            </Link>
            <div className="book__title">
            <Link to={`/books/${book.id}`} className='book__title--link'>
            {book.title}
            </Link>
            </div>
            <Rating rating={book.rating} />
            <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
            </>
            ) : (<>
            <div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div>
            </>
            ) }


            </div>
            );
            }

export default Book;