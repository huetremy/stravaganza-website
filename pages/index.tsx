import type { NextPage } from 'next'

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <p>Hello {session.user?.name}</p>
        <Link href="/profile">
          <a>Your profile</a>
        </Link>
      </>
    );
  } else {
    return <p>Hello world</p>;
  }
}

export default Home;
