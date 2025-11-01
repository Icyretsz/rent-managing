self.addEventListener("push", (event) => {
    const data = event.data ? event.data.json() : {};
    self.registration.showNotification(data.title || "New Notification", {
        body: data.message || "You got a new message!",
        icon: "/icon.png",
    });
});