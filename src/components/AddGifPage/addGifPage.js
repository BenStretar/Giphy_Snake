import React, { Component } from 'react'
import { connect } from 'react-redux';
import GifCard from '../GifCard/GifCard';

class addGifPage extends Component {

    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log('in handleChange:', event.target.value)
    }

    searchForGif = ()=>{
        this.props.dispatch({type: 'SEARCH_GIPHY', payload: this.state.search})
    }
   
    render() {
        return (
            <div>
                <h1>Search Page</h1>
                <input placeholder="search" type="text" onChange={(event)=>this.handleChange(event)} 
                value={this.state.search}/>

                <button onClick={this.searchForGif}>Search</button>
                                
                    {/* display 12 gifs that the user searched for */}
                    {/* {JSON.stringify(this.props.images)} */}
                    <div className="pictureBox">
                        {this.props.images.map( (item,i)=> {     
                        return <GifCard key={i} image={item} page='search'/>
                        })}
                    </div>
            </div>
        )
    }
}

export default connect(reduxState=>({images: reduxState.searchReducer}))(addGifPage);