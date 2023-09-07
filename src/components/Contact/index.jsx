import React from 'react'
import styled from 'styled-components'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: rgb(255, 25, 0);
  background: linear-gradient(225deg, rgb(255, 0, 0) 0%, rgb(255, 136, 0) 100%);
  background: -moz-linear-gradient(225deg, rgb(255, 0, 0) 0%, rgb(255, 119, 0) 100%);
  background: -webkit-linear-gradient(225deg, rgb(255, 0, 0) 0%, rgb(255, 98, 0) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`



const Contact = () => {
  // Hooks
  const [open, setOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      emailjs
        .sendForm('service_6jw38uh', 'template_o3j1oh7', form.current, 'ePsTtr0xZJnMgBKZH')
        .then((result) => {
          setOpen(true);
          form.current.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  };

  const handleEmailChange = (e) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const emailInput = e.target.value.trim();

    // Validar el correo electrónico con regex
    setIsValid(emailRegex.test(emailInput));

    // Mostrar mensaje de error si el correo electrónico no es válido
    if (!emailRegex.test(emailInput)) {
      setEmailError('Por favor, ingresa un correo electrónico válido.');
    } else {
      setEmailError('');
    }
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contacto</Title>
        <Desc>Escribinos por cualquier sugerencia o proyecto que tengas para nosotros!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email 🚀</ContactTitle>
          <ContactInput
            placeholder="Tu Email"
            name="from_email"
            onChange={handleEmailChange}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
          <ContactInput
            placeholder="Nombre"
            name="from_name"
          />
          <ContactInput
            placeholder="Asunto"
            name="subject"
          />
          <ContactInputMessage
            placeholder="Mensaje"
            rows="4"
            name="message"
          />
          <ContactButton type="submit" value="Enviar" disabled={!isValid} />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;