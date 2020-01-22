import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css'
//import GifCard from '../GifCard/GifCard'



// only an user with admin status will see this page
class AdminPage extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_FAVORITE_LIST'})
      }

    goToAddGifPage = () => {
        //console.log('clicked')
        this.props.history.push('/addGif');
    }

    deleteRow = () =>{
        console.log('in delete row')
        this.props.dispatch({type: 'DELETE_FAVORITE'})
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.favoriteImages)} 
                <h1>Admin Home</h1>                
                    <table>
                        <thead>
                            <tr><th>Title</th><th>Delete</th></tr>
                        </thead>
                        <tbody>
                            {this.props.favoriteImages.map((item, i)=>{
                                return(
                            <tr>
                                <td key={i} image={item}>{this.image.title}</td><td><button onClick={this.deleteRow}>Delete</button></td>
                            </tr>)})}
                        </tbody>                        
                    </table>
                <section>
                     <button onClick={this.goToAddGifPage}>Add Gif</button>
                </section> 
                <br />
            </div>
        )
    }
}

export default connect(reduxState=>({
    //images: reduxState.searchReducer,
    favoriteImages: reduxState.favoriteListReducer
}))(AdminPage);

