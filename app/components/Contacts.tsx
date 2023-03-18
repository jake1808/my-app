import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';
import {
  Button,
  Container,
  Form,
  Input,
  Left,
  Right,
  Section,
  TextArea,
  Title
} from './styledComponents/contactsComponents';





const Contacts = () => {
  const ref = useRef('form');
  const [success, setSuccess] = useState(false)
  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_2hzxkus', 'template_dpb7xil', ref.current, 'LqsaYV2mcgjpomBo-')
      .then((result) => {
        console.log(result.text);
        setSuccess(true)
      }, (error) => {
        console.log(error.text);
        setSuccess(false)

      });
  }


  return (
    <Section>
      <Container>
        <Left>
          <Form id='form' onSubmit={handleSubmit}>
            <Title>Contact me</Title>
            <Input placeholder='Name' name='name' />
            <Input placeholder='Email' name='email' />
            <TextArea placeholder='Write your message' rows={10} name='message' />
            <Button type='submit'>Send</Button>
            {success && "Your message has been sent. I'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contacts