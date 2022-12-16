import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection:'column', margin: '2%'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
              <Tab label="All Books" {...a11yProps(0)} />
              <Tab label="News" {...a11yProps(1)} />
              <Tab label="Reading" {...a11yProps(2)} />
              <Tab label="Finished" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            All Books
          </TabPanel>
          <TabPanel value={value} index={1}>
            News
          </TabPanel>
          <TabPanel value={value} index={2}>
            Reading
          </TabPanel>
          <TabPanel value={value} index={3}>
            Finished
          </TabPanel>
        </Box>
  );
}