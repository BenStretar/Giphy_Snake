import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class EditTitle extends Component {

    state={
        title: ''
    }

    handleCancel = () => {
        this.props.history.push('/admin')
        console.log('cancel')
    }

    handleConfirm = (id) => {
        console.log('confirm')
        this.props.dispatch({ type: 'EDIT_TITLE', payload: {title: this.state.title, id: this.props.match.params.id} })
        this.props.history.push('/admin')
    }

    handleChange = (event, propertyName) => {
        console.log('Changing title to: ', event.target.value)
        this.setState({
            [propertyName]: event.target.value
        })
    }

    render() {
        return (
            <>
            {JSON.stringify(this.props.match)}
                <h2>Update title</h2>
                <div>
                    <input type="text" placeholder="Image title" onChange={(event)=>this.handleChange(event, 'title')}/>
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button onClick={this.handleConfirm}>Confirm</button>
                </div>
            </>
        )
    }
}

export default withRouter(connect(reduxState=>({
    favoriteImages: reduxState.favoriteListReducer
}))(EditTitle));