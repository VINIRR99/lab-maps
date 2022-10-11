export const createScriptTag = (callback: () => void) => {
    const body = document.body as HTMLBodyElement;
    const indexScript = document.getElementsByTagName('script')[0];
    const mapScript = document.createElement('script');
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`;
    body.insertBefore(mapScript, indexScript);

    mapScript.onload = () => callback();
};