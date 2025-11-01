import {useEffect, useState} from "react";
import getErrorMsg from "./utils/getErrorMsg.ts";
import { generateToken, messaging } from "../notification/firebase.ts"
import {onMessage} from 'firebase/messaging'

function App() {
    const [status, setStatus] = useState("Idle");

    const subscribeToPush = async () => {
        try {
            setStatus("Requesting permission...");
            const token = await generateToken()

            setStatus(`Subscribed: ${token}`);

            // You can send this subscription to your backend here
            console.log("Push Subscription:", token);

        } catch (err : unknown) {
            console.error(err);
            setStatus("Error: " + getErrorMsg(err));
        }
    };

    useEffect(() => {
        onMessage(messaging, (payload) => {
            if (!payload.notification?.body) return
            new Notification(payload?.notification?.body)
        });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gray-100 text-center p-4">
            <h1 className="text-2xl font-bold mb-4 text-blue-600">Push Test</h1>

            <button
                onClick={subscribeToPush}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
            >
                Enable Push Notification
            </button>

            <p className="mt-6 text-gray-600">{status}</p>
        </div>
    );
}

export default App;
