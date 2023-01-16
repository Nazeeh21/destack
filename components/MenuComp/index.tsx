/* eslint-disable @next/next/no-img-element */
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";

const MenuComp = () => {
  return (
    <Menu
      menuButton={
        <MenuButton>
          <img src="/icons/menu.png" alt="menu" />
        </MenuButton>
      }
    >
      <MenuItem>Share</MenuItem>
      <MenuItem>Bookmark</MenuItem>
      <MenuItem>Follow</MenuItem>
    </Menu>
  );
};

export default MenuComp;
