import { DocumentReference, collection, doc, getDoc, getFirestore } from "firebase/firestore";
import "../firebase"; // Initialize FirebaseApp

export type Voting = {
  id: string;
  title: string;
  description: string;
  items: string[];
  author: {
    id: string;
    name: string;
    screenName: string;
    avatar: string;
  };
};

export async function getVoting(id: string): Promise<Voting | undefined> {
  if (!id) return undefined;
  const db = getFirestore();
  const voting = await getDoc(doc(collection(db, "/voting"), id));
  if (voting) {
    const votingData = voting.data() as Voting;
    //console.log((await getDoc(DocumentReference(votingData.author))).data());
    return {
      ...votingData,
    };
  } else {
    return undefined;
  }
}
