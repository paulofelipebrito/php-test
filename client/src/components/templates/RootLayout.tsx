import { Outlet } from 'react-router-dom';
import Header from '../Header';

const RootLayout = () => {  
  return (
    <div className="flex h-screen w-screen bg-background items-center justify-center">
      <div
        className={`flex flex-col w-full h-full max-h-screen scrollbar-thin overflow-hidden scrollbar-thumb-[#D9D9D9] scrollbar-thumb-rounded-full bg-background  items-center p-8`}
        style={{background: 'rgb(244,247,254, 1)'}}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

