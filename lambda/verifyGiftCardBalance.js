const axios = require('axios');

exports.handler = async (event) => {

    const apiKey = process.env.ZENOTI_API_KEY;
    const zenotiUrl = process.env.ZENOTI_API_URL;
    const card_number = event.queryStringParameters.giftcard_number;
    
    const verifyGiftCardCode = async () => {
      try {
        return await axios.get(`${zenotiUrl}/v1/giftcards/${card_number}/balance`, {
          headers: {
            Authorization: apiKey
          }
        })
      } catch (error) {
        console.error(error)
      }
    }

    verifyGiftCardCode();
};