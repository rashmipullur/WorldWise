import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./countryItem";
import Message from "./Message";
import PropTypes from "prop-types";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first country by clicking on a country on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};



export default CountryList;
