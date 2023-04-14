import Rating from "@mui/material/Rating";
import { BooksProps } from "../../../../types/interfaces";

const TileItem: React.FC<BooksProps> = ({
  id,
  title,
  rating,
  issueYear,
  authors,
  categories,
  image,
}) => {
  return (
    <div className="books_item--container">
      <img
        src={
          image ? image.url : require("../../../../assets/default_book_img.png")
        }
        alt="bookImage"
      />

      <p className="books_item--rating">
        {rating ? (
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
        ) : (
          "ещё нет оценок"
        )}
      </p>
      <p className="books-item--title">
        {title.length > 27 ? `${title.slice(0, 27)}...` : title}
      </p>
      <p className="books-item--author">
        {authors}, {issueYear}
      </p>
      <button className="books-item--btn">Купить</button>
    </div>
  );
};

export default TileItem;
