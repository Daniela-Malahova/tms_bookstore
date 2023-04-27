import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import { BooksProps } from "../../../../types/interfaces";

const ListItem: React.FC<BooksProps> = ({
  id,
  title,
  rating,
  issueYear,
  authors,
  category,
  image,
}) => {
  return (
    <div className="books_item--container_list">
      <div className="list_img">
        <img
          src={
            image
              ? image.url
              : require("../../../../assets/default_book_img.png")
          }
          alt="bookImage"
        />
      </div>
      <div className="list_content">
        <p className="books-item--title_list">
          {title.length > 46 ? `${title.slice(0, 46)}...` : title}
        </p>
        <p className="books-item--author_list">
          {authors}, {issueYear}
        </p>

        <div className="list_rating_btn">
          <p className="books_item--rating_list">
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
          <NavLink to={`books/../../${category}/${id}`}>
            <button className="books-item--btn">Подробнее</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
