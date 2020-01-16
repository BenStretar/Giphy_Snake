import React, { Component } from 'react'
import { connect } from 'react-redux';

class addGifPage extends Component {

    state = {
        search: ''
    }

    searchForGif =()=>{
        this.props.dispatch({type: 'SEARCH_GIPHY', payload: this.state.search})
    }

    render() {
        return (
            <section>
                <input type="text" placeholder="search"/>
                <button onClick={this.searchForGif}>Search</button>
                {JSON.stringify(this.props.images)}
                
                    {/* display they gifs that the user searched for limit 12 */}
                    {/* {this.props.images.map((item, i)=>{
                        return <img src={item.url} alt={item.title}/>
                    })} */}
                    <div>
                        <img src="https://media3.giphy.com/media/yQUP2EUSHEgta/giphy.gif"/>
                    </div>
                
            </section>
        )
    }
}


const putReduxStateOnProps = (reduxStore) => ({
    images: reduxStore.images
})

export default connect(putReduxStateOnProps)(addGifPage);