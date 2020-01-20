import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


class GifCard extends Component {

  selectImage = () => {
    this.props.history.push('/addNew');
    this.props.dispatch({type: 'SELECT_IMAGE', payload: {...this.props.image}})
  }

  deleteFavorite = () => {
    this.props.dispatch({ type: 'DELETE_FAVORITE', payload: this.props.image.id})
  }

  renderPageStuff = ()=> {
    switch(this.props.page) {
      case 'search': return <button onClick={this.selectImage}>Favorite me!</button>;
      case 'favorites': return <button onClick={this.deleteFavorite}>Delete</button>
      default:
    }
  }

  render () {
    return (
      <div className="imageCard">
        {/* {JSON.stringify(this.props.image)} */}
         <img src={this.props.image.image_url} alt={this.props.image.title}/>
         {this.renderPageStuff()}
      </div>
    )
  }
}

export default withRouter(connect()(GifCard));