import { FC, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 15px 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 1.3rem;
    margin: 0;
    font-weight: 500;
    color: #333;
  }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: #007bff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #666;
  font-size: 0.9rem;

  .user-name {
    color: #333;
    font-weight: 500;
  }

  .logout {
    color: #007bff;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

interface IHeader {
  onLoad?: () => void;
  label?: string;
}

export default function Header({ onLoad }: IHeader) {
  useLayoutEffect(() => {
    console.log("Header component mounted", onLoad);
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoIcon>⚡</LogoIcon>
          <h1>Backoffice</h1>
        </Logo>

        <UserInfo>
          <span className="user-name">Juan Pérez</span>
          <span>|</span>
          <a href="#logout" className="logout">
            Cerrar Sesión
          </a>
        </UserInfo>
      </HeaderContent>
    </HeaderContainer>
  );
}
