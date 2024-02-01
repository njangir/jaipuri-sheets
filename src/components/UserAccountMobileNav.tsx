import Link from 'next/link'
import { getServerSideUser } from '../lib/payload-utils'
import { cookies } from 'next/headers'
import { useAuth } from '../hooks/use-auth'

const UserAccountMobileNav = async () => {

  const nextCookies = cookies()
  const { user } = await getServerSideUser(nextCookies)
  const {signOut} = useAuth()

  return (
    <div className='space-y-6 border-t border-gray-200 px-4 py-6'>
    {user ? null : (
        <div className='flow-root'>
        <Link
            onClick={() => closeOnCurrent('/sign-in')}
            href='/sign-in'
            className='-m-2 block p-2 font-medium text-gray-900'>
            Sign in
        </Link>
        </div>
    )}
    {user ? null : (
        <div className='flow-root'>
        <Link
            onClick={() => closeOnCurrent('/sign-up')}
            href='/sign-up'
            className='-m-2 block p-2 font-medium text-gray-900'>
            Sign up
        </Link>
        </div>              
    )}
        <div className='flow-root'>
        <Link
            onClick={() => closeOnCurrent('/cart')}
            href='/cart'
            className='-m-2 block p-2 font-medium text-gray-900'>
            Cart
        </Link>
        </div>
        
    {user ? (
        <div className='flow-root'>
        <div
            onClick={signOut}
            className='-m-2 block p-2 font-medium cursor-pointer'>
            Sign Out
        </div>
        </div>):null}
    </div>          
  )
}

export default UserAccountMobileNav
