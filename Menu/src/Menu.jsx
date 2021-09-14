import React from 'react'

const Menu = ({menuItemsArr}) => {
    return (
        <div className = 'section-center'>
            {
                menuItemsArr.map((item) => {
                    const {img, price, category, title, desc, id} = item;
                     return <img src= {img} alt= {title} />
                })
            }
        </div>
    )
}

export default Menu;
