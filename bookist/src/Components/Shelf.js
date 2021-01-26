import React, {Component} from 'react';

function Shelf(props) {
    return (
        <div className='yourShelf'>
            <span className='shelfTitle'>Your shelf</span>
            <button className='shelfButton' onClick={props.clearShelf}>clear shelf</button>
            <div> 
                {props.shelf.map((title, index) => (
                    <div key={index}>
                    <div className='titleSpace'>{title}</div>
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default Shelf;