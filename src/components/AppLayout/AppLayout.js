import { Outlet, useNavigate } from 'react-router';
import UnicheckLogo from '../../assets/unicheck-logo.png';
import './AppLayout.css';

const AppLayout = () => {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate('/home');
  };

  return (
    <div class='app-container'>
      <nav class='app-navbar'>
        <img src={UnicheckLogo} class='app-nav-icon' onClick={gotoHome} />
        <h1>UNICHECK</h1>
      </nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
