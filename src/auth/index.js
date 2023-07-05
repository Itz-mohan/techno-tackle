import md5 from 'md5';

var URL = process.env.REACT_APP_STAGGING_URL;

export default function UseApis() {
  async function GetBanner() {
    try {
      let obj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // auth_token: md5(
          //   process.env.REACT_APP_SALT + process.env.REACT_APP_BANNER_AUTH_TOKEN
          // ),
          auth_token: process.env.REACT_APP_BANNER_AUTH_TOKEN,
          banner_type: 'WEB',
        }),
      };

      let data = await (await fetch(`${URL}/banners`, obj)).json();

      return data;
    } catch (err) {
      console.log({ err });
    }
  }

  async function GetBestSeller() {
    try {
      let obj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          auth_token: process.env.REACT_APP_BEST_SELLER_AUTH_TOKEN,
          user_id: '1',
        }),
      };

      let res = await (await fetch(`${URL}/best_seller`, obj)).json();

      return res;
    } catch (err) {
      console.log({ err });
    }
  }

  async function GetShopByConcern() {
    try {
      let obj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          auth_token: process.env.REACT_APP_CONCERN_AUTH_TOKEN,
        }),
      };

      let res = await (await fetch(`${URL}/shop_by_concern`, obj)).json();

      return res;
    } catch (err) {
      console.log({ err });
    }
  }

  return { GetBanner, GetBestSeller, GetShopByConcern };
}
