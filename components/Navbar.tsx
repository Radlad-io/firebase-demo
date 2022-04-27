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
          <Link href={"/"} passHref>
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {/* Renders if user is signed in and has username */}
        {username && (
          <>
          <li className="push-left">
            <Link href={`/admin`} passHref>
              <button className="btn-blue">Write Post</button>
            </Link>
          </li>
          <li>
            <Link href={`/${username}`} passHref>
              <img src={user?.photoURL}></img>
            </Link>
          </li>
          </>
        )}
        {/* Renders if user is not signed or has not created a username */}
        {!username && (
          <>
            <li>
              <Link href={`/enter`} passHref>
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}