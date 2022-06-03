import { v4 as uuidv4 } from "uuid";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const twConfig = resolveConfig(tailwindConfig);

export const logoIcon = () => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 226 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.639893 7.6115H21.8079C23.7627 7.6115 25.6374 6.83496 27.0197 5.45271C28.4019 4.07045 29.1785 2.19571 29.1785 0.240906H8.01113C6.05627 0.240906 4.18146 1.01743 2.7991 2.39966C1.41674 3.7819 0.640061 5.65663 0.639893 7.6115V7.6115Z'
        fill={twConfig.theme.colors["primary-menu"]}
      />
      <path
        d='M65.9284 16.5034H48.3354C48.3354 17.4678 48.5252 18.4228 48.8942 19.3138C49.2632 20.2048 49.8041 21.0144 50.486 21.6963C51.1679 22.3783 51.9774 22.9192 52.8684 23.2883C53.7594 23.6574 54.7143 23.8473 55.6787 23.8473H65.9284V40.8037C68.2283 40.8037 70.4341 39.8901 72.0603 38.2638C73.6866 36.6375 74.6003 34.4318 74.6003 32.1319V0.240906C72.3004 0.240906 70.0946 1.15455 68.4684 2.78084C66.8421 4.40713 65.9284 6.61285 65.9284 8.91277V16.5034Z'
        fill={twConfig.theme.colors["primary-menu"]}
      />
      <path
        d='M110.212 17.5306H109.329V6.86358H109.348L109.329 6.83432V0.240906C107.029 0.240906 104.823 1.15455 103.197 2.78084C101.571 4.40713 100.657 6.61285 100.657 8.91277V40.8037C102.957 40.8037 105.163 39.8901 106.789 38.2638C108.415 36.6375 109.329 34.4318 109.329 32.1319V21.8528L115.089 32.0873C116.578 34.732 118.743 36.9331 121.363 38.4648C123.983 39.9966 126.964 40.8038 129.998 40.8037V40.8037L118.805 22.3514C117.906 20.8792 116.643 19.6626 115.138 18.8185C113.634 17.9743 111.938 17.5308 110.212 17.5306V17.5306Z'
        fill={twConfig.theme.colors["primary-menu"]}
      />
      <path
        d='M152.064 40.8037H168.576C170.531 40.8037 172.405 40.0271 173.788 38.6447C175.17 37.2624 175.947 35.3875 175.947 33.4325H160.736V7.55491H175.947C175.947 5.61511 175.176 3.75477 173.805 2.38313C172.433 1.01149 170.573 0.240906 168.633 0.240906H152.064V40.8037Z'
        fill={twConfig.theme.colors["primary-menu"]}
      />
      <path
        d='M210.149 7.55552H225.36C225.36 5.61572 224.59 3.75538 223.218 2.38374C221.846 1.0121 219.986 0.241516 218.046 0.241516H201.477V15.896H201.809C202.904 15.896 203.989 15.6803 205.001 15.2612C206.013 14.8421 206.932 14.2278 207.706 13.4533C208.481 12.6789 209.095 11.7595 209.514 10.7477C209.933 9.73584 210.149 8.65136 210.149 7.55616V7.55552Z'
        fill={twConfig.theme.colors["primary-menu"]}
      />
      <path
        d='M225.36 33.4337H210.149V31.9372C210.149 30.7984 209.925 29.6707 209.489 28.6185C209.053 27.5663 208.414 26.6103 207.609 25.8051C206.804 24.9998 205.848 24.3611 204.795 23.9253C203.743 23.4895 202.615 23.2653 201.477 23.2654V40.8037H217.99C219.945 40.8037 221.82 40.0272 223.202 38.6451C224.584 37.263 225.36 35.3884 225.36 33.4337V33.4337Z'
        fill={twConfig.theme.colors["primary-menu"]}
      />
      <path
        d='M188.711 15.8954C188.712 17.85 189.488 19.7245 190.87 21.1066C192.252 22.4887 194.127 23.2652 196.081 23.2654H201.477V15.8954H188.711Z'
        fill={twConfig.theme.colors["primary-menu"]}
      />
    </svg>
  );
};

export const codeIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      fill='none'
      viewBox='0 0 24 24'
      stroke={twConfig.theme.colors["primary-menu"]}
      strokeWidth='2'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      />
    </svg>
  );
};

export const skillsIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      fill='none'
      viewBox='0 0 24 24'
      stroke={twConfig.theme.colors["primary-menu"]}
      strokeWidth='2'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
      />
    </svg>
  );
};

export const contactIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      fill='none'
      viewBox='0 0 24 24'
      stroke={twConfig.theme.colors["primary-menu"]}
      strokeWidth='2'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      />
    </svg>
  );
};

export const aboutIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
      fill='none'
      viewBox='0 0 24 24'
      stroke={twConfig.theme.colors["primary-menu"]}
      stroke-width='1'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
      />
    </svg>
  );
};

export const menuData = [
  {
    id: uuidv4(),
    title: "Projects",
    icon: codeIcon(),
    link: "/projects",
  },
  {
    id: uuidv4(),
    title: "About",
    icon: aboutIcon(),
    link: "/about",
  },
  {
    id: uuidv4(),
    title: "Skills",
    icon: skillsIcon(),
    link: "/skills",
  },
  {
    id: uuidv4(),
    title: "Contact",
    icon: contactIcon(),
    link: "/contact",
  },
];
