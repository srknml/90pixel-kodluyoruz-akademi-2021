import { auth } from "./FirebaseConfig";
import { dbMethods } from "./DatabaseMethods";
export const authMethods = {
    signPopup: async () => {
        try {
            let provider = new auth.GithubAuthProvider();
            provider.addScope("user:follow");
            provider.addScope("user:email");

            await auth().setPersistence(auth.Auth.Persistence.LOCAL);
            const result = await auth().signInWithPopup(provider);
            if (result.additionalUserInfo.isNewUser) {
                dbMethods.create(
                    result.user.uid,
                    result.additionalUserInfo.profile
                );
            }
        } catch (err) {
            console.log(err);
        }
    },

    isSignedUser: (setCurrentUser) => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                dbMethods.getProfileDBTest(user.uid).then((data) => {
                    setCurrentUser(data);
                });
            } else {
                console.log("no user");
            }
        });
    },

    signOut: () => {
        auth()
            .signOut()
            .then(
                () => {
                    console.log("Signed Out");
                },
                (error) => {
                    console.error("Sign Out Error", error);
                }
            );
    },
};
