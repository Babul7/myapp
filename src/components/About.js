import React from 'react'

const About = () => {

    let myStyle = {
        minHeight : "100vh",
    }

    return (
        <div className="container" style={myStyle}>
            <h4 className='pt-4'>About</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Libero corrupti optio quaerat eaque blanditiis nam natus 
               adipisci! Facilis ea veniam deserunt hic repudiandae odit 
               harum exercitationem voluptas nulla ratione odio, beatae 
               commodi eos, repellendus a.
            </p>
        </div>
    )
}

export default About