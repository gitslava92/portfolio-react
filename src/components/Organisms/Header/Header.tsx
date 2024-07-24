import { LANDING_SECTIONS } from "@common/constants";
import { useCustomTranslation } from "@common/i18n";
import {
  Drawer,
  DrawerBox,
  DrawerRootBox,
  Toolbar,
  IconButton,
  MenuItemsBox,
} from "@components/Organisms/Header/Header.styles";
import { MenuItemType } from "@components/Pages/LandingPage/LandingPage";
import { Logo } from "@components/assets/Logo";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Divider,
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
    <DrawerRootBox onClick={handleDrawerToggle}>
      <Box onClick={() => handleMenuItemClick(LANDING_SECTIONS.Hello)}>
        <Logo color={theme.palette.primary.main} />
      </Box>
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
    </DrawerRootBox>
  );

  return (
    <Box component="header" ref={ref} id={id}>
      <AppBar component="nav" ref={ref} color="secondary">
        <Container>
          <Toolbar>
            <Box onClick={() => handleMenuItemClick(LANDING_SECTIONS.Hello)}>
              <Logo color={theme.palette.primary.main} />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <Menu color="primary" />
            </IconButton>
            <MenuItemsBox>
              {menuItems.map((item) => (
                <Button
                  variant="text"
                  key={item.id}
                  onClick={() => handleMenuItemClick(item.to)}
                >
                  {tc(item.title)}
                </Button>
              ))}
            </MenuItemsBox>
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
        >
          <DrawerBox>{drawer}</DrawerBox>
        </Drawer>
      </nav>
    </Box>
  );
});
