import { AppBar, CssBaseline, Typography, Toolbar, styled} from '@mui/material'
import React from 'react'


const Header = () => {

  const StyledAppBar = styled(AppBar)({
backgroundColor: 'white', 
position: 'sticky'
  })

  return (
    <>
<CssBaseline/>
<StyledAppBar>
  <Toolbar>
  <Typography color='secondary' variant="h6"  noWrap>GeoAfrikana</Typography>
  </Toolbar>
</StyledAppBar>
    </>
  )
}

export default Header;