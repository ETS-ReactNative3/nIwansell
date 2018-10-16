import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Button, Image, FormControl } from 'react-bootstrap'
import Heading from './houses/Heading'

export default class EShopAds extends React.Component {



       render() {
         return (
           <section className="eshop-ads">

              <Col lg={12} md={12} smHidden xsHidden>
              <Row>
                  <Heading title="TOP e-SHOPS"/>
                </Row>

              <Row className="eshop-ads-items">
                <Image width="auto" height="500px" src={ require ('./houses/images/kuregs.png') } alt="iwansell" responsive/>
              </Row>
              <Row className="eshop-ads-items">
                <Image width="auto" height="500px" src={ require ('./houses/images/kuregs.png') } alt="iwansell" responsive/>
              </Row>
              <Row className="eshop-ads-items">
                <Image width="auto" height="500px" src={ require ('./houses/images/kuregs.png') } alt="iwansell" responsive/>
              </Row>
              <Row className="eshop-ads-items">
                <Image width="auto" height="500px" src={ require ('./houses/images/kuregs.png') } alt="iwansell" responsive/>
              </Row>
              <Row className="eshop-ads-items">
                <Image width="auto" height="500px"  src={ require ('./houses/images/kuregs.png') } alt="iwansell" responsive/>
              </Row>
              </Col>
           </section>
         )
       }
  }
