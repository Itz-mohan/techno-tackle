import React from 'react';

//Mui-components
import {
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div
            style={{
              marginTop: '21px',
            }}
          >
            <img src='/logo/logo.png' alt='image' />
          </div>
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder='Search product'
            InputProps={{
              sx: {
                width: 565,
                height: 44,
                top: 21,
                borderRadius: 40,
              },
              endAdornment: (
                <div
                  style={{
                    background: 'red',
                    marginRight: -13,
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                  }}
                >
                  <IconButton>
                    <SearchIcon style={{ color: 'white' }} />
                  </IconButton>
                </div>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            style={{ marginTop: '25px', fontSize: '14px', textAlign: 'center' }}
          >
            <span>REGISTER</span>
            <span>/</span>
            <span>LOGIN</span>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <div>
              <img src='/logo/Vector.svg' />
              <img src='/logo/Group1361.svg' />
            </div>
            <div>
              <img src='/logo/Group1363.svg' />
              <img src='/logo/Group1362.svg' />
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
