import React, { Component } from 'react'
import { connect } from 'react-redux';
import './UserPage.css'
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

  componentDidMount(){
    this.props.dispatch({ type: 'GET_USER_GIF'})
  }

  render() {
    return (
      <div>
        <h1>User Home Page</h1>
    <h2 id="welcome">
      Welcome, { this.props.user.username }!
    </h2>

    <section>
      {/* Add to Next Steps */}
      {/* <h2>High Scores</h2>
      <table>
        <thead>
            <tr><th>Items Collected</th></tr>
        </thead>
        <tbody>
            <tr>
                <td>15</td>
            </tr>
        </tbody>                       
      </table>*/}

      
      <br/>
      <hr /> 
      <h2>Collected Gifs</h2>
      <div>
        {/* {JSON.stringify(this.props)} */}
        
      {this.props.userImage.map( (item)=> {
        return (
            <div key={item}>
                <h2>{item.title}</h2>
                <img alt={item.title} src={item.url} />
            </div>
              )
          })}
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