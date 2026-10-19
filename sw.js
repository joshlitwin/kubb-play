// Kubb's service worker: it only shows notifications for online play (src/game/push.ts turns them on; the server's
// side is supabase/functions/notify). It caches nothing and never answers the page's requests, so the game always
// loads fresh from the web as before.

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

// A notification arrives: show it. (An iPhone stops sending them to a page that doesn't show what it's sent, so it's
// always shown; the server already skips a phone that has the match on screen.)
self.addEventListener('push', (e) =>
{
    let d = {};
    try { d = e.data ? e.data.json() : {}; }
    catch { /* shown with the plain words below */ }
    e.waitUntil(self.registration.showNotification(d.title || 'Kubb', {
        body: d.body || '',
        tag: d.tag, // a newer one for the same match replaces the last
        icon: 'icons/icon-192.png',
        data: { url: d.url || './', match: d.match || null },
    }));
});

// Tapped: back to Kubb, at the match (the link a friend's invite uses).
self.addEventListener('notificationclick', (e) =>
{
    e.notification.close();
    const url = new URL(e.notification.data && e.notification.data.url || './', self.registration.scope).href;
    e.waitUntil((async () =>
    {
        const open = (await self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
            .find((c) => new URL(c.url).origin === self.location.origin);
        if (!open) return self.clients.openWindow(url);
        await open.focus();
        open.postMessage({ kind: 'open', url, match: e.notification.data && e.notification.data.match || null });
    })());
});
