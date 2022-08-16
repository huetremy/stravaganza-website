import type { NextPage } from 'next'

import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return <p>Hello {session.user?.name}</p>
  } else {
    return <p>Hello world</p>;
  }
}

export default Home
