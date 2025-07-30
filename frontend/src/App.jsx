import React from 'react'
import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Layout/Header'
import Chat from './pages/Chat'
import ProtectedRoute from './components/Layout/ProtectedRoute'
import Sidebar from './components/Sidebar/Sidebar'
import Login from './pages/Login'
import { useAuth } from './hooks/useAuth'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const AppContent = () => {
  const { user, loading } = useAuth()
  const location = useLocation()
  const bg = useColorModeValue('white', '#000000')

  // Hide sidebar during loading or on login page
  const showSidebar = user && !loading && location.pathname !== '/login'

  return (
    <>
      <Header />
      <Flex bg={bg}>
        {showSidebar && <Sidebar />} {/* Sidebar only when logged in and not loading */}
        <Box 
          flex={1} 
          pt="70px" 
          pb="80px" 
          ml={showSidebar ? { base: 0, md: '320px' } : 0}
          bg={bg}
          minH="100vh"
        >
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Box>
      </Flex>
    </>
  )
}

const App = () => {
  const bg = useColorModeValue('white', '#000000')
  
  return (
    <MotionBox
      minH="100vh"
      bg={bg}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AppContent />
    </MotionBox>
  )
}

export default App
