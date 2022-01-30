import Cardcar from 'components/Cardcar';
import SearchCar from 'components/SearchCar';

const Catalogo = () => {
  return (
    <>
      <div className="container my-4">
        <SearchCar />

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
          <div className="col-md-6 col-lg-4">
            <Cardcar />
          </div>
        </div>
      </div>
    </>
  );
};
export default Catalogo;
