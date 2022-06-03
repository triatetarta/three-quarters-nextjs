import Head from "next/head";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout/";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const twConfig = resolveConfig(tailwindConfig);

export default function Home() {
  const { showcase } = useSelector((state) => state.layout);

  return (
    <div className='w-full'>
      <Head>
        <title>Three Quarters - Web Developer</title>
        <meta
          name='description'
          content='Dimitrios Chatziioannou - Frontend Web Developer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <>
          <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full'>
            <video
              className='z-30 object-cover w-full h-full'
              src='/vids/coding.mp4'
              autoPlay
              muted
              loop
            />
          </div>
          <div className='bg-dark-gray/20 fixed top-0 left-0 right-0 bottom-0 w-full h-full'></div>
        </>
        <div className='container min-h-[calc(100vh-15rem)] relative flex items-center'>
          {/* <div
            className='bg-clr-white w-full absolute left-0 right-0 top-0 bottom-0 z-30'
            style={{
              clipPath: "circle(70%)",
            }}
          > */}
          <div className='w-1/3'>
            <div className='flex'>
              <div className='bg-dark-gray w-10 h-10'>
                {showcase.icon && (
                  <img src={showcase.icon} alt='' className='w-10 h-10' />
                )}
              </div>
              <div className='bg-dark-gray w-10 h-10'>
                {showcase.icon &&
                  +(
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='white'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  )}
              </div>
            </div>
            <div className='h-10'>
              <h3 className='text-xl'>{showcase.title}</h3>
            </div>
          </div>

          {/* </div> */}
        </div>
      </Layout>
    </div>
  );
}
