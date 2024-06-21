import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: props.bgColor }}>
        <Toolbar>
          <img
            src="https://prowly-prod.s3.eu-west-1.amazonaws.com/uploads/press_rooms/company_logos/1322/b5d820fd0c10830b1e683b5f1db8e9c9.png"
            alt="Logo"
            style={{ height: 130, marginRight: 10 }}
          />
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Moodle
          </Typography>
          <Button color="inherit">Extranet</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
