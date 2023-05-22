import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { httpRequest, login } from '../../state/actions/asyncActions'


const mapStateToProps = (state) => {
    return {
        logged: state.userState.logged,
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const url = 'https://reqres.in/api/login'
            const data = {
                'email': email,
                'password': password
            }
            dispatch(httpRequest('post',url,data))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default UserContainer;