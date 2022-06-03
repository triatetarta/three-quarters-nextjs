import Logo from "../../public/assets/logo.svg";
import { Button } from "../Button";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setMenuToggle } from "./LayoutSlice/reducer";
import Menu from "./Menu";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { logoIcon } from "../../seeders/data";

const twConfig = resolveConfig(tailwindConfig);

const Header = () => {
  const { menuOpen } = useSelector((state) => state.layout);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <nav className='container py-6 relative'>
      <div className='flex items-center justify-between'>
        <div
          onClick={() => router.push("/")}
          className='w-28 relative z-40 cursor-pointer'
        >
          <span className='object-contain'>{logoIcon()}</span>
        </div>

        <motion.div
          className='relative'
          layout
          onClick={() => dispatch(setMenuToggle())}
        >
          <Button
            stylingClasses={"px-3 py-3"}
            content={
              !menuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke={twConfig.theme.colors["primary-menu"]}
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 8h16M4 16h16'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke={twConfig.theme.colors["primary-menu"]}
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )
            }
          />
        </motion.div>
      </div>

      {menuOpen && <Menu />}
    </nav>
  );
};

export default Header;
