import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0PaDUpL9PZVYFJ_A65eXt3zerpXk9gIY",
  authDomain: "clone-spotify-f92c1.firebaseapp.com",
  projectId: "clone-spotify-f92c1",
  storageBucket: "clone-spotify-f92c1.appspot.com",
  messagingSenderId: "93520593018",
  appId: "1:93520593018:web:1ead7d3458bf17dadbfbc3",
  measurementId: "G-WQNX70EKBG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
