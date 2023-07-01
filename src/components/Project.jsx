import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, img, description, link }) {
    return (
        <div className='py-4 projectCard'>
            <Card style={{width: "350px"}} className='projectCard'>
                <CardMedia
                    sx={{ height: 250 }}
                    image={img}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={link}>Code</Button>
                    <button className='btn btn-primary' disabled size="small">Live Coming Soon</button>
                </CardActions>
            </Card>
        </div>
    );
}