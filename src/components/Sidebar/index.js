import React, {useState,useEffect} from 'react'
import Card from '../UI/Card'
import './style.css'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  const[posts, setPosts] = useState([]);
    

  useEffect(() => {
      const posts = blogPost.data;
      setPosts(posts);
  }, [posts]);

  return(
    <div className = "sidebarContainer" style ={{width: props.widt}}>
      <Card style ={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className ="cardHeader">
          <span>About Us</span>
        </div>
        <div className ="profileimageContainer">
          <img src="https://scontent.fhan4-1.fna.fbcdn.net/v/t31.0-8/16602366_974957092639317_2768919548481581518_o.jpg?_nc_cat=104&_nc_sid=05277f&_nc_oc=AQmdKwh0Wv3tgeRDCgRVVs_qa29Sqb4cexpGLfVmm8idXHx7ekuIjnEGStAtn1xgk3QUxaaCI1fgG6wD8IPTysgw&_nc_ht=scontent.fhan4-1.fna&oh=ee860f4c6e82f6a89d39bcb39ccd90c8&oe=5EB651B7" alt="profileimage "/>
        </div>
        <div className ="cardBody">
          <p className ="personalInfo">
          My name is Winnie Le. I am a software developer junior specialization in Front-end develoment. This blog is place for me to sharing about my experience.  
          </p>
        </div>
      </Card>
      <Card style ={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className ="cardHeader">
          <span>social network</span>
        </div>
      </Card>
      <Card style ={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
        <div className ="cardHeader">
          <span>recent post</span>
        </div>
        <div className ="recentPosts">

          {
            posts.map(post=>{
              return(
                <NavLink key = {post.id} to = {`/post/${post.slug}`}>
                  <div className ="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
              );
            })

          }
        </div>
      </Card>
    </div>
    
   )

 }

export default Sidebar