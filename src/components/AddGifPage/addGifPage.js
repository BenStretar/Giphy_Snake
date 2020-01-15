import React, { Component } from 'react'
import { connect } from 'react-redux';

class addGifPage extends Component {
    render() {
        return (
            <section>
                <input type="text" placeholder="search"/>
                <button onClick={this.searchForGif}>Search</button>
                <div>
                    {/* display they gifs that the user searched for limit 12 */}
                    
                </div>
            </section>
        )
    }
}


export default connect()(addGifPage);