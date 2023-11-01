const crypto = require('crypto');

function cal(text, key) {
  const hmac = crypto.createHmac('sha512', key);
  // Update the hash object with the text.
  hmac.update(text);
  // Get the hash digest as a hexadecimal string.
  const hashDigest = hmac.digest('hex');
  // Return the hash digest.
  return hashDigest;
}
const key = 'MpCDKuuljwX00uf';
//confirm payment
const text = '\'1698401287691XKD3H\'\'true\'\'5500.00\'\'3rrpC2BUBojK8\'';

//checking the Payment confirmation response
// const text = '\'0\'\'SUCCESS\'\'Booking Confirmed\'\'1697539692088NYZ5T\'\'3rrpC2BUBojK8\'';

//checking the wallet
// const text = '\'0\'\'SUCCESS\'\'Balance fetched Successfully\'\'97525.00\'';
const result = cal(text, key);

console.log('Hash:', result);
