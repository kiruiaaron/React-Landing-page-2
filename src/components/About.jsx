import React from 'react'

function About(props) {
  return (
    <div id='about'>
       <div className='about-image'>
        <img src={props.image} alt=''/>
        <div className='about-text'>
            <h2> {props.title}</h2>
            <p>gggggggggggggggdsgewcbww wuqfb jsnkld
                sadhewdfsukjsaaaaaaaaaaaasaaahhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
            </p>
            <button> {props.button}</button>
        </div>
       </div>
    </div>
  )
}

export default About;
