import { NavLink } from "react-router-dom";
import { home, productMenu } from "../../assets";
import * as S from "./styles";

const items = [
  {
    icon: <img src={home} width={22} />,
    label: "Início",
    href: "/",
  },
  {
    icon: <img src={productMenu} width={22} />,
    label: "Produtos",
    href: "/products",
  },
  {
    label: "Perfil",
    href: "/profile",
  },
];

const AsideMenu = () => {
  return (
    <S.AsideContainer>
      <aside>
        <S.MenuTitle>Menu</S.MenuTitle>

        <S.MenuList>
          {items.map((item, index) => (
            <S.MenuItem key={index}>
              <NavLink to={item.href} end>
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </NavLink>
            </S.MenuItem>
          ))}
        </S.MenuList>
      </aside>
    </S.AsideContainer>
  );
};

export default AsideMenu;
