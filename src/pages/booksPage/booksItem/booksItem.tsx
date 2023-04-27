import { BooksProps } from "../../../types/interfaces";
import ListItem from "./listItem/listItem";
import TileItem from "./tileItem/tileItem";

import "./booksItem.scss";

const BooksItem: React.FC<BooksProps> = ({
  viewType,
  id,
  title,
  rating,
  issueYear,
  authors,
  categories,
  category,
  image,
}) => {
  const commonProps = {
    id,
    title,
    rating,
    issueYear,
    authors,
    categories,
    category,
    image,
  };
  return (
    <>
      {viewType === "view-type-tile" ? (
        <TileItem {...commonProps} />
      ) : (
        <ListItem {...commonProps} />
      )}
    </>
  );
};

export default BooksItem;
