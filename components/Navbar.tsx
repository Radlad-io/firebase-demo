import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Navbar({}){

  const { user, username } = useContext(UserContext)

  return(
    <nav className="navbar">
    <ul>
      <li>
        <Link href="/" passHref>
          <button className="btn-logo">FEED</button>
        </Link>
      </li>

      {/* user is signed-in and has username */}
      {user && (
        <>
          <li className="push-left">
            <Link href="/admin" passHref>
              <button className="btn-blue">Write Posts</button>
            </Link>
          </li>
          <li>
            <Link href={`/${username}`} passHref>
              <a>
                <Image src={user?.photoURL} width={50} height={50} alt={'user'}/>
              </a>
            </Link>
          </li>
        </>
      )}

      {/* user is not signed OR has not created username */}
      {!user && (
        <li>
          <Link href="/enter" passHref>
            <button className="btn-blue">Log in</button>
          </Link>
        </li>
      )}
    </ul>
  </nav>
  )
}