const Footer = () => {
  return (
    <footer className='container flex items-center justify-between py-6'>
      <ul>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>

      <ul className='text-right'>
        <li className='text-light-gray'>
          <span className='border-b border-light-gray'>
            Dimitrios Chatziioannou
          </span>
        </li>
        <li>threequartersdev@gmail.com</li>
        <li>@threequartersDC</li>
        <li>@threequartersdev</li>
      </ul>
    </footer>
  );
};

export default Footer;
