import Forecast from './WeatherForecast.jsx';

const App = () => {
  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'Sun Icon',
      conditions: 'Sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'Moon Icon',
      conditions: 'Clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'Clouds with Lightning Icon',
      conditions: 'Stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'Sun Overcast by Clouds Icon',
      conditions: 'Overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'Moon Overcast by Clouds Icon',
      conditions: 'Cloudy',
      time: 'Night',
    },
  ];
return (
<>
  <h1>Local Weather</h1>
  <section>
    {weatherForecasts.map((forecast) => (
    <Forecast key={forecast.id} day={forecast.day} conditions={forecast.conditions} time={forecast.time} img={forecast.img} imgAlt={forecast.imgAlt}/>
    ))};
  </section>
  </>)
};

export default App