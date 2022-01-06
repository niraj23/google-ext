import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useVerify } from '../hooks';
import '../assets/home.css';


const Home = () => {
  const { loggedIn, navigate } = useVerify();

  useEffect(() => {
    if (loggedIn) navigate('app');
  }, []);

  return (
    <div className="banner-area">
        <div class="banner-text">
            <h1>Budget Tracker</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic autem harum eaque aut deserunt pariatur eum
                ea, sequi minus nam veniam atque et quisquam molestiae aperiam! Iusto, ipsum.</p>
            <a href="/signup">Signup</a>
            <a href="/login">Login</a>
        </div>
    </div>

  );
};

Home.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default Home;
