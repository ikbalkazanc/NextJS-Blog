import React, { Component } from 'react';


const slideImages = [
    'https://wowslider.net/local-sliders/demo-10/data1/images/road220058.jpg',
    "https://wowslider.net/local-sliders/demo-10/data1/images/field175959_1920.jpg"
];

export default class SliderShow extends Component {
    render() {
        return (
            <div>
                <img
                    width = "100%"  
                    height = "350"     

                    src= {slideImages[1]}
                    alt="First slide"
                />
            </div>
        );
    }
}