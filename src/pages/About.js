import { Container } from "reactstrap";
import "./About.css";

const AboutPage = () => {
  return (
    <Container className="about shadow-lg p-4 rounded col text-center">
      <div>
        <h1 className="anh1">About Us</h1>

        <p className="ap">
          <i>
            This is a functioning ecommerce platform where a user can sign up, purchase items, and create their own listings as well. A user can manage their listings in the user's dashboard and also view previous orders.
            You'll notice when creating a listing, that the item must be listing as a music or art related item. That's because this project was originally catered to buying/selling music or art related products.
          </i>
        </p>

        <p className="ap">
          <i>
            This platform has all the basic functionality of an ecommerce type platform. Upon purchasing an item, the backend database successfully updates the product's information regarding quanity, how much were purchased, etc.
          </i>
        </p>

      </div>
    </Container>
  );
};

export default AboutPage;
