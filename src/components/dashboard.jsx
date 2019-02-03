import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import User from "./user"

import { connect } from "react-redux"
import { withRouter, Route } from "react-router-dom"
import { AuthLogout } from "../redux/actions/auth"

import gql from "graphql-tag"
import { Query } from "react-apollo"

const LAUNCHES_QUERY = gql`
    query{
        users {
            id,
            name,
            username,
            email,
            phone,
            website,    
            todos{
                id
                title,
                completed
            }
        }
    }
`

// const dashboard = withRouter(({ history }) => {
//     return (
//         <div>
//             <button onClick={AuthLogout(history)}>Logout</button>
//             welcome To dashboard
//         </div>
//     )
// })

const dashboard = props => {
    return (
        <Fragment>
            <button onClick={props.AuthLogout}>Logout</button>
            <h1>List Of Users</h1>
            <Query query={LAUNCHES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) return console.log(error);
                        console.log(data)
                        return <div>
                            {data.users.map(user => (
                                <User key={user.id} data={user} />
                            ))}
                        </div>
                    }
                }
            </Query>
        </Fragment>
    )
}


export default connect(null, { AuthLogout })(dashboard)