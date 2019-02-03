import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { PersistGate } from "redux-persist/lib/integration/react"

import { Provider, connect } from "react-redux"
import { store, persistor } from "./redux/store"
import Loading from "./components/loading"

// PART: Components
import Home from "./components/home"
import Login from "./components/login"
import Register from "./components/register"
import Dashboard from "./components/dashboard"

// PART: Route Helper
import AuthRoute from "./route/AuthRoute"
import GuestRoute from "./route/GuestRoute"

// PART: Apollo CLient
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
const client = new ApolloClient({
    uri: '/graphql'
})

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Provider store={store} >
                    <PersistGate loading={<Loading />} persistor={persistor}>
                        <Router>
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <GuestRoute path="/login" component={Login} />
                                <GuestRoute path="/register" component={Register} />
                                <AuthRoute path="/dashboard" component={Dashboard} />
                            </Switch>
                        </Router>
                    </PersistGate>
                </Provider >
            </ApolloProvider>
        )
    }
}

export default App