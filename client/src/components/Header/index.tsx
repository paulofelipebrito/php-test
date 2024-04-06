import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <div className='flex w-full items-center justify-between max-w-screen-sm md:max-w-screen-md xl:max-w-screen-2xl'>
      <div className='w-20'>
        <Link
          key={"/home"}
          to={"/home"}
        >
          <img src={Logo} alt="upd8" />
        </Link>
      </div>
      <nav>
        <ul className='p-0 flex items-center justify-center gap-8'>
          <Link
            key={"/clients"}
            to={"/clients"}
            className={`${
              pathname === "/clients"
                ? 'text-darkerPrimary'
                : 'text-[#707070]'
            } text-sm font-medium mr-2 md:mr-2`}
          >
            Clientes
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header