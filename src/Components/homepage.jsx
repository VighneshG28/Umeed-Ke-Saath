import ngo1 from '../assets/ngo1.jpg';
import ngo2 from '../assets/ngo2.jpg';
import ngo3 from '../assets/ngo3.jpg';
import ngo4 from '../assets/ngo4.jpg';
import ngo5 from '../assets/ngo5.jpg';
import ngo6 from '../assets/ngo6.jpg';
import ngo7 from '../assets/ngo7.jpg';
import PageDetailsOne from './pageDetailsOne'
import PageDetailsTwo from './pageDetailsTwo'
import PageDetailsThree from './pageDetailsThree'
import Title from './title'
import Area from './area'
import './card.css'

const Homepage = () => {
  return (
    <div>
      <Title/>
      <div className="banner">
        <div className="slider" style={{ "--quantity": 7 }}>
          <div className="item" style={{ "--position": 1 }}>
            <img src={ngo1} alt="ngo1" />
          </div>
          <div className="item" style={{ "--position": 2 }}>
            <img src={ngo2} alt="ngo2" />
          </div>
          <div className="item" style={{ "--position": 3 }}>
            <img src={ngo3} alt="ngo3" />
          </div>
          <div className="item" style={{ "--position": 4 }}>
            <img src={ngo4} alt="ngo4" />
          </div>
          <div className="item" style={{ "--position": 5 }}>
            <img src={ngo5} alt="ngo5" />
          </div>
          <div className="item" style={{ "--position": 6 }}>
            <img src={ngo6} alt="ngo6" />
          </div>
          <div className="item" style={{ "--position": 7 }}>
            <img src={ngo7} alt="ngo7" />
          </div>
        </div>
        <div className="model"></div>
      </div>
      <PageDetailsOne/>
      <PageDetailsTwo/>
      <PageDetailsThree/>
      <Area/>
    </div>
  );
};

export default Homepage;

