import React, { Component } from 'react';
//import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Admin.css'


// only an user will admin status will see this page
class AdminPage extends Component {

    handleDelete = () => {
        console.log('delete')
    }
    render() {
        return (
            <div>
                <h1>Admin Home</h1>
                
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><tb>phinas and ferb</tb><button>Delete</button></tr>
                        </tbody>
                    </table>
                </section> 
                <hr/>
                <section>
                    <input type="text" placeholder="search"/>
                    <button onClick="searchForGif">Search</button>
                    <div>
                        {/* display they gifs that the user searched for limit 12 */}
                        
                    </div>
                </section>
                <LogOutButton />
            </div>
        )
    }
}

export default AdminPage;