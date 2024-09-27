import React from 'react';

const AboutSection = ({result}) => {

   let aboutSection=result[0]?.acf 

  return (
    <section className="about-section">
      <div className="about-container">
        <h2>{aboutSection?.about_section_heading}</h2>
        
        <div className="about-images">
          {aboutSection?.about_section_images?.map((ele,index)=>{
            return   <img src={ele?.about_section_left_image} alt="Travel Image 1" key={index}/>
          })}
           
        </div>
        <div className="about-content">
          <h2>{aboutSection?.about_section_sub_heading}</h2>
          <h3>{aboutSection?.about_us_right_section_heading}</h3>
          <p dangerouslySetInnerHTML={{__html:aboutSection?.about_us_right_section_paragraph}}></p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
