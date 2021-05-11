// https://dev.to/api/articles?username=tolentinoel


import React from 'react';
import { Component } from 'react';
import './styles/Blog.css';

import Card from 'react-bootstrap/Card'

class Blog extends Component {

    state={
        blogs : []
    }

    componentDidMount(){
        fetch('https://dev.to/api/articles?username=tolentinoel')
        .then(res => res.json())
        .then(data => {
            // debugger
            this.setState({ blogs: data })
        })
    }


    render(){
        console.log(this.state.blogs)
        return (

            <div className="blog">

                {this.state.blogs.map(content => {
                    return (
                    <Card border="outline-info" style={{ width: '18rem' }} bg="dark">
                        <Card.Img variant="top" src={content.cover_image} />
                        <Card.Header><h4>{content.title}</h4></Card.Header>
                        <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">{content.tags}</Card.Subtitle>
                        <Card.Text>
                            {content.description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    )
                })
                }

            </div>
            )
        }

    }
export default Blog;
