import Header from '../../components/Header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Home() {
    return (
        <div>
            <Header />
            <Container className="container">
                <Grid container spacing={3}>
                    <Grid className="black-border" item xs={2}></Grid>
                    <Grid className="black-border" item xs={8}></Grid>
                    <Grid className="black-border" item xs={2}></Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Home;