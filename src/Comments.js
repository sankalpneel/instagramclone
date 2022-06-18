import * as React from 'react';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import './Comments.css';
import Post from './Post';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

import { useNavigate, useParams } from "react-router-dom";


import Container from "@mui/material/Container";

import commentsdatas from "./commentsdata";
import pd from "./postsdata"
import CommentLines from './CommentLines';

export default function MediaCard() {




    let { id } = useParams();
    let pdata = 0;



    for (var i = 0; i < pd.length; i++) {
        if (pd[i].code === id) {
            pdata = pd[i];
        }
    }


    const [postdata, setPosts] = useState(pdata);


    let iname = "";
    let com = commentsdatas[pdata.code];
    //console.log(com);
    const [comments, setComments] = useState(com);
    //console.log(comments);
    const [name, setName] = useState("");
    const [come, setCom] = useState("");

    return (
        <div className="Comments" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" width="300" height="150" />
            <h1>Sankalp Kumar </h1>
            <Container fixed sx={{
                justifyContent: 'center',
                display: "flex"
            }}>
                <Box
                    sx={{
                        justifyContent: 'center',
                        width: "50%",
                        height: 650,
                    }}
                >
                    <CardMedia
                        component="img"
                        height="80%"
                        width="60%"
                        image={postdata.display_src}
                        alt="green iguana"

                    />
                    <CardContent>
                        <Typography variant="h6" gutterBottom component="div" align="left"
                            sx={{
                                fontFamily: "sans-serif",
                                fontSize: 18,
                            }}>
                            {postdata.caption}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant="outlined"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "44%",
                                minWidth: 30,
                                maxWidth: 200,
                                "&:hover": {
                                    backgroundColor: "rgb(11, 89, 137) !important",
                                    color: '#FFF',

                                }
                            }}
                            onClick={() => {
                                setPosts(prevState => ({
                                    ...prevState,
                                    likes: prevState.likes + 1
                                }));
                            }}
                        >
                            💙{postdata.likes}
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "44%",
                                minWidth: 30,
                                maxWidth: 200,
                                "&:hover": {
                                    backgroundColor: "rgb(11, 89, 137) !important",
                                    color: '#FFF',

                                }
                            }}
                        >
                            💬{5}
                        </Button>
                    </CardActions>
                </Box>
                <Box
                    sx={{
                        justifyContent: 'left',
                        width: "40%",
                        height: 650,
                        backgroundColor: "#00001"

                    }}
                >
                    <Box>
                        {
                            comments.map(postdata => (
                                <CommentLines
                                    user={postdata.user}
                                    text={postdata.text}

                                />
                            ))
                        }
                    </Box>

                    <Grid
                        direction='column'
                        sx={{
                            display: "flex",
                            paddingTop: 5,
                            paddingLeft: 2,
                            alignItems: "left",

                        }}
                    >
                        <TextField
                            required
                            id="filled-required"
                            label="Author"
                            variant="filled"
                            value={name}
                            size="small"
                            style={{ width: 200 }}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <TextField
                            required
                            id="filled-required"
                            label="Comment"
                            variant="filled"
                            value={come}
                            size="small"
                            style={{ width: 200 }}
                            onChange={(e) => {
                                setCom(e.target.value);
                            }}
                        />
                        <Button variant="contained" color="primary" style={{ width: 200, top: 8 }}
                            onClick={() => {
                                console.log("clicked", name, come);
                                if (!name.replace(/\s/g, '').length && !come.replace(/\s/g, '').length) {
                                    alert("Enter Valid Name and Comment");
                                }

                                else {
                                    //let xx={text:name,}
                                    setComments([...comments, { "user": name, "text": come }]);
                                    setName("");
                                    setCom("");
                                }
                            }}
                        >
                            Comment
                        </Button>
                    </Grid>

                </Box>




            </Container>



        </div>




    );
}
/*<div className="Comments">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" width="300" height="150" />
            <h1>Sankalp Kumar </h1>
            <div>
                <div sx={{
                    maxWidth: 345,
                    width: "33%",
                    minWidth: 250,
                    height: 490, margin: 2,
                    display: "inline-flex", flexWrap: 'wrap', flexDirection: 'column',
                    backgroundColor: "red",

                }} >
                    <Post
                        code={postdata.code}
                        caption={postdata.caption}
                        likes={postdata.likes}
                        id={postdata.likes}
                        display_src={postdata.display_src}

                    />
                </div >
                <div sx={{
                    maxWidth: 345,
                    width: "33%",
                    minWidth: 250,
                    height: 490, margin: 2,
                    backgroundColor: "red",

                }}>

                </div>

            </div>




        </div>*/