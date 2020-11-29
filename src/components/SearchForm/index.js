import "./SearchForm.css";

const searchForm = () => <div className="search__container">
  <form className="search__form">
    <input type="text" placeholder="Введіть щось для пошуку..."/>
    <button type="submit">ШУКАТИ</button>
  </form>
</div>;

export default searchForm;
