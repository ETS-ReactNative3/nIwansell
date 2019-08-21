import React from 'react'
import { Button, Glyphicon, Col, Row, FormControl, FormGroup, Form, InputGroup } from 'react-bootstrap'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

export default class SendReply extends React.Component {

    state = {
        reply_err: false,
        message: [],
    }

    options = {
        title: 'Title',
        message: 'Message',
        buttons: [
          {
            label: 'Yes',
            onClick: () => alert('Click Yes')
          },
          {
            label: 'No',
            onClick: () => alert('Click No')
          }
        ],
        childrenElement: () => <div />,
        customUI: ({ onClose }) => 
            <div className='custom-ui'>
                <Row>
                    <Col lg={8} lgOffset={2} md={8} mdOffset={2} sm={12} xs={12}>
                        <div style={{ padding: 10, marginBottom: 20}}>
                            <p>{this.props.comment}</p>
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col lg={9} lgOffset={3} md={9} mdOffset={3} sm={12} xs={12}>
                    <div style={{ paddingLeft: 10,}}>
                    <Form inline>
                    <InputGroup>
                        <FormControl 
                            componentClass="textarea" 
                            placeholder="Reply" 
                            id="reply" 
                            name="reply"
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                this.sendReply()
                                }
                            }}/>
                            <InputGroup.Button>
                                <Button><Glyphicon style={{ fontSize: 20}} onClick={() => this.sendReply()} glyph='send'>Send</Glyphicon></Button>
                            </InputGroup.Button>
                        </InputGroup>
                        </Form>
                    </div>
                    </Col>
                    
                </Row>
                
                  
            </div>,
        closeOnEscape: true,
        closeOnClickOutside: true,
        willUnmount: () => {},
        onClickOutside: () => {},
        onKeypressEscape: () => {}
    };

    async sendReply(){

        this.setState({ 
            reply_err: false,
          })
          
           var reply = document.getElementById("reply").value
      
            if(reply){
    
                this.setState({ isLoading: true})
                const auth = localStorage.getItem('auth_code')
      
                var formData = new FormData()
                formData.append('reply', reply)
        
                try {
                  const res = await fetch('http://127.0.0.1:8000/api/reply/' + this.props.comment_id + '/', {
        
                   body : formData,
                   method: 'POST',
                   credentials: 'same-origin',
                   mode: 'cors',
                   headers : {
                     'Authorization' : 'Token ' + auth
                   }
        
                  })
                  const message = await res.json();
                    this.setState({
                      message, rd: true 
                    });
                    alert('sent!')
                    window.location.replace("http://127.0.0.1:3000/thread/" + this.props.thread_id);
        
                } catch (e) {
                  console.log(e);
                  alert('failed, retry please')
                }
        
                this.setState({ isLoading: false})

              }else{
                this.setState({reply_err: true})
              }

        

}   


      customAlert(){
          confirmAlert(this.options)
      }

       render() {
         return (
           <section>
               <Glyphicon onClick={() => this.customAlert()} glyph="comment">{this.props.count}</Glyphicon>
           </section>
         )
       }
  }
