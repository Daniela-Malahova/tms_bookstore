import { SearchNotificationProps } from "../../types/interfaces";
import "./searchNotification.scss";

const SearchNotification = ({ message }: SearchNotificationProps) => {
  return (
    <div className="search_notification--wrapper">
      <h2 className="search_notification--title">{message}</h2>
    </div>
  );
};

export default SearchNotification;
