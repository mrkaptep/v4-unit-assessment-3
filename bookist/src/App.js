import React, {Component} from 'react';
import './App.css';
import data from './data';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Booklist from './Components/Booklist';
import Shelf from './Components/Shelf';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      books: data,
      shelf: []
    }
  }

  addToShelf = (title) =>{
    this.setState({shelf:[...this.state.shelf, title]})
  }


  clearShelf = () => {
    this.setState({shelf: []})
  }

  filterBook = (query) => {
    let filterList = this.state.books.filter(bookNames => {
      return bookNames.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
      this.setState({books: filterList})
  };

  reset = () => {
    this.setState({books:data})
  }

  render() {

    return(
      <React.Fragment>
        <Header/>
        <SearchBar
          filter={this.filterBook}
          resetFilter={this.reset}
        />
        <div className='bookContainer'>
          <Booklist
            books={this.state.books}
            addBook={this.addToShelf}
          />
          <Shelf
            shelf={this.state.shelf}
            clearShelf={this.clearShelf}
          /> 
        </div>
      </React.Fragment>
    )
  }
}

export default App;
