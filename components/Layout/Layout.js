import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <header className='w-full bg-clr-black text-clr-white z-40 relative'>
        <Header />
      </header>

      {children}

      <div className='w-full bg-clr-black text-clr-white z-40 relative'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
