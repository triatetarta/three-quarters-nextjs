import { useEffect, useState } from "react";
import { menuData } from "../../seeders/data";
import { useDispatch } from "react-redux";
import { setShowcase } from "./LayoutSlice/reducer";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [itemIndex, setItemIndex] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  const handleMouseEnter = (index, item) => {
    dispatch(setShowcase({ title: item.title, icon: item.icon }));
    setItemIndex(index);
  };

  const handleMouseLeave = () => {
    dispatch(setShowcase({ title: "", icon: "" }));
    setItemIndex(null);
  };

  return (
    <div className='p-4 absolute right-0 top-20 bg-btn-dark'>
      <div className='flex flex-col items-center justify-center space-y-2'>
        {menuItems?.map((item, index) => {
          return (
            <button
              key={item.id}
              onMouseEnter={() => handleMouseEnter(index, item)}
              onMouseLeave={handleMouseLeave}
              className={`relative bg-btn-dark rounded-md inline-flex flex-row items-center text-clr-white font-medium overflow-hidden text-base group p-3`}
            >
              <span className='block absolute top-0 left-0 w-full h-full bg-clr-white/5 transform scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left will-change-transform transition-transform duration-500 ease-in-button-out'></span>

              <img
                className='w-10 h-10 text-clr-white'
                src={item.icon}
                alt={item.title}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
