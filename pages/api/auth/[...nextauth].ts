import NextAuth from 'next-auth';

export default NextAuth({
    providers: [
        {
            id: 'portail',
            name: 'Portail des assos',
            type: 'oauth',
            authorization: {
                url: process.env.PORTAIL_AUTHORIZATION_URI,
                params: { scope: "user-get-info user-get-assos" },
            },
            token: process.env.PORTAIL_TOKEN_URI,
            userinfo: process.env.PORTAIL_USER_INFO_URI,
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name,
                    email: profile.email,
                    firstname: profile.firstname
                };
            },
            clientId: process.env.PORTAIL_CLIENT_ID,
            clientSecret: process.env.PORTAIL_CLIENT_SECRET,
        },
    ],
});
