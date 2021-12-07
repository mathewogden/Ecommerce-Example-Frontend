import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './Home.css';

const HomePage = (props) => {
  return (
    <div>
      <Container className=' home-page d-flex justify-content-center align-items-center flex-column text-center'>
        <h1 className='h1 home-text col text-center'>Ecommerce Platform</h1>
        <p className='gallery-txt'>
          <i>
            Presenting a simple and fully functioning ecommerce web application.
          </i>
        </p>

        <Link to='/signup' className='button1'>
          Create Account
        </Link>
        <br />
        <Link className='button2' to='/gallery'>
          View Listings
        </Link>
      </Container>
    </div>
  );
};

export default HomePage;
