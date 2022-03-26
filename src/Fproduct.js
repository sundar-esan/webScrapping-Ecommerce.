import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export function Fproduct({ image, tittle,rating, price, finalpricewithoffer }) {
  const styles = { color: rating >= 4 ? "green" : "red" };
  
  return (
    <Card className="product-container">
      <img className="product-img" src={image} alt={tittle} />
      <CardContent>
        <h2 className="product-tittle">{tittle}</h2>
        <p style={styles} className="product-rating">
          Rating:<b>{rating}</b>
        </p>
        <p className="price">Price:<b>{price}</b></p>

        <p className="final-price">Final-Price-with-offer: <b>{finalpricewithoffer}</b></p>
      </CardContent>
    </Card>
  );
}
