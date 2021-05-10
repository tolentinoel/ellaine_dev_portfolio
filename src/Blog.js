// https://dev.to/api/articles?username=tolentinoel


import React from 'react';
import { Component } from 'react';
import './styles/Blog.css';

class Blog extends Component {

    componentDidMount(){
        fetch('https://dev.to/api/articles?username=tolentinoel',{
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
        }})
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

render(){
    return (

        <div className="blog">

        {this.blogFeed}

      </div>
        )
    }

}
export default Blog;
