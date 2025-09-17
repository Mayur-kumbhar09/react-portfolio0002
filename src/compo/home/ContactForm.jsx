// ContactForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Alert,
} from '@mui/material';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Message sent!');
    reset();
  };

  return (
     <Container maxWidth="xl">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          border: '1px solid #1a1a1aff',
          borderRadius: 2,
          boxShadow: 1,
          background:"#f2f2f2f2"
        }}
      >
        <Typography variant="h5" align="center" sx={{color:"#000000f2" }}>
          Contact Us
        </Typography>

        <TextField
          label="Name"
          {...register('name', { required: 'Name is required' })}
          error={!!errors.name}
          helperText={errors.name?.message}
          fullWidth
        />

        <TextField
          label="Email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />

        <TextField
          label="Message"
          multiline
          rows={4}
          {...register('message', { required: 'Message is required' })}
          error={!!errors.message}
          helperText={errors.message?.message}
          fullWidth
        />

        <Button
          variant="contained"
          type="submit"
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        {isSubmitSuccessful && (
          <Alert severity="success">Message sent successfully!</Alert>
        )}
      </Box>
    </Container>
  );
}

export default ContactForm;
