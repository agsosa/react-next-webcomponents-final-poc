import { useLayoutEffect } from "react";
import { HeaderProps } from "./Header.types";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoIcon,
  UserInfo
} from "./Header.styles";

export default function Header({ appTitle, username, onLoad }: HeaderProps) {
  useLayoutEffect(() => {
    console.log("Header component mounted", onLoad);
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoIcon>⚡</LogoIcon>
          <h1>{appTitle}</h1>
        </Logo>

        <UserInfo>
          <span className="user-name">{username}</span>
          <span>|</span>
          <a href="#logout" className="logout">
            Cerrar Sesión
          </a>
        </UserInfo>
      </HeaderContent>
    </HeaderContainer>
  );
}
