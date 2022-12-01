import * as React from 'react';
import {
        Container,
        Link,
        Grid,
        Typography,
        Box,
        styled,
      } from '@mui/material';

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },

  {
    title: 'Features',
    description: [
      'Cool Stuff', 'Random Stuff', 'Team Feature', 'Developer Stuff',
      'Another One'
    ]
  },
  {
    title: ['Services'],
    description: [
      'Mapping',
      'Analysis',
      'Training',
      'Remote Sensing',
      'GIS Development'
    ]
  },
  {
    title: ['Legal'],
    description: [
     'Privacy Policy',
     'Terms of Use'
    ]
  }
]

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://geoafrikana.com/">
        GeoAfrikana
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Footer = () => {
  return (
    <>
    <Container maxWidth="md" component="footer">
    <Grid container spacing={4} justify="space-evenly">
      {footers.map((footer) => (
        <Grid item xs={6} sm={3} key={footer.title}>
          <Typography variant="h6" color="secondary" gutterBottom>
            {footer.title}
          </Typography>
          <ul>
            {footer.description.map((item) => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </Grid>
    <Box mt={5}>
      <Copyright />
    </Box>
  </Container>
</>
  )
}

export default Footer