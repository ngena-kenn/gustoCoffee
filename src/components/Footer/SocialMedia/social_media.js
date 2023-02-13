import React from 'react'
import fb from "../../../assets/fb.webp"
import  insta from "../../../assets/insta.webp"
import  youtube  from "../../../assets/youtube.webp"
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import style from '../footer.scss';

const SocialMedia = () => {
  return (
    <Stack justifyContent={"center"} direction={"row"} spacing={1} alignItems="center" className={style.social}>
      <div>
        <img width="50" height="50" alt="facebook" className={`${style.social_img} lazyload`} data-src={fb} src={fb} />
      </div>
      <div>
        <img width="50" height="50" alt="instagram" className={`${style.social_img} lazyload`} data-src={insta} src={insta} />
      </div>
      <div>
        <img width="50" height="50" alt="youtube" className={`${style.social_img} lazyload`} data-src={youtube} src={youtube} />
      </div>
    </Stack>
  )
}

export default SocialMedia