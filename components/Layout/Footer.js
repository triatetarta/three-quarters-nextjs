const Footer = () => {
  return (
    <footer className='text-primary-footer container flex items-center justify-between py-6'>
      <ul>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>

      <ul className='text-right'>
        <li>
          <span className='border-b border-primary-footer'>
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
