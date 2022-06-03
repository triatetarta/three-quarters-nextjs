const Button = ({ stylingClasses, content }) => {
  return (
    <button
      className={`relative bg-btn-dark rounded-md inline-flex flex-row items-center text-clr-white font-medium overflow-hidden text-base group ${stylingClasses}`}
    >
      <span className='block absolute top-0 left-0 w-full h-full bg-clr-white/5 transform scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left will-change-transform transition-transform duration-500 ease-in-button-out'></span>

      <span>{content}</span>
    </button>
  );
};

export default Button;
