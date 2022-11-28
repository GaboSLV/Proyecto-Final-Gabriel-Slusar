import { initializeApp } from "firebase/app";

import {getFirestore, query, getDocs,getDoc, doc, collection, where, addDoc, Timestamp} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJlMYaNFG5K352vKcVjyWcKgq6xK3gXVg",
  authDomain: "vibes-5b685.firebaseapp.com",
  projectId: "vibes-5b685",
  storageBucket: "vibes-5b685.appspot.com",
  messagingSenderId: "143919958660",
  appId: "1:143919958660:web:d07fe9945169e870bb50d1",
  measurementId: "G-4V6SVGGK95"
};

// Initialize Firebase

const appFirebase = initializeApp(firebaseConfig);

const appFirestore = getFirestore(appFirebase);

export async function getProducts() {
    const productsCollection = collection(appFirestore, "products");
    const productsSnapshot = await getDocs(productsCollection);
  
    let answer = productsSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
  
    return answer;
  }

export async function getProductsByCategory(categoryId) {
    const productCollection = collection(appFirestore, "products");
    const q = query(productCollection, where("category", "==", categoryId));
    const productsSnapshot = await getDocs(q);

    let answer = productsSnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
    });

    return answer;
}

export async function getProductById(itemId) {
    const docref = doc(appFirestore, "products", itemId);
    const docSnapshot = await getDoc(docref);
    return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
    };
}

export async function createBuyOrder(orderData) {
  const orderCollectionRef = collection(appFirestore, "orders")
  const dateTimestamp = Timestamp.now();

  const dateToOrder = {
    ...orderData, 
    date: dateTimestamp,
  };
  const createOrder = await addDoc(orderCollectionRef, dateToOrder);
  return createOrder;
  
}

