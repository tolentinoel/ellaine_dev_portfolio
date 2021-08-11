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
            this.setState({ blogs: data })
            // debugger
        })
    }


    render(){
        return (
            <>
                <div>
                    <h1 className="blogsHeader" id="blogfeed">Blogs</h1>
                    <p className="blogP">I do also maintain a blog! Here are my few recent ones!</p>
                </div>
                <div className="blog">
                    {this.state.blogs.slice(0,4).map(content => {
                        return (
                        <a className="cardLink" href={content.url} target="_blank" rel="noreferrer">
                            <Card className="blogCard" border="outline-info" bg="dark" key={this.state.blogs.indexOf(content)}>
                                <Card.Img className="cardImgTop" variant="top" src={content.cover_image} alt={content.tag_list.join()+ "-BLOG"} width="278" height="117"/>
                                <Card.Header><a href={content.url} target="_blank" rel="noreferrer"><h5>{content.title}</h5></a></Card.Header>
                                <Card.Body >

                                    <span className="subtitle">
                                        {content.tag_list.map(tag => {
                                            return <Card.Subtitle className="mb-1 text-muted" key={content.tag_list.indexOf(tag)}>#{tag}</Card.Subtitle>
                                        })}
                                    </span>
                                    <Card.Text className="blogBody">
                                    {content.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>        
                            )
                        })
                    }

                </div>
            </>
            )
        }

    }
export default Blog;
