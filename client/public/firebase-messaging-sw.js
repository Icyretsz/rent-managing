// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js');

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
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages - NO first parameter needed
messaging.onBackgroundMessage((payload) => {
    console.log('hello');
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification?.title || 'New Message';
    const notificationOptions = {
        body: payload.notification?.body || 'You have a new message.',
        icon: payload.notification?.icon || '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});