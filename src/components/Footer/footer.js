import { Stack, Divider, Box } from '@mui/material'
import { Link } from "react-router-dom"
import SocialMedia from "./SocialMedia/social_media"
import style from './style.module.scss'
// import "../../App.scss"
import { infoLinksFooter } from '../../utils/data'

const Footer = () => {
 
  const infoFooter = infoLinksFooter?.map((box, idx) =>
    <Box key={idx} className={`${style.grid_item} ${style.midia_text}`}>
      <div className={style.item_content}>
        <div className={style.title} >{box.title}</div>
        <ul className={style.ul}>
          {box?.list?.map((item, idx) => <li key={item.name}>
            <Link className={style.midia_text} to={item.to}> {item.name}</Link></li>)}
        </ul>
      </div>
    </Box>
  )

  return (
    <div className={ style.global_footer}>
      <div className={`regular_text ${style.grid}`}>
        <div className={style.grille}>
          {infoFooter}
        </div>
      </div> 
      <SocialMedia />
      <Divider className={style.main_divider}></Divider>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={{ sm: 1, md: 6 }}
         className={style.ffooter}>
        <Box>© Dark-kitchen 2023</Box>
        <Box><Link to={""}>Conditions générales de vente</Link></Box>
        <Box><Link to={""}>Confidentialité</Link></Box>
        <Box><Link to={""}>Mentions légales</Link></Box>
      </Stack>
      <div style={{ backgroundColor: "white" }} className={style.divider}></div>
      <div className={style.empty}></div>
    </div>
  )
}

export default Footer;
//expose(Footer);