import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
    state ={
        text:''
    }
    static propTypes={
        searchProducts: PropTypes.func.isRequired
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.searchProducts(this.state.text);
        this.setState({text:''});
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    render() {
        return (
            <div>
                <form onSubmit= {this.onSubmit} className="form">
                    <input type="text" name="text" 
                    placeholder="Search Products By Name..." 
                    value={this.state.text}
                    onChange={this.onChange}/>

                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
