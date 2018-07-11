import React from 'react'
import RateReview from './neighborhoods/Rate Review'

export default class EShopRR extends React.Component {
  state = {
    eshop : {}
 }

async componentDidMount() {

try {
  const res = await fetch('http://199.192.21.172:8000/eshop/' + this.props.match.params.id);
  const eshop = await res.json();
  this.setState({
    eshop
  });
} catch (e) {
  console.log(e);
}
}
       render() {
         return (
           <section className="eshop-rr">
             <RateReview status_code= '1' id={this.props.match.params.id} eshop_name={this.state.eshop.name}/>
           </section>
         )
       }
  }
