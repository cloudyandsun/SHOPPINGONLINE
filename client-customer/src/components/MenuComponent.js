import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, TextField, InputAdornment } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Search as SearchIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import withRouter from '../utils/withRouter';

const drawerWidth = 240;

function Menu() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiGetCategories();
  }, []);

  function toggleDrawer(open) {
    return (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setOpenDrawer(open);
    };
  }

  function apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      setCategories(result);
    });
  }

  const categoryItems = categories.map((category) => (
    <ListItem key={category._id} component={Link} to={'/product/category/' + category._id}>
      <ListItemIcon><MenuIcon /></ListItemIcon>
      <ListItemText primary={category.name} />
    </ListItem>
  ));

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/home" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={toggleDrawer(false)}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Categories
          </Typography>
        </Toolbar>
        <List>
          {categoryItems}
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(Menu);