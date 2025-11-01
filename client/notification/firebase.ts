import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBCT9T1cYnPuZXsnwyLVSjW_7W_OB_ngn0",
    authDomain: "phongtro-d674b.firebaseapp.com",
    projectId: "phongtro-d674b",
    storageBucket: "phongtro-d674b.firebasestorage.app",
    messagingSenderId: "370635142111",
    appId: "1:370635142111:web:8a3aa9ff7e77b0aa6b0a6a",
    measurementId: "G-0M7N34PPLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);

export const generateToken = async () => {
    try {
        if (Notification.permission === 'default') {
            const permission = await Notification.requestPermission();
            if (permission !== 'granted') return null;
        }

        if (Notification.permission === 'granted') {
            const token = await getToken(messaging, {
                vapidKey: import.meta.env.VITE_VAPID_PUBLIC_KEY,
            });
            return token || null;
        }

        return null;
    } catch (err) {
        console.error('❌ Error getting FCM token:', err);
        return null;
    }
};