import React from 'react';

const HighlightsSection = ({ result }) => {
    console.log(result)

    return (
        <section className="highlights">
            {result?.about_us_graph?.map((ele, index) => {

                return <div className="highlight" key={index}>
                    <div className="hightlight_left">
                    <img src={ele?.about_graph_image} alt="700 Destinations" />

                    </div>
                    <div className="hightlights_right">

                    <h3>{ele?.about_graph_title}</h3>
                    <p>{ele?.about_graph_description}</p>
                    </div>
                </div>
            })}


        </section>
    );
};

export default HighlightsSection;
