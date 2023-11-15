import { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1rWM081x8yQL5HcZqIonqLzpzhStPdg8",
    authDomain: "chat-bdf85.firebaseapp.com",
    projectId: "chat-bdf85",
    storageBucket: "chat-bdf85.appspot.com",
    messagingSenderId: "926033221886",
    appId: "1:926033221886:web:e95e3c6a97d3f369042daf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

export const Chat = () => {

    const [user, setUser] = useState();

    const SignIn = () => {
        return (
            <form onSubmit={e => {
                e.preventDefault();
                setUser(document.getElementById("name").value)
            }}>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <input type="submit" value="Submit" />
            </form>
        )
    }

    const ChatRoom = () => {
        return (
            <h1>You are signed in!</h1>
        )
    }

    return (
        <div>
            <header>
                <h1>Chat with me!</h1>
            </header>
            {user ? <ChatRoom /> : <SignIn />}
        </div>
    )
}