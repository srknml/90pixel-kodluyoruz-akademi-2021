import { db } from "./FirebaseConfig";

export const dbMethods = {
    create: (uid, userInfo) => {
        db.collection("users")
            .doc(uid)
            .set(userInfo)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    },

    get: async (doc) => {
        const snapshot = await db.collection(doc).get();
        return snapshot.docs.map((doc) => doc.data());
    },

    getSingleProfile: async (id) => {
        const res = db.collection("test").doc(id);
        const doc = await res.get();
        if (doc) {
            return doc.data();
        } else {
            console.log("No such document!");
        }
    },

    getProfileDBTest: async (uid) => {
        const res = db.collection("users").doc(uid);
        const doc = await res.get();
        if (doc) {
            return doc.data();
        } else {
            console.log("No such document!");
        }
    },
};
