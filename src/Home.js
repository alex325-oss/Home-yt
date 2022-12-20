import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, List,
   Divider, ListItemText,ListItem,ListItemButton, Drawer } from '@mui/material';
/* import { render } from 'react';
import { BrowserRouter as Router } from 'react'; */


import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';

const drawerWidth = 180;


function Home() {


  //aqui é o codigo da IA, a intenção desse codigo é esconder o drawer
  /* class Drawer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false
      };
    }
  
    toggleVisibility() {
      this.setState({
        visible: !this.state.visible
      });
    }
  
    render() {
      const { visible } = this.state;
      return (
        <div className="drawer">
          {visible && (
            <div>
              This is the content of the drawer
            </div>
          )}
        </div>
      );
    }
  }
  class App extends React.Component {
    render() {
      return (
        <Router>
          <div>
            <button onClick={() => this.drawer.toggleVisibility(MenuIcon)}>
              Toggle Drawer
            </button>
            <Drawer ref={(drawer) => this.drawer = drawer} />
          </div>
        </Router>
      );
    }
  }; */


    //aqui é o codigo que eu estava fazendo 
    //na linha 96 é o drawer 
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            </IconButton>
            <img src='/imagens/preto.png'
            alt='preto'
            height={25}
            sx={{mr: 2}}
            />
          <Typography sx={{ flexGrow: 1 }} />
          <Button color='primary' startIcon={<VideoCallIcon/>}></Button>
          <Button color='primary' startIcon={<AppsIcon/>}></Button>
          <Button color='primary' startIcon={<MoreVertIcon/>}></Button>
          <Button startIcon={<AccountCircleIcon />} variant='outlined' color="secondary" >Fazer Login</Button> 
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} 
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}  
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
        </div>
    )
}

export default Home;