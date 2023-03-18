import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Map from './Map'
import emailjs from '@emailjs/browser';

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`
const Title = styled.h1`
  font-weight: 200;

`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Input = styled.input`
padding: 20px;
background-color: #efe8e8;
border: none;
border-radius: 5px;
`
const TextArea = styled.textarea`
padding: 20px;
background-color: #efe8e8;
border: none;
border-radius: 5px;
`
const Button = styled.button`
background-color: blue;
color: white;
border: none;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
padding: 20px;
`

const Right = styled.div`
  flex: 1;
`




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
            <Title>Contact us</Title>
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