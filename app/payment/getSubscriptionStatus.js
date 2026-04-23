import { auth, db } from "../../auth/firebase";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";

export const getSubscriptionStatus = async () => {
  const user = auth.currentUser;

  if (!user) return null;

  try {
    const collectionRef = collection(
      db,
      "customers",
      user.uid,
      "subscriptions",
    );

    const querySnapshot = await getDocs(collectionRef);

    if (querySnapshot.empty) {
      return null;
    }

    const subscription = querySnapshot.docs[0].data();

    const priceId = subscription.items[0].price.id;

    if (priceId === "price_1TP394Atj0deLIrPrHYUYHwZ") {
      return "premium";
    }

    if (priceId === "price_1TP39sAtj0deLIrPF4FIyyov") {
      return "vip";
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
