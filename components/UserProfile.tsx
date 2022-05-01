import Image from 'next/image'
// UI component for user profile
export default function UserProfile({user}) {
  return (
    <div className="box-center">
      <Image src={user.photoURL} width={150} height={150} alt={'user profile image'} className={"card-img-center"}/>
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>
        {user.displayName}
      </h1>
    </div>
  )
}
