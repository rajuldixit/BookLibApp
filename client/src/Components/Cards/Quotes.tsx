import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  QuotesText1,
  QuotesText2,
  QuotesText3,
  QuotesText4,
} from "../../Utils/constants";
import image1 from "../../Assets/images/650782.jpg";
import image2 from "../../Assets/images/wp2036906.jpg";
import image3 from "../../Assets/images/wp2036907.jpg";
import image4 from "../../Assets/images/photo-book-universe-opened-magic-book_671352-7536.avif";

const Quotes = () => {
  return (
    <Stack direction={"row"} justifyContent={"center"} spacing={4} padding={2}>
      <Box width={"300px"}>
        <Card>
          <CardMedia component="img" height={"180px"} image={`${image1}`} />
          <CardContent sx={{ height: "100px" }}>
            <Typography variant="body2" color="text.secondary">
              {QuotesText1}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box width={"300px"}>
        <Card>
          <CardMedia component="img" height={"180px"} image={`${image2}`} />
          <CardContent sx={{ height: "100px" }}>
            <Typography variant="body2" color="text.secondary">
              {QuotesText2}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box width={"300px"}>
        <Card>
          <CardMedia component="img" height={"180px"} image={`${image3}`} />
          <CardContent sx={{ height: "100px" }}>
            <Typography variant="body2" color="text.secondary">
              {QuotesText3}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box width={"300px"}>
        <Card>
          <CardMedia component="img" height={"180px"} image={`${image4}`} />
          <CardContent sx={{ height: "100px" }}>
            <Typography variant="body2" color="text.secondary">
              {QuotesText4}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Stack>
  );
};

export default Quotes;
