import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Auth0Provider} from "@auth0/auth0-react";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then(() => {
            console.log('Service worker has been registered!')
        })
        .catch(console.error);
}

createRoot(document.getElementById('root')!).render(
    <Auth0Provider
        domain="dev-66yg41ux7po256no.us.auth0.com"
        clientId="M0nrG3wRiho4uGh2yb5f76Cfx9Msdcpv"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <StrictMode>
            <App />
        </StrictMode>
    </Auth0Provider>,
)
