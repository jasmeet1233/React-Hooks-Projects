import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { location, isSubmenuOpen, page : {page, links}} = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('')
  
  useEffect(() => {
    setColumns('col-2')
    const menuLocation = container.current;
    const {center, bottom} = location;
    menuLocation.style.left = `${center}px`;
    menuLocation.style.top = `${bottom}px`;
    if(links.length === 3){
      setColumns('col-3')
    } else if(links.length > 3){
      setColumns('col-4')
    }
  }, [location, links]);

  return (
    <aside className={isSubmenuOpen ? "submenu show" : "submenu"} ref = {container}>
      <h4>{page}</h4>
      <div className = {`submenu-center ${columns}`}>
        {
          links.map((item, index) => {
            return (<a href= {item.url} key = {index}>
              {item.icon} {item.label}
            </a>)
          })
        }
      </div>
    </aside>

  );
};

export default Submenu;
