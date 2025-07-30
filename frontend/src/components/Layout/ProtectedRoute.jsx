import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Box, Spinner, Center } from '@chakra-ui/react'

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="brand.500" />
      </Center>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Box>{children}</Box>
}

export default ProtectedRoute