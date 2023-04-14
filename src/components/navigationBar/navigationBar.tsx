import { useState } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { ratingFilter } from "../../redux/slices/booksSlice";
import { SearchProps } from "../../types/interfaces";
import { SvgCollection } from "../common/svg/svg";
import "./navigationBar.scss";

const NavigationBar: React.FC<SearchProps> = ({
  viewType,
  search,
  setSearch,
  changeViewHandler,
}) => {
  const [checkedRating, setCheckedRating] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const sortHandler = () => {
    setCheckedRating((checkedRating) => !checkedRating);
    dispatch(ratingFilter(checkedRating));
  };

  return (
    <div className="books_filter--content">
      <div className="search_container">
        <input
          className="search_input"
          type="text"
          name="search"
          id="search"
          placeholder="Поиск книги или автора…"
          onChange={(e) => setSearch(e.target.value)}
        />
        <SvgCollection id={search ? "ActionSearch" : "Search"} />
      </div>

      <div className="rating_container">
        <input
          className="rating"
          type="checkbox"
          id="rating"
          name="rating"
          onChange={sortHandler}
        />

        <label className="rating-content_label" htmlFor="rating">
          <SvgCollection id="Rating" />
          По рейтингу
        </label>
      </div>

      <div className="list_view_container">
        <input
          className="tile_books--radio"
          type="radio"
          id="tile_books"
          name="tile_books"
          value="view-type-tile"
          checked={viewType === "view-type-tile"}
          onChange={(e) => changeViewHandler(e.target.value)}
        />
        <label className="tile_books_label" htmlFor="tile_books">
          <SvgCollection id="ListViewActive" />
        </label>

        <input
          className="list_books--radio"
          type="radio"
          id="list_books"
          name="list_books"
          value="view-type-list"
          checked={viewType === "view-type-list"}
          onChange={(e) => changeViewHandler(e.target.value)}
        />

        <label className="list_books_label" htmlFor="list_books">
          <SvgCollection id="ListView" />
        </label>
      </div>
    </div>
  );
};

export default NavigationBar;
