import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class SearchBar extends Component {
   constructor(props){
      super(props);
      this.state = {value: '', urlVal: ''};
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event){
      console.log(event.target.value);
      var val = "/search&q=" + event.target.value;
      this.setState({value: event.target.value, urlVal: val});

   }

   render(){
      return(
         <Form inline action={this.state.urlVal}>
            <FormGroup >
               <Input
                  type="text"
                  required
                  placeholder="Search"
                  value={this.state.value}
                  onChange={this.handleChange}/>
            </FormGroup >
            <Button type="submit" href={this.state.urlVal}>
               Q
            </Button>
         </Form>
      );
   }
}

export default SearchBar;
