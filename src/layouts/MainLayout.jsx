import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>I&apos;m the footer</footer>
    </>
  );
};

export default MainLayout;
