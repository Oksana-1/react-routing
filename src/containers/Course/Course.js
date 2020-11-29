import React, { Component } from 'react';
class Course extends Component {
    componentDidMount() {
    }

    render () {
        const id = this.props.match.params.id;
        return (
            <div>
                <h1>_COURSE_TITLE_</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;