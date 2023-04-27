import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import { BooksProps } from "../../../../types/interfaces";

const TileItem: React.FC<BooksProps> = ({
  id,
  title,
  rating,
  issueYear,
  authors,
  category,
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
      <NavLink to={`books/../../${category}/${id}`}>
        <button className="books-item--btn">Подробнее</button>
      </NavLink>
    </div>
  );
};

export default TileItem;
