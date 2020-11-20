import Button from "./Button";
function Info() {
  return (
    <section className="info">
      <div className="container">
        <div className="info-area">
          <p>
            Dalam rangka <b>memberikan dukungan pada sesama</b>, J Trust Bank menawarkan
            <br />
            program menarik bagi semua masyarakat Indonesia yang melakukan
            <br />
            penempatan dana pada bulan Mei - Juni 2020.
          </p>
          <p>
            J Trust Bank akan memberikan suku bunga untuk produk Tabungan, Deposito Berjangka, dan jenis
            <br />
            produk lainnya yang lebih menarik (<b>+α</b>) dari{" "}
            <b>
              suku bunga yang Anda dapatkan di bank lain dengan
              <br />
              kenyamanan dan keamanan transaksi berstandar Jepang
            </b>
            .
          </p>
          <p>
            <b>Ketentuan</b>:
            <br />- Berlaku untuk Tabungan, Giro maupun Deposito.
            <br />- Berlaku untuk transfer deposit dari bank lain sampai akhir Juni 2020.
            <br />- Berlaku untuk semua nasabah baik Perorangan maupun Perusahaan (Nasabah Baru atau Lama).
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
}
export default Info;
