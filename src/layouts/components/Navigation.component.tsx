import { useState } from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  Zoom,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import BusinessIcon from '@mui/icons-material/Business'
import Logo from '@/assets/logo2Equipe.png'
import Image from 'next/image'
import { AccountMenu } from './AccountMenu.component'
import Link from 'next/link'

interface HeaderDrawerProps {
  children: React.ReactNode
  window?: () => Window
  icon?: string
  iconColor: string
  appBarProps?: any
  appsOptions?:
    | {
        name: string
      }[]
    | null
  sideBar?: React.ReactNode
}

interface AuxProps {
  anchorElUser: null | HTMLElement
  anchorElApps: null | HTMLElement
}

const drawerWidth = 240

export const Navigation = (props: HeaderDrawerProps) => {
  const {
    window,
    children,
    iconColor,
    appBarProps,
    icon,
    appsOptions,
    sideBar,
  } = props

  const [openCompanies, setOpenCompanies] = useState(false)
  const handleOpenCompanies = () => setOpenCompanies(true)
  const handleCloseCompanies = () => setOpenCompanies(false)

  const [aux, setAux] = useState<AuxProps>({
    anchorElApps: null,
    anchorElUser: null,
  })

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const arialControls = event.currentTarget.getAttribute('aria-controls')
    if (arialControls === 'apps-menu') {
      setAux({ ...aux, anchorElApps: event.currentTarget })
    } else {
      setAux({ ...aux, anchorElUser: event.currentTarget })
    }
  }

  const handleClose = () => {
    setAux({ anchorElApps: null, anchorElUser: null })
  }

  // MOBILE
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        {icon && <img src={icon} alt="Logo" height="15px" />}
      </Typography> */}
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Apps" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Empresas" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Configurações" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Sair" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: 1,
          '& .MuiToolbar-root': {
            minHeight: '50px !important',
          },
        }}
      >
        <AppBar
          component="nav"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            '& .MuiListItemIcon-root': {
              '& svg': {
                fontSize: '2rem',
                color: iconColor,
              },
            },
            px: 2,
            py: '3px',
            ...appBarProps?.sx,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <ListItem disablePadding>
              <Tooltip title="Inicio">
                <ListItemIcon
                  onClick={handleClick}
                  aria-controls="apps-menu"
                  aria-haspopup="true"
                  aria-expanded={Boolean(aux.anchorElUser) ? 'true' : undefined}
                >
                  <Link
                    href="/"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Image src={Logo} alt="Logo" height={30} />
                  </Link>
                </ListItemIcon>
              </Tooltip>
              <AccountMenu
                handleClose={handleClose}
                open={Boolean(aux.anchorElUser)}
                anchorEl={aux.anchorElUser}
              />
            </ListItem>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ListItem disablePadding>
                <Typography variant="h5" component="div" sx={styles.headerName}>
                  Gabriel Lindo
                </Typography>
                <Tooltip
                  title="Administrador"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <ListItemButton
                    component="button"
                    onClick={handleClick}
                    sx={{ padding: 0 }}
                  >
                    <ListItemIcon>
                      <Avatar>U</Avatar>
                    </ListItemIcon>
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            </Box>
          </Toolbar>
        </AppBar>

        {sideBar}

        {/* MOBILE */}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={
              (styles.mobileDrawer, { width: drawerWidth, ...appBarProps?.sx })
            }
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={
            (styles.main,
            { width: `${sideBar ? 'calc(100% - 64px)' : '100%'}` })
          }
        >
          <Box mt={9} p={4}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}

const styles = {
  mobileDrawer: {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
    },
  },
  main: {
    flexGrow: 1,
    height: 'calc(100% - 50px)',
    '& .MuiGrid-root': {
      margin: '0 !important',
      width: '100%',
    },
  },
  headerName: {
    flexGrow: 1,
    color: 'white',
    minWidth: '300px',
    textAlign: 'right',
    mr: 2,
  },
}
