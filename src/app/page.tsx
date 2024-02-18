import { Container } from "@/components/Container";
import { AppBar, Toolbar, Typography } from "@mui/material";


export default function Home() {
  return (
    <>
    <AppBar position="static"> 
    <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tickets List Exporter 
          </Typography>
        </Toolbar>
        </AppBar>
    <Container/>
    </>
  );
}
