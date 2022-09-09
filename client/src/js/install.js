const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (e) => {
    window.deferredPrompt = e;

    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (e) => {
    window.deferredPrompt = null;
});