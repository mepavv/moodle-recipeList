import { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import './SlidingTable.css';

const StyledCard = styled(Card)`
  height: 100%;
`;

const SlidingTable = ({ ingredients }) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ingredients.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleIngredients = ingredients.slice(startIndex, startIndex + itemsPerPage);

  const renderPagination = () => {
    if (ingredients.length <= itemsPerPage) {
      return (
        <div className="pagination-container">
          <Button disabled>1</Button>
        </div>
      );
    } else if (totalPages > 1) {
      return (
        <div className="pagination-container">
          {[...Array(totalPages)].map((_, index) => (
            <Button 
              key={index + 1} 
              onClick={() => handlePageChange(index + 1)} 
              disabled={index + 1 === currentPage}
              className="pagination-button"
            >
              {index + 1}
            </Button>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="sliding-table-container">
      <TableContainer component={Paper}>
        <Table aria-label="ingredients table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: 'bold', backgroundColor: 'lightgrey', minWidth: '150px' }}>
                Ingredients
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleIngredients.map((ingredient, index) => (
              <TableRow key={index}>
                <TableCell style={{ minWidth: '150px' }}>{ingredient}</TableCell>
              </TableRow>
            ))}
            {visibleIngredients.length < itemsPerPage && (
              Array.from({ length: itemsPerPage - visibleIngredients.length }).map((_, index) => (
                <TableRow key={`empty-${index}`}>
                  <TableCell style={{ minWidth: '150px' }}>&nbsp;</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {renderPagination()}
    </div>
  );
};

export const RecipesList = ({ recipes }) => {
  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={3}
      padding={{ xs: 0, md: 3, lg: 5 }}
    >
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <StyledCard>
            <CardMedia
              component="img"
              height="300"
              image={recipe.recipe.image}
              title={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
            </CardContent>
            <CardContent className="card-content">
              <SlidingTable ingredients={recipe.recipe.ingredientLines} />
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};