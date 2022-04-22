import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AccessTime } from "@mui/icons-material"
import Rating from "@mui/material/Rating"
import { createTheme, ThemeProvider } from '@mui/material';

//we want to manipulate the trypography in mui
const theme = createTheme({
    //mention what to customize
    components: {
        //customizing typography
        MuiTypography: {
            variants: [
                {
                    //if varient=body2 make fontsize 11
                    props: {
                        //to edit the body2 element
                        varient: "body2"
                    },
                    style: {

                        fontSize: 11,

                    }
                },
                {
                    //if varient=body3 make fontsize 11
                    props: {
                        //to edit the body2 element
                        varient: "body3"
                    },
                    style: {

                        fontSize: 9,

                    }
                }]
        }

    }

})


const TourCard = ({tour}) => {
    //wraping all element in ThemeProvider to apply custom settings
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img src={tour.image}
                        alt=""
                        className='img' />
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2">
                            {tour.name}
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                        >
                            <AccessTime sx={{ width: 12.5 }} />
                            <Typography varient="body2" component="p" marginLeft={0.5}>
                                {tour.duration} hours
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }} marginTop={3}>
                            <Rating name="read-only" value={tour.rating} readOnly precision={0.5} size="small" />
                            <Typography varient="body2" component="p" marginLeft={0.5}>
                            {tour.rating}
                            </Typography>
                            <Typography varient="body3" component="p" marginLeft={0.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography varient="h6" component="h3" marginTop={0}>
                                From  c $ {tour.price}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );

}

export default TourCard;