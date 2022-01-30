import './styles.css';
import ButtonSearch from 'components/ButtonSearch';

const SearchCar = () => {
  return (
    <>
      <div className="card-search-container">
        <div className="search-input-container">
          <input
            className="search-input"
            type="text"
            placeholder="Digite sua busca"
          />
        </div>

        <ButtonSearch />
      </div>
    </>
  );
};
export default SearchCar;
