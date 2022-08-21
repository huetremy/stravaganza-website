import type { GetServerSideProps, NextPage } from 'next';
import { getToken } from 'next-auth/jwt';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const token = await getToken({ req });

    const api_uri = `${process.env.PORTAIL_URI}api/v1/user/assos`;
    var headers = new Headers({
        "Authorization": `Bearer ${token?.accessToken}`,
    });
    const res = await fetch(api_uri, { headers });
    const data = await res.json();

    return { props: { data } };
}

const Profile: NextPage<any> = ({ data }) => {
    return (
        <>
            <p>Your profile:</p>
            {JSON.stringify(data)}
        </>
    )
}

export default Profile;
