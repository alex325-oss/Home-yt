import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, List,
   Divider, ListItemText,ListItem,ListItemButton, Drawer, Grid } from '@mui/material';
import { useState } from 'react';


import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GamesIcon from '@mui/icons-material/Games';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import YouTubeIcon from '@mui/icons-material/YouTube';

const drawerWidth = 240;


function Home() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    } 

    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" color='inherit' >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon className='menu-icon' onClick={toggleDrawer} />
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
       <Box display='flex'>
        {drawerOpen && (
          <div> 
        <Drawer 
          sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderRight: 'none', boxShadow: '2' , position: 'static', height: '100%',  },
        }}
        variant="permanent"
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inicio', 'Shorts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                     {index % 3 === 0 ?  <HomeIcon /> : <PlayCircleFilledIcon /> }
                     </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['biblioteca', 'historico' ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                      {index % 2 === 0 ? <VideoLibraryIcon /> : <HistoryIcon />}  
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} 
          </List>
        </Box>
        <Divider />
        <Box p={4}>
            <Typography variant='body1' >Faça login para curtir vídeos, comentar e se inscrever. </Typography>
            <Box mt={2}>
              <Button 
              variant='outlined'
              color='secondary'
              startIcon={<AccountCircleIcon />}
              >
                Fazer Login
              </Button>
            </Box>
        </Box>
        <Divider />
        <List>
          <ListItemButton >
            <SportsSoccerIcon /><Typography>Esportes</Typography>
          </ListItemButton>
          <ListItemButton >
            <MusicNoteIcon  /><Typography>Musicas</Typography>
          </ListItemButton>
          <ListItemButton >
            <NewspaperIcon   /><Typography>Noticias</Typography>
          </ListItemButton>
          <ListItemButton >
            <GamesIcon /><Typography>Jogos</Typography>
          </ListItemButton>
          <ListItemButton >
            <LocalMoviesIcon/><Typography>Filmes</Typography>
          </ListItemButton>
          <ListItemButton >
            <LiveTvIcon /><Typography>Ao vivo</Typography>
          </ListItemButton>
          <ListItemButton >
            <YouTubeIcon/><Typography>Destaque</Typography>
          </ListItemButton>
          <Divider />
          <ListItemButton >
            <AddCircleIcon/><Typography>Procurar Canais</Typography>
          </ListItemButton>
          <Divider />
        </List>
      </Drawer> 
    </div>
    )}

    <Box p={5}>
      <Toolbar />
      <Typography
        variant='h5'
        color='textPrimary'
        style={{ fontWeight: 800 }}
      >
        Recomendado 
      </Typography>

      <Divider />

      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}
          >
            
      <img
        style={{ Width: '100%' }}
        alt={'thumb'}
        src='./imagens/Youtube.png'
        />

      <Typography 
        style={{ fontWeight: 600 }}
        gutterBottom
        variant='body1'
        color='textPrimary'
        >
        Youtube channel funny videos for you  
      </Typography>

      <Typography 
      display='block'
      variant='body2'
      color='textSecondary'
      >
        YouTube Channel 
      </Typography>

      <Typography variant='body2' color='textSecondary'
      >
       11 mi views • at 1 week
      </Typography>
      
        
      <img className='youtube'
        style={{ Width: '100%' }}
        alt={'thumb'}
        src='./imagens/Youtube.png'
        title='Youtube channel funny videos for you'
        />

      <Typography 
        style={{ fontWeight: 600 }}
        gutterBottom
        variant='body1'
        color='textPrimary'
        >
        Youtube channel funny videos for you  
      </Typography>

      <Typography 
      display='block'
      variant='body2'
      color='textSecondary'
      >
        YouTube Channel 
      </Typography>

      <Typography variant='body2' color='textSecondary'
      >
       11 mi views • at 1 week
      </Typography>
    

  
      <img className='youtube'
        style={{ Width: '100%' }}
        alt={'thumb'}
        src='./imagens/Youtube.png'
        title='Youtube channel funny videos for you'
        />

      <Typography 
        style={{ fontWeight: 600 }}
        gutterBottom
        variant='body1'
        color='textPrimary'
        >
        Youtube channel funny videos for you  
      </Typography>

      <Typography 
      display='block'
      variant='body2'
      color='textSecondary'
      >
        YouTube Channel 
      </Typography>

      <Typography variant='body2' color='textSecondary'
      >
       11 mi views • at 1 week
      </Typography>
    
  
      <img className='youtube'
        style={{ Width: '100%' }}
        alt={'thumb'}
        src='./imagens/Youtube.png'
        title='Youtube channel funny videos for you'
        />

      <Typography 
        style={{ fontWeight: 600 }}
        gutterBottom
        variant='body1'
        color='textPrimary'
        >
        Youtube channel funny videos for you  
      </Typography>

      <Typography 
      display='block'
      variant='body2'
      color='textSecondary'
      >
        YouTube Channel 
      </Typography>

      <Typography variant='body2' color='textSecondary'
      >
       11 mi views • at 1 week
      </Typography>
    

  
      <img className='youtube'
        style={{ Width: '100%' }}
        alt={'thumb'}
        src='./imagens/Youtube.png'
        title='Youtube channel funny videos for you'
        />

      <Typography 
        style={{ fontWeight: 600 }}
        gutterBottom
        variant='body1'
        color='textPrimary'
        >
        Youtube channel funny videos for you  
      </Typography>

      <Typography 
      display='block'
      variant='body2'
      color='textSecondary'
      >
        YouTube Channel 
      </Typography>

      <Typography variant='body2' color='textSecondary'
      >
       11 mi views • at 1 week
      </Typography>
    
           
      <img className='youtube'
        style={{ Width: '100%' }}
        alt={'thumb'}
        src='./imagens/Youtube.png'
        title='Youtube channel funny videos for you'
        />

      <Typography 
        style={{ fontWeight: 600 }}
        gutterBottom
        variant='body1'
        color='textPrimary'
        >
        Youtube channel funny videos for you  
      </Typography>

      <Typography 
      display='block'
      variant='body2'
      color='textSecondary'
      >
        YouTube Channel 
      </Typography>

      <Typography variant='body2' color='textSecondary'
      >
       11 mi views • at 1 week
      </Typography>
    

            
      <img className='youtube'
        style={{ Width: '100%' }}
        alt={'thumb'}
        src='./imagens/Youtube.png'
        title='Youtube channel funny videos for you'
        />

      <Typography 
        style={{ fontWeight: 600 }}
        gutterBottom
        variant='body1'
        color='textPrimary'
        >
        Youtube channel funny videos for you  
      </Typography>

      <Typography 
      display='block'
      variant='body2'
      color='textSecondary'
      >
        YouTube Channel 
      </Typography>

      <Typography variant='body2' color='textSecondary'
      >
       11 mi views • at 1 week
      </Typography>
    
             
        </Grid> 
    </Grid>

    </Box>

    </Box>
    </Box>
        </div>
    )
}

export default Home;