// import React, {Component, Fragment} from 'react';
import React from 'react'
import { connect } from 'react-redux';
// import AdminPage from '../AdminPage/AdminPage';
// import AddGifPage from '../AddGifPage/addGifPage';
// import GifCard from '../GifCard/GifCard';
// import AddNew from '../AddNew/AddNew';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`


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


const UserPage = (props) => (
  <div>
    <h1>User Home Page</h1>
    <h2 id="welcome">
      Welcome, { props.user.username }!
    </h2>
    <p>Your ID is: {props.user.id}</p>

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
      
    </section>

  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
