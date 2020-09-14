import React from 'react';
import './Categories.css';
import Internship from './Internship';
import Class from './Class';
import HackCville from './HackCville';
import Other from './Other';

// function Categories() {

//     const [index, setIndex] = React.useState(0);
//     const [show0, setShow0] = React.useState(true);
//     const [show1, setShow1] = React.useState(false);
//     const [show2, setShow2] = React.useState(false);

//     const handleSelect = (selectedIndex) => {
//         setIndex(selectedIndex);
//         toggleShow(selectedIndex);
//     };

//     const toggleShow = (index) => {
//         if (index == 0) {
//             setShow0(true);
//             setShow1(false);
//             setShow2(false);
//         } else if (index == 1) {
//             setShow0(false);
//             setShow1(true);
//             setShow2(false);
//         } else {
//             setShow0(false);
//             setShow1(false);
//             setShow2(true);
//         }
//     }

//     return(
//         <Container>
//             <Row>
//                 <Col className="category">
//                     <div>Internship</div>
//                 </Col>
//                 <Col className="category">
//                     <div>Classwork</div>
//                 </Col>
//                 <Col className="category">
//                     <div>Other</div>
//                 </Col>
//             </Row>
//             <Row style={{marginTop:'5vh'}}>
//                 <Col>
//                     {index==0 && <Internship/>}
//                     {index==1 && <Class/>}
//                     {index==2 && <Other/>}
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Categories;

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: '20vw',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 200,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {

  // if (window.innerWidth <= 600) {
  //   const classes = useStylesSmall();
  // } else {
    
  // }
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Internship" {...a11yProps(0)} className="tab-label"/>
        <Tab label="Class" {...a11yProps(1)} className="tab-label"/>
        <Tab label="Launch" {...a11yProps(2)} className="tab-label"/>
        <Tab label="Other" {...a11yProps(3)} className="tab-label"/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Internship/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Class/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HackCville/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Other/>
      </TabPanel>
    </div>
  );
}