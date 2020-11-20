import tabunganImage from "../images/tabungan-image.png";
import depositoImage from "../images/deposito-image.png";
import produklainImage from "../images/produk-lain-image.png";
function Profits() {
  const datas = [
    {
      image: `${tabunganImage}`,
      title: "TABUNGAN",
    },
    {
      image: `${depositoImage}`,
      title: "DEPOSITO",
    },
    {
      image: `${produklainImage}`,
      title: "PRODUK LAINNYA",
    },
  ];
  return (
    <section className="profits">
      <div className="container">
        <h2>
          <span className="blue-text">Dapatkan Keuntungan Terbaik dari J Trust Bank!!</span>
          <br />
          Untuk Produk J Trust Bank Berikut Ini:
        </h2>
        <Profitlist data={datas} />
      </div>
    </section>
  );
}
function Profitlist(props) {
  const datas = props.data;
  const listComponent = datas.map((data, idx) => {
    return (
      <div key={idx} className="col-3">
        <img src={data.image} alt={data.title} />
        <h4>{data.title}</h4>
      </div>
    );
  });
  return <div className="profits-area">{listComponent}</div>;
}
export default Profits;
