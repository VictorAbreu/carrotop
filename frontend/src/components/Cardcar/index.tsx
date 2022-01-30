import './styles.css';
import { ReactComponent as CarImageRed } from 'assets/images/car-card 1.svg';
import ButtonBuy from 'components/ButtonIcon';

const Cardcar = () => {
  return (
    <>
      <div className="card-compra-container">
        <div className="image-container">
          <CarImageRed />
        </div>
        <div className="content-container">
          <h2>Audi Supra TT</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <ButtonBuy />
      </div>
    </>
  );
};
export default Cardcar;
