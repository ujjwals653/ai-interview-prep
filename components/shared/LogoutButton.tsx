'use client'

import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/actions/auth.action'
import { auth } from '@/firebase/client'
import { signOut as firebaseSignOut } from 'firebase/auth'
import { redirect, usePathname } from 'next/navigation'

export const LogoutButton = () => {
  const pathname = usePathname()

  const handleSignOut = async () => {
    if (pathname !== '/') {
      redirect('/')
    } else {
      try {
        await signOut()
        await firebaseSignOut(auth)
        redirect('/sign-in')
      } catch (error) {
        console.error('Error signing out:', error)
      }
    }
  }

  return (
    <Button
      onClick={handleSignOut}
      className='btn-primary mr-1'>
      {pathname === '/' ? 'Logout' : 'Home'}
    </Button>
  )
}
