import Header from '../../components/Header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Main from '../../components/Main';

function Home() {
    return (
        <div>
            <Header />
            <Container className="container">
                <Grid container spacing={3}>
                    <Grid className="black-border" item xs={2}></Grid>
                    <Grid className="black-border" item xs={8}><Main /></Grid>
                    <Grid className="black-border" item xs={2}></Grid>
                </Grid>
            </Container>
        </div>

    );
}

export default Home;