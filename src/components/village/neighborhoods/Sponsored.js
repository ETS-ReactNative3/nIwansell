import React from 'react'
import Slider from 'react-slick'
import { Row, Col } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'

export default class Sponsored extends React.Component {

  state = {
    sponsoredList: [],
    media: null,
    count: 0,
    id:null
  }

  async componentWillMount() {
    try {
      const res = await fetch('https://www.iwansell.com/api/sponsored/' + this.props.campus_id + '/');
      const sponsoredList = await res.json();
      this.setState({
        sponsoredList
      });
    } catch (e) {
      console.log(e);
    }

  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com/api/media' + media_name
  }

       render() {


           var settings = {
             dots: true,
             infinite: true,
             autoplay: true,
             autoplaySpeed: 1000,
             fade: true,
             speed: 2000,

           };


            return (
              <section className="sponsored">
                  <Row>
                   <Heading title={this.props.title}/>
                  </Row>
                  <Row>
                  <Col lg={10} lgOffset={1} md={10} mdOffset={1} smHidden xsHidden>
             <Slider {...settings}>

               { this.state.sponsoredList.map(item => (
                       <div className="sponsored-images">
                         <div className="sponsored-image">
                       {this.setMedia(item.product_image)}
                       <img src= { `${this.state.media}` } alt="thumbnail"/>
                       </div>
                       </div>
                    )
                   )}
            </Slider>

                </Col>

   						  <Col sm={12} xs={12} lgHidden mdHidden>

   								<div class="scrolling-wrapper">
                   { this.state.sponsoredList.map(item => (
                       <div class="card">
                       {this.setMedia(item.product_image)}
                       <img src= { `${this.state.media}` } alt="thumbnail"/>
                       </div>
                    )
                   )}

                   </div>

                </Col>
                 </Row>

              </section>
            )
          }
  }
