import modernHome from '../../assets/imgs/01.svg'
import vintageStyle from '../../assets/imgs/02.svg'
import brand from '../../assets/imgs/03.svg'
import natureHome from '../../assets/imgs/04.svg'
import classicDesign from '../../assets/imgs/05.svg'

function Clients() {
  return (
    <section id="clients">
      <div className="inner flex wrap justify-between">
        <img src={modernHome} alt="Modern Home" />
        <img src={vintageStyle} alt="Vintage Style Interior" />
        <img src={brand} alt="Brand" />
        <img src={natureHome} alt="Nature Home" />
        <img src={classicDesign} alt="Classic Design Studio" />
      </div>
    </section>
  );
}

export default Clients;
