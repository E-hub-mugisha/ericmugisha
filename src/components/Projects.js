import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Projects = () => {
    return (
        <div id="project">
            <div class="container">
            <h2 class="section-title text-center mb-2 h1">Projects.</h2>
					<p class="text-center text-muted h5">These are projects that i have done so far</p>
                <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="mask flex-center">
                                <div class="container">
                                    <div class="row align-items-center">
                                        <div class="col-md-7 col-12 order-md-1 order-2">
                                            <h4>Present your <br/> awesome product</h4>
                                            <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br/>
                                            necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
                                            <a href="#">Visit</a> 
                                        </div>
                                        <div class="col-md-5 col-12 order-md-2 order-1">
                                            <img src="https://i.imgur.com/NKvkfTT.png" class="mx-auto" alt="slide"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="mask flex-center">
                                <div class="container">
                                    <div class="row align-items-center">
                                        <div class="col-md-7 col-12 order-md-1 order-2">
                                            <h4>Present your <br/>awesome product</h4>
                                            <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br/>
                                            necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
                                            <a href="#">Visit</a>
                                        </div>
                                        <div class="col-md-5 col-12 order-md-2 order-1">
                                            <img src="https://i.imgur.com/duWgXRs.png" class="mx-auto" alt="slide"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="mask flex-center">
                                <div class="container">
                                    <div class="row align-items-center">
                                        <div class="col-md-7 col-12 order-md-1 order-2">
                                            <h4>Present your <br/>awesome product</h4>
                                            <p>Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis quidem rerum <br/>
                                            necessitatibus praesentium voluptatum deleniti atque corrupti.</p>
                                            <a href="#">Visit</a> 
                                        </div>
                                        <div class="col-md-5 col-12 order-md-2 order-1">
                                            <img src="https://i.imgur.com/DGkR4OQ.png" class="mx-auto" alt="slide"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}



export default Projects
