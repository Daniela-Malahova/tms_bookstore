import { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { AddedCommentsProps } from "../../types/interfaces";
import { v4 as uuidv4 } from "uuid";

import "./addedComments.scss";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { putComment } from "../../redux/slices/bookSlice";

// {
//     "id": 1150,
//     "rating": 5,
//     "text": "Отличная, рекомендую",
//     "createdAt": "2023-03-22T05:20:07.931Z",
//     "user": {
//      "commentUserId": 1023,
//      "firstName": "Артём",
//      "lastName": "Ласко",
//      "avatarUrl": null
//     }

const AddedComments: React.FC<AddedCommentsProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [rating, setRating] = useState<number | null>(0);
  const [commentMessage, setCommentMessage] = useState<string>("");

  const userName = localStorage.getItem("userName");
  const commentDate = new Date().toISOString();

  const firstName = userName?.split(" ", 2)[0];
  const lastName = userName?.split(" ", 2)[1];

  const dispatch = useAppDispatch();

  const getCommentHandler = (e: any) => {
    e.preventDefault();
    if (commentMessage) {
      const newComment = {
        id: uuidv4(),
        rating: rating,
        text: commentMessage,
        createdAt: commentDate,
        user: {
          commentUserId: uuidv4(),
          firstName: firstName,
          lastName: lastName,
          avatarUrl: null,
        },
      };

      dispatch(putComment(newComment));
    }

    setRating(0);
    setCommentMessage("");
    setIsModalOpen(false);
  };

  const clickHandler = (e: any) => {
    if (e.target.className === "added_comment--wrapper") {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("click", clickHandler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("click", clickHandler);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div className={isModalOpen ? "added_comment--wrapper" : "added_hide"}>
      <div>
        <h2 className="comment-title">Пожалуйста, оцените книгу:</h2>
        <form onSubmit={getCommentHandler}>
          <p className="comment-rating">
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              onChange={(event, rating) => {
                setRating(rating);
              }}
            />
          </p>
          <div className="comment-user--data">
            <p>Имя и фамилия: </p>
            <p className="comment-user">{userName}</p>
          </div>

          <p className="comment-input">
            <span className="comment-input--title">
              Опишите Ваше впечатление о книге:
            </span>
            <textarea
              name="text"
              value={commentMessage}
              onChange={(e) => setCommentMessage(e.target.value)}
            ></textarea>
          </p>
          <p className="comment_btn--cintainer">
            <button type="submit" className="comment-btn">
              Отправить
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AddedComments;
