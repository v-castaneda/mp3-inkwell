import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {

  const history = useHistory()

  return (
    <main>
      <div>
        <h1 style={{ color: "black" }}>Welcome to The Inkwell</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://miro.medium.com/max/1400/0*G_FqadiMd5ADC0At"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://miro.medium.com/max/1400/0*fcFX2187BSHqoNCR"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1536521642388-441263f88a61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1564956142890-3b3746211005?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

          <div className="text-center">
            <Button variant="dark" onClick={ () => history.push('/places') }>Read Posts</Button>
          </div>
      </div>
    </main>
  );
}

export default Home;