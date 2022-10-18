import React from 'react'
import './About.css'

function About(props) {
  console.log(props)
  return (
    <div className="about__container">
      <h4>About this site</h4>
      <p>
        <span>
          In this site, You can check movies information from YTS website.
        </span>
        <span>
          You can check name, genres, ratings, and story summary. If you click
          movie item, you can read more movie detail.
        </span>
      </p>
    </div>
  )
}

export default About
