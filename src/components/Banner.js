import React from 'react';

//Mui-Components
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

//Auth
import UseApis from '../auth';

//Custom CSS
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: 'relative',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  dotContainer: {
    position: 'absolute',
    bottom: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    margin: '0 5px',
    cursor: 'pointer',
  },
  activeDot: {
    backgroundColor: 'red',
  },
}));

export default function Banner() {
  const { GetBanner } = UseApis();
  const classes = useStyles();
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    GetBanners();
  }, []);

  const GetBanners = async () => {
    try {
      let data = await GetBanner();

      if (data?.success === true) {
        setState(data?.banner_details);
      }
    } catch (err) {
      console.log({ err });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay interval in milliseconds (e.g., 3000ms = 3 seconds)
    appendDots: (dots) => (
      <div>
        <div
          className={`${classes.dotContainer} ${classes.dot} ${classes.activeDot}`}
        >
          {dots}
        </div>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {state.map((data, i) => {
        return (
          <Paper key={data?.id} className={classes.imageContainer}>
            <img src={data?.image_name} className={classes.image} />
          </Paper>
        );
      })}
    </Slider>
  );
}
