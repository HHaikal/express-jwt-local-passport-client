import React, { Component } from "react"
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from "react-router-dom"

const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
                }
            }}
        />
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.Auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(AuthRoute)