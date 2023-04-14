import { useAppDispatch } from "../../hooks/reduxHooks";
import { closeBooksError } from "../../redux/slices/booksSlice";
import { SvgCollection } from "../common/svg/svg";

import "./error.scss";

const Error = () => {
  const dispatch = useAppDispatch();
  const closeErrorHandler = () => {
    dispatch(closeBooksError());
  };

  return (
    <div className="error_component--wrapper">
      <div className="error_component--content">
        <div>
          <SvgCollection id="NegativeImg" />
          <h3 className="error_component--message">
            Что-то пошло не так. Обновите страницу через некоторое время.
          </h3>
        </div>
        <button className='error_component--btn' onClick={closeErrorHandler}>
          <SvgCollection id="CrossImg" />
        </button>
      </div>
    </div>
  );
};

export default Error;
