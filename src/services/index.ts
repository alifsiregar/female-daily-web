import axios from 'axios';

export const getLandingPageData = async () : Promise<string> => {
  try {
    const json = await axios({
      url: 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return json.data;
  } catch (e) {
    return e;
  }
};
