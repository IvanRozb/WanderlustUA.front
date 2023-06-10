export default function decryptToken(token:string)  {
    try {
        return parseJwt(token);
    } catch (error) {
        throw new Error(`Error decoding token: ${token}`);
    }
};

function parseJwt(token:string) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}