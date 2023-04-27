import { useState } from "react";
import Comments from "../comments/comments";
import { BookReviewsProps } from "../../types/interfaces";
import AddedComments from "../addedComments/addedComments";

import "./bookReviews.scss";

const BookReviews: React.FC<BookReviewsProps> = ({ comments }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="book_reviews">
      <div className="book_title_wrapper">
        <p className="book_title">Отзывы</p>

        {!!comments?.length && (
          <button
            className="book_reviews_btn"
            onClick={() =>
              setIsAccordionOpen((isAccordionOpen) => !isAccordionOpen)
            }
          >
            <img
              src={require("../../assets/chevron.png")}
              alt="showReviews"
              className={isAccordionOpen ? "reviews_open" : ""}
            />
          </button>
        )}
      </div>

      {!!comments?.length && (
        <Comments comments={comments} isAccordionOpen={isAccordionOpen} />
      )}

      <div className="book_info--btn_container">
        <button
          className="book_info--btn"
          onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
        >
          оценить книгу
        </button>
        <AddedComments
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default BookReviews;
