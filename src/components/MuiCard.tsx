import { Card, CardContent, Grid, Typography } from "@mui/material";

const MuiCard = () => {
  const cards = Array.from({ length: 6 });
  return (
    <Grid container spacing={2}>
      {cards.map(() => (
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Title
              </Typography>
              <Typography variant="body2">Body</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MuiCard;
