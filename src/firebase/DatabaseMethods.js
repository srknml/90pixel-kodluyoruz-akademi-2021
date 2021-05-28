import { db } from "./FirebaseConfig";

export const dbMethods = {
    // firebase store helper methods go here...

    create: (profile) => {
        if (Object.keys(profile).length !== 0) {
            db.collection("react")
                .doc(profile.id.toString())
                .set(profile)
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        }
    },

    get: async () => {
        const snapshot = await db.collection("react").get();
        return snapshot.docs.map((doc) => doc.data());
    },

    getSingleProfile: async (id) => {
        const res = await db.collection("react").doc(id).get();
        const doc = res.data();
        if (doc) {
            return doc;
        } else {
            console.log("No such document!");
        }
    },
};
