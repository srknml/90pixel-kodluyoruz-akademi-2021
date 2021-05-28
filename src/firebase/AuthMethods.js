import { auth } from "./FirebaseConfig";
export const authMethods = {
    sign: () => {
        let provider = new auth.GithubAuthProvider();
        provider.addScope("user:follow");
        provider.addScope("user:email");
        auth().signInWithRedirect(provider);
    },
    getUserInfo: async () => {
        try {
            let res = await auth().getRedirectResult();
            if (res.credential) {
                let user = res.additionalUserInfo.profile;
                let token = await res.credential.accessToken;

                return { data: user, token };
            }
        } catch (err) {
            console.log(err);
        }
    },

    signPopup: () => {
        let provider = new auth.GithubAuthProvider();
        provider.addScope("user:follow");
        provider.addScope("user:email");
        const result = auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                var token = credential.accessToken;
                // The signed-in user info.
                return { user: result.additionalUserInfo.profile, token };
                // ...
            })
            .catch((err) => {
                console.log("Error: " , err)
            });
        return result;
    },
};
