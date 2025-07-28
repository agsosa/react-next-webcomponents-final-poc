import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "blue",
  },
};

export default function StyledThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
