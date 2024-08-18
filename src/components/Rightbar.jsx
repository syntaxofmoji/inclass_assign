import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography, Grid, Box } from '@mui/material';
import { Height } from '@mui/icons-material';

export default function Rightbar() {
  return (
    <Box direction={"column"} sx={{ display: { xs: "none", md: "block" } }}>
      <Box display={"flex"} flexDirection={"column"} mt={2} >
        <Typography>
        Latest Photos
             <br />
            ૮ ºﻌºა
        </Typography>
        <ImageList sx={{ width: 250, height: 250 }} cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
                srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://www.wikihow.com/images/thumb/f/fe/Make-Your-Nintendogs-Love-You-Step-1.jpg/v4-460px-Make-Your-Nintendogs-Love-You-Step-1.jpg.webp',
    title: 'puppy',
  },
  {
    img: 'https://64.media.tumblr.com/052541f1a63c4418960e74bbbfee2ff0/e6c39c8fbf40aefb-3b/s500x750/c0868d596b35399e4e405377129f4ad7ff033897.png',
    title: 'puppy',
  },
  {
    img: 'https://www.wikihow.com/images/thumb/0/06/Play-Nintendogs-Step-5.jpg/v4-460px-Play-Nintendogs-Step-5.jpg',
    title: 'puppy',
  },
  {
    img: 'https://cdn.mos.cms.futurecdn.net/yYNQwwyeML2JC39Qe4iMzh.jpg',
    title: 'puppy',
  },
];

//Created: Monday, 27 March BE 2566 15:58
//Modified: Wednesday, 29 March BE 2566 23:16
