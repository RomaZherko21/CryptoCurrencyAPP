import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Error(props) {
    return (
        <React.Fragment>
            <Typography component="p" variant="h2" style={{"textAlign":"center", "marginTop": "3em"}}>
                Error: {props.message}
            </Typography>
        </React.Fragment>
    );
}