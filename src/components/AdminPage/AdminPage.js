import React, { Component } from 'react';
//import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
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

    render() {
        return (
            <div>
                <h1>Admin Home</h1>
                
                <section>
                    {/* <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><tb>phinas and ferb</tb><button>Delete</button></tr>
                        </tbody>
                    </table> */}
                    {/*button will take user to new page to add new Gif to table*/}
                    <button onClick={this.goToAddGifPage}>Add Gif</button>
                </section> 
                <br />
                <LogOutButton />
            </div>
        )
    }
}

export default AdminPage;