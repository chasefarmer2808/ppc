export const URL = 'https://api.countapi.xyz';
export const API_KEY = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e'; // Not a secret
export const NAMESPACE = 'fearless';

export const hitCountApi = async () => {
    return await (await fetch(`${URL}/hit/${NAMESPACE}/${API_KEY}`)).json();
}