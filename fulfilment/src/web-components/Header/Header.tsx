import { useLayoutEffect } from "react";
import { HeaderProps } from "./Header.types";
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  LogoIcon,
  TitleWithColor,
  UserInfo,
} from "./Header.styles";
import StyledThemeProvider from "@/components/StyledThemeProvider";

export default function Header({ appTitle, username, onLoad }: HeaderProps) {
  useLayoutEffect(() => {
    console.log("Header component mounted", onLoad);
    if (onLoad) onLoad();
  }, [onLoad]);

  return (
    <StyledThemeProvider>
      <HeaderContainer>
        <HeaderContent>
          <Logo>
            <LogoIcon>⚡</LogoIcon>
            <TitleWithColor>{appTitle}</TitleWithColor>
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
    </StyledThemeProvider>
  );
}
