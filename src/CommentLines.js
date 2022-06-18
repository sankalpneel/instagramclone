import React from 'react'

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
function CommentLines(props) {
    return (

        <Box
            sw={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: 5
            }}

        >

            <Typography
                color="blue"
                align="left"
                marginRight={2}
                sx={{
                    fontWeight: 'medium',
                    marginLeft: 2
                }}
            >
                {props.user + " :"}
            </Typography>
            <Typography

                align="left"
                sx={{ fontWeight: 'light', marginLeft: 5 }}
            >
                {props.text + " "}
            </Typography>
            <Divider
                variant='middle'
                sx={{ borderBottomWidth: 3 }} />
        </Box>
    )
}

export default CommentLines
