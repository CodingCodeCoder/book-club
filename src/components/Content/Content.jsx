import React from 'react';
import './style.css';
import BookList from '../BookList/BookList';

export default function Content(){
    var booklist = ["4 Disciplines of Execution", ""];

    
        return (
            <div className='main-content'>
                <BookList />
            </div>
        )
}