import React from 'react';
import { Link } from 'react-router-dom';
import {Button,Row,Col, Thumbnail} from 'react-bootstrap';
import Heading from './Heading'
import AppName from './App Name'

export default class FavoriteProduct extends React.Component {

  state={
    favoritelist: [],
  }

  async componentWillMount() {
    try {
      const res = await fetch('http://199.192.21.172:8000/favorite_list/1/' + this.props.match.params.profile_id);
      const favoritelist = await res.json();
      this.setState({
        favoritelist
      });
    } catch (e) {
      console.log(e);
    }
  }


  setMedia(media_name){
    this.state.media = 'http://199.192.21.172:8000/media/' + media_name
  }

render(){

    return (
        <section className="favorite-product">

        <Row>  
          <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
          <div className="login-appname">

           <Row>
           <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
           
            <Link to="/home">
            <AppName logged_in = {true}/>
            </Link>
           </Col>
           </Row>

          </div>
          </Col>
      </Row><br />
    
          <Heading title="Favorite Products"/>
          <Row>
          <Col lg={6} lgOffset={3} md={4} mdOffset={3} sm={12} xs={12}>
          <Row>
        
          <Col lg={4} md={4} sm={4} xs={4}>
          <Link to={`/favorite_client/${ this.props.match.params.profile_id } `}>
            <Button>Favorite Clients</Button>
          </Link>
          </Col>

           <Col lg={4} md={4} sm={4} xs={4}>
           <Link to={`/favorite_eshop/${ this.props.match.params.profile_id } `}>
            <Button>Favorite Eshop</Button>
          </Link>
          </Col>
        
          <Col lg={4} md={4} sm={4} xs={4}>
          <Link to={`/favorite_product/${ this.props.match.params.profile_id } `}>
            <Button bsStyle="success">Favorite Product</Button>
          </Link>
          </Col>
        
          </Row>

          <Row>

            {this.state.favoritelist.map(item => (

              <div className="favorite_list">
               <Col lg={4} md={4} sm={12} xs={12}>
             {this.setMedia(item.product_image)}
             <Thumbnail href={"product/" + item.product_id }  alt="product-image" src= { `${this.state.media}` }>
             <h3>{item.product_name}</h3>
             </Thumbnail>
             </Col>

              </div>

            ))}

          </Row>
          </Col>
          </Row>
        </section>
    );
  }
}
