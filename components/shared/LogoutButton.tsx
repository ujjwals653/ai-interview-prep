'use client'

import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/actions/auth.action'
import { auth } from '@/firebase/client'
import { signOut as firebaseSignOut } from 'firebase/auth'
import { redirect } from 'next/navigation'

export const LogoutButton = () => {
  const handleSignOut = async () => {
    try {
      await signOut()
      await firebaseSignOut(auth)
      redirect('/sign-in')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <Button
      onClick={handleSignOut}
      className='btn-primary max-sm:w-full mr-1'>
      Logout
    </Button>
  )
}
