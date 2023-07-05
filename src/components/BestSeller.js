import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

//Mui-Components
import Slider from 'react-slick';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//Auth
import UseApis from '../auth';

//Custom CSS
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: '0px 10px', // Adjust the card spacing as desired
  },
  arrowContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0',
  },
  arrowButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  },
}));

export default function BestSeller() {
  const { GetBestSeller } = UseApis();
  const navigate = useNavigate();
  const classes = useStyles();
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    GetBestSellers();
  }, []);

  const GetBestSellers = async () => {
    try {
      let data = await GetBestSeller();

      if (data?.success === true) {
        setState(data?.best_sellers);
      }
    } catch (err) {
      console.log({ err });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleAdd = () => {
    navigate('/best-sellers');
  };

  return (
    <div>
      <div
        style={{
          marginTop: '25px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h5' component='h2' style={{ fontSize: '32px' }}>
          Best Seller
        </Typography>
        <Button
          style={{
            width: '200px',
            height: '63.004844665527344px',
            borderRadius: '50px',
            background: '#01572E',
          }}
        >
          <Typography style={{ color: '#FFFFFF' }}>VIEW ALL</Typography>
        </Button>
      </div>
      <div className={classes.arrowContainer}>
        <IconButton className={classes.arrowButton} onClick={goToPrevSlide}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton className={classes.arrowButton} onClick={goToNextSlide}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {state?.map((data, i) => {
          return (
            <Card key={i} className={classes.card}>
              <CardMedia
                sx={{ height: 270 }}
                image={data?.product_details?.featured_image}
                title={data?.product_id}
              />
              <CardContent>
                <Typography color='textSecondary'>
                  {data?.product_disclaimers}
                </Typography>
                <div
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant='h5'
                    component='h2'
                    style={{ fontSize: '18px', paddingRight: '3px' }}
                  >
                    Category:
                  </Typography>
                  <Typography
                    color='textSecondary'
                    style={{ fontSize: '18px', paddingRight: '3px' }}
                  >
                    {data?.category_name}
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant='h5'
                    component='h2'
                    style={{
                      fontSize: '16px',
                      color: '#01572E',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {data?.category_desc}
                  </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ display: 'flex' }}>
                    <img src='/logo/ant-design_star-filled.svg' />
                    <Typography color='textSecondary'>
                      {data?.avg_rating}
                    </Typography>
                  </div>
                  <span style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    |
                  </span>
                  <div style={{ display: 'flex' }}>
                    <img src='/logo/Vector1.svg' />
                    <Typography color='textSecondary'>
                      {`${data?.product_details?.review_count} Reviews`}
                    </Typography>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    variant='h5'
                    component='h2'
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginRight: '10px',
                    }}
                  >
                    {`₹${data?.sales_price}`}
                  </Typography>
                  <Typography
                    color='textSecondary'
                    style={{
                      textDecoration: 'line-through',
                    }}
                  >
                    {`₹${data?.regular_price}`}
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  style={{ border: '1px solid #BA2026', color: '#BA2026' }}
                  onClick={handleAdd}
                >
                  ADD
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
}
