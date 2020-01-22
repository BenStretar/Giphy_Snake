import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class GifCard extends Component {

  selectImage = () => {
    this.props.history.push('/addNew');
    this.props.dispatch({type: 'SELECT_IMAGE', payload: {...this.props.image}})
  }

  // deleteFavorite = () => {
  //   this.props.dispatch({ type: 'DELETE_FAVORITE', payload: this.props.image.id})
  // }

  // renderPageStuff = ()=> {
  //   switch(this.props.page) {
  //     case 'search': return ;
  //     case 'favorites': return <button onClick={this.deleteFavorite}>Delete</button>
  //     default:
  //   }
  // }

  render () {
    return (
      <div className="imageCard">
        {JSON.stringify(this.props.image.id)}
         <img src={this.props.image.image_url} alt={this.props.image.title}/>
         <button onClick={this.selectImage}>Favorite me!</button>
      </div>
    )
  }
}

export default withRouter(connect()(GifCard));