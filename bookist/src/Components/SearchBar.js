import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(){
        super();

        this.state = {
            userInput: ''
        }
    }

    handleInputChange(value){
        this.setState({input: value});
    }

    handleClick = ()=> {
        this.handleInputChange();
        return this.state.input;
    }
    resetInput(){
        this.setState({input:''});
        this.props.resetFilter();
    }
    

    render (){

        return (
            <div className='searchBar'>
                <div className='searchBox'>
                    <input value={this.state.input} onChange = {e=> this.handleInputChange(e.target.value)}/>
                    <button className='searchMe' onClick={()=>this.props.filter(this.handleClick())}>search</button>
                    <button onClick={() => this.resetInput()}>clear search</button>

                </div>
            </div>
        )
    }
}

export default SearchBar;