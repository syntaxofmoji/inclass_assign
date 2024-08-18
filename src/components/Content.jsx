import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';

export default function Content() {
  return (

    
    <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={2}
    >
        <Grid item  >
            <Box>
                <Typography variant="h4" sx={{ marginBottom: 1 }}>
                Nintendogs ૮ ・ﻌ・ა <br /> ニンテンドッグス ゜☆
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                The player starts out by purchasing their first dog from the Kennel. After it is bought, the puppy needs to be calmed down and taught its name. It should be given food and water to quench its thirst and satiate its hunger.
                </Typography>
            </Box>
        </Grid>
        
        <Grid item xs={6}> 
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
          <Card>
         <CardActionArea>
           <CardMedia
             component="img"
             height="140"
             image="https://i.ytimg.com/vi/DCLo3-MUbw4/maxresdefault.jpg"
             alt="nintendog"
           />
           <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Chihuahua & Friends
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The chihuahua's name originated from the settlement of Chihuahua, Mexico, where it was first bred. Being the world's smallest dog, it is hard to imagine this breed originating from the wolf, which is why scientists theorize that it actually originated from the small, desert-dwelling Fennec Fox.
             </Typography>
           </CardContent>
        </CardActionArea>
       </Card>
          </Grid>

          <Grid item sm={6} md={6}>
          <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i.ytimg.com/vi/utXFlo-LJaE/maxresdefault.jpg"
            alt="nintendog"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Labrador & Friends
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Labrador Retrievers are sporting dogs named for their original purpose as companions to fishermen, bred to retrieve nets from the cold water. For this reason, Retrievers have webbed feet and otter-like tails.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
          </Grid>

          <Grid item sm={6} md={6}>
          <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i.ytimg.com/vi/DZaAKcgTA9Y/maxresdefault.jpg"
            alt="nintendog"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Shiba Inu & Friends
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Shiba Inu is a hunting dog first used in Japan to startle birds and small animals out of brushwood (bushes), earning it the name "brushwood dog". Because the breed has been used since ancient times and language has evolved since then, however, it is disputed whether this is the proper translation or if "Shiba Inu" means "small dog".
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
          </Grid>
          
        </Grid>
      </Grid>
    </Grid>
    

   
    
  );

}

//Created: Monday, 27 March BE 2566 15:32
//Modified: Wednesday, 29 March BE 2566 23:18
