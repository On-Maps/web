import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Divider,
  Tooltip,
  Zoom,
} from '@mui/material'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined'
import { useCallback, useEffect, useState } from 'react'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import EditLocationIcon from '@mui/icons-material/EditLocation'
import Link from 'next/link'
import { useRouter } from 'next/router'
const drawerWidth = 64
const data = [
  {
    title: 'Criar Lugar',
    icon: <AddLocationAltIcon />,
    path: 'create/place',
    verify: false,
  },
  {
    title: 'Gerenciar Lugar',
    icon: <EditLocationIcon />,
    path: 'manage/place',
    verify: false,
  },
  {
    title: 'Criar Usuário',
    icon: <PersonAddIcon />,
    path: 'create/user',
    verify: false,
  },
  {
    title: 'Gerenciar Usuário',
    icon: <ManageAccountsIcon />,
    path: 'manage/user',
    verify: false,
  },
]

export const DashboardSideBar = () => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const currentRoute = router.asPath

  return (
    <Drawer variant="permanent" sx={styles.drawer}>
      <Toolbar />
      <Box sx={styles.list}>
        <List>
          {data.map((item, index) => (
            <>
              {item.verify && !show ? null : (
                <>
                  <ListItem disablePadding key={index}>
                    <Tooltip
                      title={item.title}
                      placement="right-start"
                      TransitionComponent={Zoom}
                    >
                      <Link
                        href={`/dashboard/${item.path}`}
                        style={{
                          width: '100%',
                        }}
                      >
                        <ListItemButton
                          selected={
                            currentRoute === `/dashboard/${item.path}`
                              ? true
                              : false
                          }
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                        </ListItemButton>
                      </Link>
                    </Tooltip>
                  </ListItem>
                  <Divider />
                </>
              )}
            </>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      backgroundColor: 'background.default',
      boxSizing: 'border-box',
    },
  },
  list: {
    overflow: 'auto',
    '& .MuiListItemButton-root': {
      display: 'grid',
      justifyContent: 'center',
      py: 2,
    },
    '& .MuiListItemIcon-root': {
      justifyContent: 'center',
      display: 'grid',
    },
  },
}
