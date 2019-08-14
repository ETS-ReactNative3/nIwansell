import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import SubcategoryIcons from './Subcategory Icons'
import { Row, Col } from 'react-bootstrap'
import Spinner from 'react-activity/lib/Spinner';
import 'react-activity/lib/Spinner/Spinner.css';

export default class SponsoredGallery extends React.Component {

  state = {
    isLoading: true,
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

    this.setState({ isLoading: false })

  }

  setMedia(media_name){
    this.state.media = 'https://www.iwansell.com' + media_name
  }

       render() {

        var settings_lg = {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1000,
          fade: true,
          speed: 2000,

        };


        var settings_sm = {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1000,
          fade: true,
          speed: 2000,

        };



         return (
           <section className="sponsored-gallery">
             <Link to="/listings/1">
              <div className="contact-button">See what people need here!</div>
             </Link>
           {this.state.isLoading ? (
             <div className="isloading">
             <p><b><i>loading...</i></b></p>
             <p><Spinner color="#ff0000" size={32}/></p>
             </div>
           ) : (

            <Row>
            <Col lg={10} lgOffset={1} md={10} mdOffset={1} smHidden xsHidden>
       <Slider {...settings_lg}>

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


               <Slider {...settings_sm}>
             { this.state.sponsoredList.map(item => (
                 <div class="card">
                 {this.setMedia(item.product_image)}
                 <img src= { `${this.state.media}` } alt="thumbnail"/>
                 </div>
              )
             )}
               </Slider>
          </Col>
           </Row>

           )}


              <Row>
               <SubcategoryIcons/>
             </Row>

           </section>
         )
       }
  }
