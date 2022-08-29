import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
		<div id="service">
			<section id="what-we-do">
				<div class="container-fluid">
					<h2 class="section-title mb-2 h1">Our Services.</h2>
					<p class="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>
					<div class="row mt-5">
						<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
							<div class="card">
								<div class="card-block block-1">
									<h3 class="card-title">Web Development</h3>
									<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
									<a href="#" title="Read more" class="read-more" >Read more<i class="ml-2"><FontAwesomeIcon icon={faAngleDoubleRight}/></i></a>
								</div>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
							<div class="card">
								<div class="card-block block-2">
									<h3 class="card-title">Graphics Design</h3>
									<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
									<a href="#" title="Read more" class="read-more" >Read more<i class="ml-2"><FontAwesomeIcon icon={faAngleDoubleRight}/></i></a>
			                    </div>
					        </div>
				        </div>
						<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
					        <div class="card">
								<div class="card-block block-3">
							        <h3 class="card-title">Software Development</h3>
									<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							        <a href="#" title="Read more" class="read-more" >Read more<i class="ml-2"><FontAwesomeIcon icon={faAngleDoubleRight}/></i></a>
						        </div>
							</div>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
					        <div class="card">
								<div class="card-block block-4">
							        <h3 class="card-title">IT Services</h3>
							        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
							        <a href="#" title="Read more" class="read-more" >Read more<i class="ml-2"><FontAwesomeIcon icon={faAngleDoubleRight}/></i></a>
						        </div>
					        </div>
				        </div>
			        </div>
			        
                </div>	
	        </section>
        </div>
    )
}

export default Services
