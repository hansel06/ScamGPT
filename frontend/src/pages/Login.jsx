import React, { useEffect } from 'react'
import { Box, Center, useColorModeValue } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import LoginForm from '../components/Auth/LoginForm'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Login = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const bg = useColorModeValue('white', '#000000')

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <MotionBox
      minH="100vh"
      w="100vw"
      h="100vh"
      bg={bg}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      overflow="hidden"
    >
      <Center minH="100vh" w="100vw">
        <LoginForm />
      </Center>
    </MotionBox>
  )
}

export default Login