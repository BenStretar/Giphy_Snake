import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 120,
      },
      button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none'
    },
  });

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
        const {classes} = this.props;
        return (
            <>
            {/* {JSON.stringify(this.props.match)} */}
                <h2>Update title</h2>
                <div>
                    <TextField 
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        type="text" 
                        placeholder="Image title" 
                        onChange={(event)=>this.handleChange(event, 'title')}
                    />
                    <Button color="secondary" onClick={this.handleCancel}>Cancel</Button>
                    <Button color="default" onClick={this.handleConfirm}>Confirm</Button>
                </div>
            </>
        )
    }
}

export default withRouter(connect(reduxState=>({
    favoriteImages: reduxState.favoriteListReducer
}))(withStyles(styles)(EditTitle)));