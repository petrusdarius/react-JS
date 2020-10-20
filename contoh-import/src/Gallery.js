import React from 'react';

class Gallery extends React.Component {
    render() {
        return(
            <div class="gallery" id="gallery">
              <div class="container ">
                
                <div class="row">
                  <div class="col-sm-12 text-center">
                    <h2 data-aos="fade-left" data-aos-duration="2000">Gallery</h2>
                    <hr data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000"/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-3 thumbnail" data-aos="flip-left" data-aos-duration="2000" data-aos-delay="1000">
                    <a href="#"><img src="https://cdn.pixabay.com/photo/2015/04/16/15/22/japan-725802_1280.jpg" alt=""/></a>
                  </div>

                  <div class="col-sm-3 thumbnail" data-aos="flip-left" data-aos-duration="2000" data-aos-delay="1300">
                    <a href="#"><img src="https://cdn.pixabay.com/photo/2020/01/25/19/13/paris-4793193_1280.jpg" alt=""/></a>
                  </div>

                  <div class="col-sm-3 thumbnail" data-aos="flip-left" data-aos-duration="2000" data-aos-delay="1600">
                    <a href="#"><img src="https://cdn.pixabay.com/photo/2016/04/28/16/25/disney-1359226_1280.jpg" alt=""/></a>
                  </div>
                </div>

                <div class="row">
                    <div class="col-sm-3 thumbnail" data-aos="flip-left" data-aos-duration="2000" data-aos-delay="1900">
                    <a href="#"><img src="https://cdn.pixabay.com/photo/2019/05/16/21/10/san-marino-4208256_1280.jpg" alt=""/></a>
                    </div>

                    <div class="col-sm-3 thumbnail" data-aos="flip-left" data-aos-duration="2000" data-aos-delay="2200">
                    <a href="#"><img src="https://cdn.pixabay.com/photo/2019/03/11/12/03/landscape-4048473_1280.jpg" alt=""/></a>
                    </div>

                    <div class="col-sm-3 thumbnail" data-aos="flip-left" data-aos-duration="2000" data-aos-delay="2500">
                    <a href="#"><img src="https://cdn.pixabay.com/photo/2020/01/07/22/42/dubai-4748856_1280.jpg" alt=""/></a>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}

export default Gallery;