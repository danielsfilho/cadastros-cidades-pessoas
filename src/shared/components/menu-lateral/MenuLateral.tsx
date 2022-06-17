import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useDrawerContext } from '../../contexts'



export const MenuLateral: React.FC = ({ children }) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="https://scontent.frvy1-1.fna.fbcdn.net/v/t39.30808-6/273207314_1205759309827923_651391042645074167_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aicVRw_GfwgAX_dFdO5&tn=xsVMt3kD78h9xU5_&_nc_ht=scontent.frvy1-1.fna&oh=00_AT_nJxWuWRTsO9Gfo09gU_WmQSpl43XHmywDthOHPrVoxw&oe=62B10CC3"/>
          </Box>
          
          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    home
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
      
    </>
    
  )
}

