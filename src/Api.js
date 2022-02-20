export const API_URL = 'https://wizard-world-api.herokuapp.com';

export function HOUSE_GET(body){
    return {
        url: API_URL + '/Houses',
        options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    };
}