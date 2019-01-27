import React, { Component } from "react"
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from "react-router-dom"

const AuthRoute = ({ auth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth) {
                    return <Redirect to={{
                        pathname: '/dashboard',
                        state: { from: props.location }
                    }} />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    );
};


const mapStateToProps = state => {
    return {
        auth: state.Auth.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(AuthRoute)