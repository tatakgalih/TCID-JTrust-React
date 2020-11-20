import logoWhite from "../images/logo_white.png";
import facebookIcon from "../images/icon_facebook.png";
import instagramIcon from "../images/icon_instagram.png";
import youtubeIcon from "../images/icon_youtube.png";
import linkedinIcon from "../images/icon_linkedin.png";
import askWhite from "../images/img_ask_white.png";
import ojkWhite from "../images/logo_ojk_white.png";
import lpsWhite from "../images/logo_lps_white.png";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-area">
          <SocialMedia />
          <Address />
          <Partner />
        </div>
      </div>
    </section>
  );
}

function SocialMedia() {
  const links = [
    {
      image: `${facebookIcon}`,
      url: `https://www.facebook.com/JTrustBankID`,
    },
    {
      image: `${instagramIcon}`,
      url: `https://www.instagram.com/jtrustbank/`,
    },
    {
      image: `${youtubeIcon}`,
      url: `https://www.youtube.com/channel/UC9ms_E48zUIKGh-uWrx4q0g`,
    },
    {
      image: `${linkedinIcon}`,
      url: `https://id.linkedin.com/company/bank-jtrust-indonesia?trk=public_profile_topcard_current_company`,
    },
  ];
  return (
    <div className="social-media">
      <div className="logo">
        <a href="https://www.jtrustbank.co.id/">
          <img src={logoWhite} alt="" />
        </a>
      </div>
      <div className="list">
        <ListMedia data={links} />
      </div>
    </div>
  );
}

function ListMedia(props) {
  const links = props.data;
  const linkComponent = links.map((link, idx) => {
    return (
      <li key={idx}>
        <a href={link.url}>
          <img src={link.image} alt="" />
        </a>
      </li>
    );
  });
  return <ul>{linkComponent}</ul>;
}

function Address() {
  return (
    <div className="address">
      <p>Kantor Pusat</p>
      <p>
        Sahid Sudirman Center, Lt. 33.
        <br />
        Jl. Jend. Sudirman No. 86
        <br />
        Jakarta 10220, Indonesia
        <br />
        Telp. +6221 2926 1111
      </p>
    </div>
  );
}

function Partner() {
  const links = [
    {
      image: `${askWhite}`,
      url: `https://www.jtrustbank.co.id/`,
    },
  ];
  return (
    <div className="media-partner">
      <ListMedia data={links} />
      <ul>
        <li>
          J Trust Bank Terdaftar dan Diawasi oleh Otoritas Jasa Keuangan
          <img src={ojkWhite} />
        </li>
        <li>
          J Trust Bank Merupakan Peserta Penjaminan LPS
          <img src={lpsWhite} />
        </li>
      </ul>
    </div>
  );
}
export default Contact;
