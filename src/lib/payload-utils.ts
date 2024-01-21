import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  const token = cookies.get('payload-token')?.value

  try {
    const meRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );
  
    if (!meRes.ok) {
      throw new Error(`Failed to fetch user data: ${meRes.status} - ${meRes.statusText}`);
    }
  
    const { user } = await meRes.json();
    return { user };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return { user: null }; // or handle the error in a way that makes sense for your application
  }
}