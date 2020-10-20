import React from 'react';


class About extends React.Component {
    render() {
        return(
            <div class="about" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <h2 class="animate__animated animate__slow animate__fadeInUp aksi">Tentang</h2>
                            <hr class="animate__animated animate__slow animate__backInLeft aksi"/>
                        </div>
                    </div>

                    <div class="card_container col-md-4 offset-md-4">
                       <div class="thecard">
                           <div class="front">
                               <img src="https://pbs.twimg.com/profile_images/378800000149047776/12522f39370e0ef4f08f942d96c33478.jpeg" alt=""/>
                               <p class="text-center">Petrus Darius Adidharma</p>
                           </div>
                           <div class="back">
                               <div class="back-content">
                                   <h3 class="text-center">My Social Media</h3>
                                   <div class="icons">

                                    <a href="#">
                                        <div class="layer">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span class="fab fa-facebook-f"></span>
                                        </div>
                                        <div class="text">Facebook</div>
                                    </a>

                                    <a href="#">
                                        <div class="layer">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span class="fab fa-twitter"></span>
                                        </div>
                                        <div class="text">Twitter</div>
                                    </a>
                            
                                    
                                    <a href="#">
                                        <div class="layer">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span class="fab fa-linkedin-in"></span>
                                        </div>
                                        <div class="text">Linkedin</div>
                                    </a>
                            
                                    <a href="#">
                                        <div class="layer">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span class="fab fa-youtube"></span>
                                        </div>
                                        <div class="text">Youtube</div>
                                    </a>
                                </div>
                               </div>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        );
    }
}

export default About;