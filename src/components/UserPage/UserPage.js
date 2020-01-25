import React, { Component } from 'react'
import { connect } from 'react-redux';
// commented out for now - not working as wanted
  // import React, {Component, Fragment} from 'react';
  // import AdminPage from '../AdminPage/AdminPage';
  // import AddGifPage from '../AddGifPage/addGifPage';
  // import GifCard from '../GifCard/GifCard';
  // import AddNew from '../AddNew/AddNew';

// export class UserPage extends Component{
//   render(){
//     const homePage = this.props.user.admin === false ? 
//     (<p>User</p>) 
//     : 
//     (<>
//     <p>Admin</p>
//     <Fragment>
//       <AdminPage/>
//       <AddGifPage/>
//       <GifCard/>
//       <AddNew/>
//     </Fragment>
//     </>);
//     return(
//       <div>
//         {homePage}
//       </div>
//     )
//   }
// }

class UserPage extends Component {

  // componentDidMount(){
  //   this.props.dispatch({ type: 'GET_USER_GIF'})
  // }

  render() {
    return (
      <div>
        <h1>User Home Page</h1>
    <h2 id="welcome">
      Welcome, { this.props.user.username }!
    </h2>
    <p>Your ID is: {this.props.user.id}</p>

    <section>
      <h2>High Scores</h2>
      <table>
        <thead>
            <tr><th>Time</th>
            <th>Items Collected</th></tr>
        </thead>
        <tbody>
            <tr>
                <td>1:30</td>
                <td>0</td>
            </tr>
        </tbody>                       
      </table>
      <button>Clear Scores</button>  

      <hr />
      <h2>Collected Gifs</h2>
      <div>

      </div>
    </section>
      </div>
    )
  }
}

// this allows us to use <App /> in index.js
export default connect(reduxState => ({
  user: reduxState.user,
  userImage: reduxState.userGifReducer
}))(UserPage);