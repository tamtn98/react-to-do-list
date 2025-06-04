import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
  Toolbar,
  Typography,
} from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import origStyled from "styled-components";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MenuIcon from "@mui/icons-material/Menu";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Link, NavLink, NavLinkProps, useNavigate } from "react-router";

const drawerWidth = 200;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface MyDrawerProps {
  children?: React.ReactNode;
  title?: string;
  list?: MyDrawerSideItem[];
}

export interface MyDrawerSideItem {
  label: string;
  icon?: OverridableComponent<SvgIconTypeMap>;
  path?: string;
}

export type MyDrawerHandle = {
  // openDrawer: () => void;
  // closeDrawer: () => void;
  // toggleDrawer: () => void;
};

interface ListItemNavLinkProps {
  icon?: React.ReactElement<unknown>;
  primary: string;
  to: string;
}

const ListItemNavLink = (props: ListItemNavLinkProps) => {
  const { icon, primary, to } = props;
  return (
    <ListItemButton component={NavLink} to={to}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItemButton>
  );
};

export const MyDrawer = forwardRef<MyDrawerHandle, MyDrawerProps>(
  (props, ref) => {
    const theme = useTheme();
    const [visibility, setVisibility] = useState(true);

    useImperativeHandle(ref, () => ({
      // openDrawer: () => setVisibility(true),
      // closeDrawer: () => setVisibility(false),
      // toggleDrawer: () => setVisibility((prev) => !prev),
    }));

    const OrigStyled = origStyled.div`
    color: red;
    font-weight: bold;
  `;

    const MuiStyled = styled("div")({
      color: "red",
      fontWeight: "bold",
    });

    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={visibility}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setVisibility(true)}
              edge="start"
              sx={[
                {
                  mr: 2,
                },
                visibility && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {props?.title ?? "<Default title>"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={visibility}
        >
          <DrawerHeader>
            <IconButton onClick={() => setVisibility(false)}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {props?.list?.length > 0 ? (
            <List>
              {props.list.map((item, index) => (
                <ListItem disablePadding key={index}>
                  {/* <ListItemNavLink to={item.path ? `/${item.path}` : "/"} primary={item.label} /> */}
                  <ListItemButton onClick={() => useNavigate}></ListItemButton>
                </ListItem>
              ))}
            </List>
          ) : (
            <ListItem>
              <ListItemText primary="Not found"></ListItemText>
            </ListItem>
          )}
        </Drawer>
        <Main open={visibility}>
          <DrawerHeader />
          {props.children}
        </Main>
      </Box>
    );
  }
);
