import React from 'react';

//Mui-Components
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

//Auth
import UseApis from '../auth';

export default function ShopByConcern() {
  const { GetShopByConcern } = UseApis();
  const [tab, setTab] = React.useState(0);
  const [hair, setHair] = React.useState([]);
  const [face, setFace] = React.useState([]);
  const [body, setbody] = React.useState([]);

  React.useEffect(() => {
    GetShopByConcerns();
  }, []);

  const GetShopByConcerns = async () => {
    try {
      let data = await GetShopByConcern();
      console.log({ data });
      if (data?.success === true) {
        setHair(data?.shop_by_concern?.[0]);
        setFace(data?.shop_by_concern?.[1]);
        setbody(data?.shop_by_concern?.[2]);
      }
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <div>
      <div style={{ marginTop: '25px', textAlign: 'center' }}>
        <Typography variant='h5' component='h2' style={{ fontSize: '32px' }}>
          Shop By Concern
        </Typography>
        <Typography color='textSecondary'>
          We provide Problem faced<br></br>solution
        </Typography>
      </div>
      <div
        style={{
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-bewteen',
            width: '50%',
            height: '40px',
            background: '#F4F4F4',
            borderRadius: '40px',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '40%',
              textAlign: 'center',
              paddingTop: '12px',
              borderRadius: '40px',
              background: tab === 0 ? '#01572E' : '',
              color: tab === 0 ? '#FFFFFF' : '#000',
            }}
            onClick={() => setTab(0)}
          >
            Hair
          </div>
          <div
            style={{
              width: '40%',
              textAlign: 'center',
              paddingTop: '12px',
              borderRadius: '40px',
              background: tab === 1 ? '#01572E' : '',
              color: tab === 1 ? '#FFFFFF' : '#000',
            }}
            onClick={() => setTab(1)}
          >
            Face
          </div>
          <div
            style={{
              width: '40%',
              textAlign: 'center',
              paddingTop: '12px',
              borderRadius: '40px',
              background: tab === 2 ? '#01572E' : '',
              color: tab === 2 ? '#FFFFFF' : '#000',
            }}
            onClick={() => setTab(2)}
          >
            Body
          </div>
        </div>
      </div>

      <div style={{ marginTop: '25px' }}>
        <Stack
          direction='row'
          spacing={10}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {tab === 0 &&
            hair?.concerns?.map((data, i) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    alt={data?.concern_name}
                    src={data?.concern_image_url}
                    sx={{ width: 156, height: 156 }}
                  />
                  <Typography style={{ marginTop: '6px' }}>
                    {data?.concern_name}
                  </Typography>
                </div>
              );
            })}
          {tab === 1 &&
            face?.concerns?.map((data, i) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    alt={data?.concern_name}
                    src={data?.concern_image_url}
                    sx={{ width: 156, height: 156 }}
                  />
                  <Typography style={{ marginTop: '6px' }}>
                    {data?.concern_name}
                  </Typography>
                </div>
              );
            })}
          {tab === 2 &&
            body?.concerns?.map((data, i) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    alt={data?.concern_name}
                    src={data?.concern_image_url}
                    sx={{ width: 156, height: 156 }}
                  />
                  <Typography style={{ marginTop: '6px' }}>
                    {data?.concern_name}
                  </Typography>
                </div>
              );
            })}
        </Stack>
      </div>
    </div>
  );
}
