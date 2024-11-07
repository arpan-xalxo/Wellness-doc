import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Schedule, CalendarMonth, Message, Report, Settings, Logout } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box sx={{ width: 240, backgroundColor: '#f7f9fc', height: '100vh', padding: 2 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Overview" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Schedule /></ListItemIcon>
          <ListItemText primary="Appointments" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><CalendarMonth /></ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Message /></ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Report /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Logout /></ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
