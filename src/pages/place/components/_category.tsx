import { TMapCategories } from "@/types";
import { Box, Grid, Icon } from "@mui/material";

interface ICategoryProps {
  category: TMapCategories;
}

export default function Category({ category }: ICategoryProps) {
  return (
    <Grid sx={styles.cardContainer}>
      <Box sx={styles.categoryCardStyle}>
        <p>{category}</p>
      </Box>
    </Grid>
  )
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    mt: 2
  },
  categoryCardStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 1,
    borderRadius: 10,
    p: 1,
    backgroundColor: '#F5F5F5',
  }
}