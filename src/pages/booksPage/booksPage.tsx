import { useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../components/navigationBar/navigationBar";
import SearchNotification from "../../components/searchNotification/searchNotification";
import { useAppSelector } from "../../hooks/reduxHooks";
import { BooksPageProps } from "../../types/interfaces";
import BooksItem from "./booksItem/booksItem";
import "./booksPage.scss";

const BooksPage: React.FC<BooksPageProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const [viewType, setViewType] = useState("view-type-tile");
  const [search, setSearch] = useState<string>("");
  const { books, onLastPage } = useAppSelector((state) => state.books);
  const { categories } = useAppSelector((state) => state.categories);
  const { category } = useParams();
  const selectedCategory = categories.find((item) => item.path === category);

  const changeViewHandler = (view: string) => {
    setViewType(view);
  };

  const getFiltredBooks = (category: string | undefined, searchStr: string) => {
    if (category) {
      return books
        .filter((book) => book.categories.includes(category))
        .filter(
          (book) =>
            !searchStr ||
            book.title.toLowerCase().includes(searchStr.toLowerCase())
        );
    }
    return books.filter(
      (book) =>
        !searchStr || book.title.toLowerCase().includes(searchStr.toLowerCase())
    );
  };

  const booksCards = getFiltredBooks(selectedCategory?.name, search).map(
    (card) => (
      <BooksItem
        id={card.id}
        viewType={viewType}
        key={card.id}
        title={card.title}
        rating={card.rating}
        categories={card.categories}
        issueYear={card.issueYear}
        authors={card.authors}
        image={card.image}
        category={category}
      />
    )
  );

  const getContent = () => {
    if (search && !booksCards.length) {
      return <SearchNotification message="По запросу ничего не найдено" />;
    }

    if (!booksCards.length) {
      return <SearchNotification message="В этой категории книг ещё нет" />;
    }
    return booksCards;
  };

  const moreBtn = !onLastPage && !!booksCards?.length && (
    <button
      className="books_more--btn"
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Загрузить ещё...
    </button>
  );

  return (
    <div className="books_main_container">
      <NavigationBar
        search={search}
        setSearch={setSearch}
        viewType={viewType}
        changeViewHandler={changeViewHandler}
      />
      <div
        className={
          viewType === "view-type-tile"
            ? "book-grid_container"
            : "book-grid_container__list"
        }
      >
        {getContent()}
      </div>
      <div className="books-more_btn--container">{moreBtn}</div>
    </div>
  );
};

export default BooksPage;
