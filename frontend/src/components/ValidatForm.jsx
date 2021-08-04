
import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'


const curl="http://localhost:8900/coupans";

class ValidatForm extends Component {
  constructor (props){
    super(props)
    console.log(props.coupan.id)
    this.state={
        coupan:[],
        code:''
    }
}

async componentDidMount(){
  var coupanid = this.props.match.params.id;
  const response = await axios.get(`${curl}/${coupanid}`);
  this.setState({coupan:[response.data]})
  // console.log(this.state.coupan.coupon_code)
}


handleChange=(e)=>{
  console.log(e.target.value)

  this.setState({code:e.target.value})
}


  // console.log(props)
 
   renderForm=({coupan})=>{
    console.log(coupan)
  if(coupan){
    return coupan.map((item)=>{
      return(
        <FormGroup key={item.id} className="d-flex flex-wrap  justify-content-center align-items-center" >
        <Label className="m-5" for="exampleEmail">Enter a Coupan code:</Label>
        <Input  className="w-50 d-block " type="text" name="text" id="exampletext" placeholder="Coupan code"
        // value={item.coupon_code} 
        onChange={this.handleChange}
        />
      </FormGroup>
      )
   
    

    })
  }
}

 handleSubmit =(e)=>{
  const {code,coupan}=this.state



  const currentdate=new Date().toJSON().slice(0,10)

  console.log(currentdate>"2021-02-06")



  coupan.map(i=>{
    if(i.coupon_code!==code ){
    alert("Coupan is invalid")
console.log(i.expiry_date)
    
    return i
    }
    else if(currentdate>i.expiry_date){
      alert("coupan has expired")

    }
  
  else {
    alert("coupan is valid")}
    console.log(i.expiry_date)
  })





  
      
    
  }

  render(){
    return (
                <Form>
                 { this.renderForm(this.props)}          
            <Button onClick={this.handleSubmit} >Submit</Button>
          </Form>
        
    )
  }
}

export default  withRouter(ValidatForm)
