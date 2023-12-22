// import React from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'

export default function Login() {
  return (
    <FormControl>
        <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We all never share your email.</FormHelperText>
    </FormControl>
  )
}