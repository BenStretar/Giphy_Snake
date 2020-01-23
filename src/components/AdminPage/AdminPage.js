import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Admin.css';



// only an user with admin status will see this page
class AdminPage extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_FAVORITE_LIST'})
      }

    goToAddGifPage = () => {
        //console.log('clicked')
        this.props.history.push('/addGif');
    }

    deleteRow = (id) =>{
        console.log('in delete row')
        this.props.dispatch({ type: 'DELETE_FAVORITE', payload: id})
    }

    editTitle = (id) =>{
        console.log('clicked edit button')
        this.props.history.push(`/edit/${id}`)
    }

    render() {
        return (
            <div>
                {/* {JSON.stringify(this.props.favoriteImages)}  */}
                <h1>Admin Home</h1>                
                    <table>
                        <thead>
                            <tr><th>Title</th><th></th><th></th></tr>
                        </thead>
                        {/* <TableRow /> */}
                        <tbody>
                        {this.props.favoriteImages.map( (item)=> {     
                            return( 
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td><button onClick={() => this.editTitle(item.id)}>Edit</button></td>
                                    <td><button onClick={() => this.deleteRow(item.id)}>Delete</button></td>
                                </tr>
                            )})}
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
    favoriteImages: reduxState.favoriteListReducer
}))(AdminPage);