import Rating from "@mui/material/Rating";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/loader";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { clearBook, getBook } from "../../redux/slices/bookSlice";
import Error from "../../components/error/error";
import Slider from "../../components/slider/slider";
import BreadCrumbs from "../../components/breadCrumbs/breadCrumbs";
import BookReviews from "../../components/bookReviews/bookReviews";

import "./bookPage.scss";

const BookPage = () => {
  const { loading, error, book } = useAppSelector((state) => state.book);
  const path = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (path.id) {
      dispatch(getBook(path.id));
    }
    return () => {
      dispatch(clearBook());
    };
  }, [path.id]);

  const defaultImg = require("../../assets/default_book_img.png");

  const showImages = () => {
    if (book.images) {
      if (book.images.length > 1) {
        return <Slider img={book.images} />;
      } else {
        return <img src={book.images[0].url} alt="bookImg" />;
      }
    } else {
      return <img src={defaultImg} alt="bookImg" />;
    }
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {path.category && (
        <BreadCrumbs categoryPath={path.category} title={book.title} />
      )}
      <div className="book_wrapper">
        <div className="book_info">
          <div className="book_info--img">{showImages()}</div>
          <div className="book_info--content">
            <p className="book_info--title">{book.title}</p>
            <p className="book_info--author">
              {book.authors} , {book.issueYear}
            </p>
            <div className="book-description-desktop">
              <p className="book_info--about">О книге</p>
              <p className="book_info--epilogue">{book.description}</p>
            </div>
          </div>
        </div>
        <div className="book-description-mobile">
          <p className="book_info--about">О книге</p>
          <p className="book_info--epilogue">{book.description}</p>
        </div>
        <div className="book_rating">
          <p className="book_title">Рейтинг</p>
          <div className="book-rating--item">
            <Rating
              name="half-rating-read"
              value={book.rating ? book.rating : 0}
              precision={0.5}
              readOnly
            />
            {!book.rating ? (
              <span className="rating">ещё нет оценок</span>
            ) : (
              <span className="rating">{book.rating}</span>
            )}
          </div>
        </div>
        <p className="book_title">Подробная информация</p>
        <div className="book_about">
          <div className="book_about--first">
            <p className="book_about-info">Издательство</p>
            <p className="book_about-info">Год издания</p>
            <p className="book_about-info">Страниц</p>
            <p className="book_about-info">Переплёт</p>
            <p className="book_about-info">Формат</p>
          </div>
          <div className="book_grig">
            <p className="book_about-data">{book.publish}</p>
            <p className="book_about-data">{book.issueYear}</p>
            <p className="book_about-data">{book.pages}</p>
            <p className="book_about-data">{book.cover}</p>
            <p className="book_about-data">{book.format}</p>
          </div>

          <div className="book_about--second">
            <p className="book_about-info">Жанр</p>
            <p className="book_about-info">Вес</p>
            <p className="book_about-info">ISBN</p>
            <p className="book_about-info">Изготовитель</p>
          </div>
          <div className="book_grig">
            <p className="book_about-data">{book.categories}</p>
            <p className="book_about-data">{book.weight} г.</p>
            <p className="book_about-data">{book.ISBN}</p>
            <p className="book_about-data">{book.producer}</p>
          </div>
        </div>

        <BookReviews comments={book.comments} />
      </div>
    </>
  );
};

export default BookPage;
