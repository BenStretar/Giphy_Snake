import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css'



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
                <h1>Admin Home</h1>
                {JSON.stringify(this.props.favoriteImages)}
                
                <section>
                    <table>
                        <thead>
                            <tr><th>Title</th><th>Delete</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>title</td><td><button onClick={this.deleteRow}>Delete</button></td>
                            </tr>
                        </tbody>                        
                    </table>
                    {/*button will take user to new page to add new Gif to table*/}
                    <button onClick={this.goToAddGifPage}>Add Gif</button>
                </section> 
                <br />
            </div>
        )
    }
}

export default connect(reduxState=>({favoriteImages: reduxState.favoriteListReducer}))(AdminPage);

