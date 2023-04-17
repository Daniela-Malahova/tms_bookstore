import "./bookPage.scss";

const BookPage = () => {
  return (
    <div className="book_wrapper">
      <div className="book_info">
        <div className="book_info--img">
          <img src={require("../../assets/book_img_big.png")} alt="bookImg" />
        </div>
        <div className="book_info--content">
          <p className="book_info--title">
            Грокаем алгоритмы. Иллюстрированное пособие для программистов
            и любопытствующих
          </p>
          <p className="book_info--author">Адитья Бхаргава, 2019</p>
          <button className="book_info--btn">Купить</button>
          <p className="book_info--about">О книге</p>
          <p className="book_info--epilogue">
            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач,
            и большинство таких задач уже были кем-то решены, протестированы
            и проверены. Можно, конечно, погрузится в глубокую философию
            гениального Кнута, изучить многостраничные фолианты
            с доказательствами и обоснованиями, но хотите ли вы тратить на это
            свое время?
          </p>
          <p className="book_info--epilogue">
            Откройте великолепно иллюстрированную книгу и вы сразу поймете, что
            алгоритмы — это просто. А грокать алгоритмы — это веселое
            и увлекательное занятие.
          </p>
        </div>
      </div>

      <div className="book_rating">
        <p className="book_title">Рейтинг</p>
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
          <p className="book_about-data">Питер</p>
          <p className="book_about-data">2019</p>
          <p className="book_about-data">288</p>
          <p className="book_about-data">Мягкая обложка</p>
          <p className="book_about-data">70х100</p>
        </div>

        <div className="book_about--second">
          <p className="book_about-info">Жанр</p>
          <p className="book_about-info">Вес</p>
          <p className="book_about-info">ISBN</p>
          <p className="book_about-info">Изготовитель</p>
        </div>
        <div className="book_grig">
          <p className="book_about-data">Компьютерная литература</p>
          <p className="book_about-data">370 г</p>
          <p className="book_about-data">978-5-4461-0923-4</p>
          <p className="book_about-data">
            ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш,
            д. 73, лит. А29
          </p>
        </div>
      </div>
      <div className="book_reviews">
        <p className="book_title">Отзывы</p>
        <button className="book_info--btn">оценить книгу</button>
      </div>
    </div>
  );
};

export default BookPage;
