import React, { Component } from 'react';
//import { connect } from 'react-redux';
import './Admin.css'



// only an user will admin status will see this page
class AdminPage extends Component {

    handleDelete = () => {
        console.log('delete')
    }

    goToAddGifPage = () => {
        //console.log('clicked')
        this.props.history.push('/addGif');
    }

    deleteRow = () =>{
        console.log('in delete row')
    }

    render() {
        return (
            <div>
                <h1>Admin Home</h1>
                
                <section>
                    <table>
                        <thead>
                            <tr><th>Title</th>
                            <th>Delete</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><button onClick={this.deleteRow}>Delete</button></td>
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

export default AdminPage;

