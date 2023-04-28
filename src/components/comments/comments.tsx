import Rating from "@mui/material/Rating";
import { CommentsReviewProps } from "../../types/interfaces";

import "./comments.scss";

const Comments: React.FC<CommentsReviewProps> = ({
  comments,
  isAccordionOpen,
}) => {
  const getCommentDate = (str: string) => {
    const date = str.slice(0, 10);
    const reverse = date.split("-").reverse().join(" ");
    const month = reverse.slice(3, 5);
    let monthStr = "";

    switch (month) {
      case "01":
        monthStr = "Январь";
        break;
      case "02":
        monthStr = "Февраль";
        break;
      case "03":
        monthStr = "Март";
        break;
      case "04":
        monthStr = "Апрель";
        break;
      case "05":
        monthStr = "Май";
        break;
      case "06":
        monthStr = "Июнь";
        break;
      case "07":
        monthStr = "Июль";
        break;
      case "08":
        monthStr = "Август";
        break;
      case "09":
        monthStr = "Сентябрь";
        break;
      case "10":
        monthStr = "Октябрь";
        break;
      case "11":
        monthStr = "Ноябрь";
        break;
      case "12":
        monthStr = "Декабрь";
        break;
    }

    let replaceData = reverse.replace(month, monthStr);

    return replaceData;
  };

  const defaultAvatar = require("../../assets/default_review_avatar.png");

  const commentItems = comments?.map(
    ({ id, rating, text, createdAt, user }) => (
      <div key={id} className="comment_item">
        <div className="comment_item--header">
          <img
            src={user.avatarUrl ? user.avatarUrl : defaultAvatar}
            alt="userAvatar"
            className="comment_user--avatar"
          />
          <div className="reviews_user--info">
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{getCommentDate(createdAt)}</div>
          </div>
        </div>

        <Rating
          name="half-rating-read"
          value={rating ? rating : 0}
          precision={0.5}
          readOnly
        />

        {text ? <div className="comment_message">{text}</div> : null}
      </div>
    )
  );

  return (
    <div
      className={
        isAccordionOpen
          ? "comments_component"
          : "comments_component comments_component--hide"
      }
    >
      {commentItems}
    </div>
  );
};

export default Comments;
