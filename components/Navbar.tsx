import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({}){

  const user = false;
  const username = false;

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
              <Image width={200} height={200} alt={'user icon'} src={user?.photoURL}></Image>
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