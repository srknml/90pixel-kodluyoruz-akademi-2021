import { db } from "../database/firebaseConfig";

export const dbMethods = {
    // firebase store helper methods go here...

    create: (profile) => {
        console.log(profile);
        db.collection("react")
            .doc(profile.id)
            .set(profile)
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    },

    get: async () => {
        const snapshot = await db.collection("react").get();
        return snapshot.docs.map((doc) => doc.data())
        
    },
    remove: (uid, todoID) => {
        db.collection(uid)
            .doc(todoID)
            .delete()
            .then(() => {
                console.log("Document successfully deleted!");
            })
            .catch((error) => {
                console.error("Error removing document: ", error);
            });
    },
    //     update: (uid, todo) => {
    //         db.collection(uid).doc(todo.id).update({
    //             finished: todo.finished,
    //         });
    //     },
};
