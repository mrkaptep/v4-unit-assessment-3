import React, {Component} from 'react';


class Booklist extends Component{
    constructor(){
        super();

    }



    render(){
        
        return(
            
               
             <div className="bookshelf">
                {this.props.books.map((bookList, index) => (
                    <div key={index} className='bookBox' onClick={()=> this.props.addBook(bookList.title)}>
                    <img src={bookList.img} className='image'/>
                    <div>{bookList.title} by {bookList.author}</div>
                    </div>
                ))}
            </div>
        
            
        )
    }
}


export default Booklist;