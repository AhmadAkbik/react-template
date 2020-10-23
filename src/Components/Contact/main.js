import React  from 'react';
import {Drop,Droptitle,Span,Form,FormInput,InputText,InputEmail,InputExp,InputSubmit,TextArea} from './style.js'

const Contact = () => {
    return (
      <Drop>
        <div class="container">
            <Droptitle><Span>Drop </Span>Me A line</Droptitle>
            <Form action="">
                <FormInput>
                    <InputText type="text" placeholder="Your Name"/>
                    <InputEmail type="email" placeholder="Your Email"/>
                </FormInput>
                <InputExp type="text" class="sub" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit type="submit" value="Send Message"/>
            </Form>
        </div>
      </Drop>
  
      )
}

export default Contact;