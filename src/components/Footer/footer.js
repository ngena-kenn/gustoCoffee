
import { Stack, Divider, Box } from '@mui/material'
import SocialMedia from "./SocialMedia/social_media"
import  './footer.scss'
import { infoLinksFooter } from '../../utils/data'
import React, {Component} from 'react'

const Footer = () => {

  const infoFooter = infoLinksFooter?.map((box, idx) =>
    <Box key={idx} className={'grid_item midia_text'}>
      <div className={'item_content'}>
        <div className={'title'} >{box.title}</div>
        <ul className={'ul'}>
          {box?.list?.map((item, idx) => <li key={item.name}>
            <div className={'midia_text'} to={item.to}> {item.name}</div></li>)}
        </ul>
      </div>
    </Box>
  )

  return (
    <div className={ 'global_footer'}>
      <div className={'regular_text grid'}>
        <div className={'grille-footer'}>
          {infoFooter}
        </div>
      </div> 
      <SocialMedia />
      <Divider className={'main_divider'}></Divider>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={{ sm: 1, md: 6 }}
         className={'ffooter'}>
        <Box>© Dark-kitchen 2023</Box>
        <Box><div to={""}>Conditions générales de vente</div></Box>
        <Box><div to={""}>Confidentialité</div></Box>
        <Box><div to={""}>Mentions légales</div></Box>
      </Stack>
      <div style={{ backgroundColor: "white" }} className={'divider'}></div>
      <div className={'empty'}></div>
    </div>
  )
}

export default Footer;
//expose(Footer);