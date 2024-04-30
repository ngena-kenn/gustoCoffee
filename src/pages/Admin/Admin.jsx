import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

function Admin() {
  return (
    <div>
      <h1>Panel d'administration</h1>
      <Grid container spacing={5}>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Utilisateurs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gérer les utilisateurs
              </Typography>
              <Link to="/admin/users">
                <Button variant="contained" color="primary">
                  Accéder
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Formules
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gérer les formules
              </Typography>
              <Link to="/admin/formules">
                <Button variant="contained" color="primary">
                  Accéder
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Réservations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gérer les réservations
              </Typography>
              <Link to="/admin/reservation">
                <Button variant="contained" color="primary">
                  Accéder
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Messages
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gérer les messages
              </Typography>
              <Link to="/admin/messages">
                <Button variant="contained" color="primary">
                  Accéder
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                NewsLetter
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gérer la newsletter
              </Typography>
              <Link to="/admin/newsletter">
                <Button variant="contained" color="primary">
                  Accéder
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Admin;
