import Container from "@mui/material/Container";
import Typography  from "@mui/material/Typography";
import Box from "@mui/material/Box"
import QuiltedImageList from "../components/ImageCollage"; 
import CustomizedAccordions from "../components/Accodian";




const Tour = () => <Container>
<Typography variant="h3" component="h1" marginTop={3} >
    Immerse into the Falls
</Typography>
<Box marginTop={3} sx={{ display: "flex" }}>
<img
  src="https://media.timeout.com/images/105124791/750/422/image.jpg"
  height={325}
/>
<QuiltedImageList />
</Box>
<Typography variant="h6" component="h4" marginTop={3}>
About this ticket
</Typography>
<Box sx={{ display: "flex" }}>
<Typography variant="paragraph" component="p" marginY={3}>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
  voluptates rem quos delectus debitis earum modi, ipsum veritatis.
  Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
  omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
  quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
  consectetur, adipisicing elit. Exercitationem officiis commodi beatae
  animi incidunt necessitatibus aut provident ad ex. Saepe!
</Typography>
</Box>
<Typography variant="h6" component="h4" marginBottom={3}>
Frequently Asked Questions
</Typography>

</Container>
export default Tour;