import { auth } from "./firebaseConfig";

export const authMethods = {
    sign: () => {
        let provider = new auth.GithubAuthProvider();
        auth().signInWithRedirect(provider);
    },
    getUserInfo: async () => {
        try {
            let res = await auth().getRedirectResult();
            if (res.credential) {
                let user = res.additionalUserInfo.profile;
                let token = res.credential.accessToken;

                return { data: user, token };
            }
        } catch (err) {
            console.log(err);
        }
    },
};
