import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import pd from "./postsdata";
import Post from './Post';

export default function SimpleContainer() {

    const [postsdatas, setPostDatas] = useState(pd);
    let navigate = useNavigate();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                {
                    postsdatas.map(postdata => (
                        <Post
                            code={postdata.code}
                            caption={postdata.caption}
                            likes={postdata.likes}
                            id={postdata.likes}
                            display_src={postdata.display_src}


                        />
                    ))
                }


            </Container>
        </React.Fragment>
    );
}
