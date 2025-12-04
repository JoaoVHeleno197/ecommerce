import styled from "styled-components";

export const AsideContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: #1f1f1f;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);

  aside {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const MenuTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 6px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.2s;

  span {
    display: flex;
    align-items: center;
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 12px 10px;
    border-radius: 8px;
    transition: 0.2s;
  }

  /* Quando a rota estiver ativa */
  a.active {
    background: #444; /* cor do item ativo */
  }

  a:hover {
    background: #333;
  }
`;
