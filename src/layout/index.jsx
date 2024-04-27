import React from 'react'
import MainLayout from './MainLayout'
import MinimalLayout from './MinimalLayout'
import isAuthenticated from 'utils/auth'

const RednderLayout = () => {
    const reder_layout = isAuthenticated() ? <MainLayout /> :<MinimalLayout />
  return reder_layout
}

export default RednderLayout
