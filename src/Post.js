import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";


import commentsdatas from "./commentsdata";

export default function MediaCard(props) {

    const [Likes, setLikes] = useState(props.likes);
    const [Comments, setComments] = useState(commentsdatas);
    if (!Comments[props.code]) {
        Comments[props.code] = [] //Posts Having No Comments
    }
    let navigate = useNavigate();
    return (
        <Card sx={{
            maxWidth: 345,
            width: "33%",
            minWidth: 250,
            height: 490,
            margin: 2,
            display: "inline-flex",
            flexGrow: 1,
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'baseline'
        }}
        >
            <CardMedia
                component="img"
                height="50%"
                width="28%"
                image={props.display_src}
                alt="green iguana"
                onClick={() => {
                    navigate("/comments/" + props.code);
                }}
                sx={{
                    "&:hover": {
                        cursor: "pointer"

                    }
                }}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom component="div" align="left"
                    sx={{
                        fontFamily: "sans-serif",
                        fontSize: 18
                    }}>
                    {props.caption}
                </Typography>
            </CardContent>
            <CardActions

                sx={{ width: "100%" }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "44%",
                        minWidth: 30,
                        maxWidth: 150,
                        "&:hover": {
                            backgroundColor: "rgb(11, 89, 137) !important",
                            color: '#FFF',

                        }
                    }}

                    onClick={() => {
                        setLikes(Likes + 1);
                    }}
                >
                    💙{Likes}
                </Button>

                <Button
                    variant="outlined"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "44%",
                        minWidth: 30,
                        maxWidth: 150,
                        "&:hover": {
                            backgroundColor: "rgb(11, 89, 137) !important",
                            color: '#FFF',

                        }
                    }}

                    onClick={() => {
                        navigate("/comments/" + props.code, { props });
                    }}
                >
                    💬{Comments[props.code].length}
                </Button>
            </CardActions>

        </Card >

    );
}
