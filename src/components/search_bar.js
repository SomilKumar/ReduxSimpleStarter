import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        //bind event to React Component instance 
        // this.onInputChange = this.onInputChange.bind(this);

        // State
        this.state = { term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value= {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
                {/* <p>Value of the Input : &nbsp;{this.state.term}</p> */}
            </div>
        )
    }

    onInputChange(term) {
        // console.log(event.target.value);
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}


// export default SearchBar;
