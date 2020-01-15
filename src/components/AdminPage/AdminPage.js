import React, { Component } from 'react';
//import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton'

// only an user will admin status will see this page
export default class AdminPage extends Component {
    render() {
        return (
            <div>
                <h1>Admin Home</h1>
                {/* 
                Update when gifs are 'favorited'
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <tb>gif1</tb>
                                <tb><button>Delete</button></tb>
                            </tr>
                        </tbody>
                    </table>
                </section> */}
                <hr/>
                <section>

                </section>
                <LogOutButton />
            </div>
        )
    }
}
