export default function Galary({ data }) {
  return (
    <div className="galary-wrapper">
      {data.map((el) => (
        <div key={el.img} className="galary-item">
          <a rel="noreferrer" target="_blank" href={el.url}>
            <img src={`img/${el.image}`} alt="img" />
          </a>
        </div>
      ))}
    </div>
  );
}
