import { UI } from "@common/constants";
import { useCustomTranslation } from "@common/i18n";
import { LanguageSelect } from "@components/Molecules/LanguageSelect/LanguageSelect";
import {
  DraverBox,
  DraverRootBox,
  Toolbar,
} from "@components/Organisms/Header/Header.styles";
import { MenuItemType } from "@components/Pages/LandingPage/LandingPage";
import { Logo } from "@components/assets/Logo";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { Box, Container } from "@mui/system";
import { Ref, RefObject, forwardRef, useState } from "react";

interface HeaderProps {
  window?: () => Window;
  menuItems: MenuItemType[];
  refs: {
    [key: string]: Ref<HTMLDivElement>;
  };
  id: string;
}

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { menuItems, refs, window, id } = props;
  const { tc } = useCustomTranslation();
  const theme = useTheme<Theme>();

  const [mobileOpen, setMobileOpen] = useState(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (id: string) => {
    const ref = refs[id] as RefObject<HTMLDivElement>;
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const drawer = (
    <DraverRootBox onClick={handleDrawerToggle}>
      <Logo color={theme.palette.primary.main} />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleMenuItemClick(item.to)}
            >
              <ListItemText primary={tc(item.title)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DraverRootBox>
  );

  return (
    <Box component="header" ref={ref} id={id}>
      <AppBar component="nav" ref={ref} color="secondary">
        <Container>
          <Toolbar>
            <Logo color={theme.palette.primary.main} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <Menu color="primary" />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {menuItems.map((item) => (
                <Button
                  variant="text"
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.to)}
                >
                  {tc(item.title)}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: UI.DrawerWidth,
            },
          }}
        >
          <DraverBox>
            {drawer}
            <LanguageSelect isMobile />
          </DraverBox>
        </Drawer>
      </nav>
    </Box>
  );
});
