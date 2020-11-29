import React, { Component } from 'react';
class Course extends Component {
    state ={
        courseTitle: ''
    }
    componentDidMount() {
       this.setTitleFromParam();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setTitleFromParam();
    }

    setTitleFromParam() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if(this.state.courseTitle !== param[1]) {
                this.setState({courseTitle:param[1]});
            }
        }
    }

    render () {
        const id = this.props.match.params.id;
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;