import React, { Fragment } from "react"
import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { withRouter, Route } from "react-router-dom"
import { AuthLogout } from "../redux/actions/auth"

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
        </Fragment>
    )
}


export default connect(null, { AuthLogout })(dashboard)