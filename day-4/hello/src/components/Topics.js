import React from 'react';
import {
    Link,
    Route,
} from 'react-router-dom'

function Topic({ match }) {
    return <h1> {match.params.topicId} </h1>
}

function Topics ({ match }) {
    // const path = match.path
    return (
    <div>
        <h3>TOPICS</h3>
        <ul>
            <li>
                <Link to={`${match.url}/render`}>Rendering</Link>
            </li>
            <li>
                <Link to={`${match.url}/compo`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/route`}>Routes</Link>
            </li>
        </ul>

        <hr />
        <Route exact path={`${match.path}/:topicId`} component={Topic} />
        <Route exact path={`${match.url}`} render={() => {
            return <h3>Select topic</h3>
        }} />
    </div>
    )
};

export default Topics;



