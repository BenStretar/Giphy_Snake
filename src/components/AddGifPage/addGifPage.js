import React, { Component } from 'react'
import { connect } from 'react-redux';

class addGifPage extends Component {

    state = {
        search: ''
    }

    searchForGif =()=>{
        this.props.dispatch({type: 'SEARCH_GIPHY', payload: this.state.search})
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log('in handleChange:', event.target.value)
    }

    render() {
        return (
            <section>
                <h1>Search Page</h1>
                <input placeholder="search" type="text" onChange={(event)=>this.handleChange(event, 'search')} 
                value={this.state.search}/>

                <button onClick={this.searchForGif}>Search</button>
                                
                    {/* display they gifs that the user searched for limit 12 */}
                    {/* {this.props.images.map((item, i)=>{
                        return <img src={item.url} alt={item.title}/>
                    })} */}
                <div>
                    {JSON.stringify(this.props.images)}
                    
                </div>
                   
                
            </section>
        )
    }
}


const putReduxStateOnProps = (reduxStore) => ({
    images: reduxStore.images
})

export default connect(putReduxStateOnProps)(addGifPage);