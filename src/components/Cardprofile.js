import acsent from "../assets/logo.png";
import "../css/style.css";
import logo from "../assets/logo.png"
const Cardprofile = () => {
  return (
    // 1. Inline Css
    
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(" + { acsent } + ")",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign:"200px",
      }}
    >
      {/* 2. Css File */}

      <div className="card" >
        <img src={logo} width="100px"/>
        <div align="center">
          <h1>PROGRAMING</h1>
        </div>
        <div align="center">
          <h2>Fandi Kurniawan</h2>
        </div>
        <div>
          Saya seorang siswa SMKN 6 Jember,Jurusan Rekayasa Perangkat Lunak.
        </div>
        <div>Alamat : Gambirono</div>
        <div>Kecamatan   : Bangsalsari</div>
        <div>Kabupaten   : Jember</div>
        <div>No_Hp  :087884333031</div>
      </div>
    </div>
  );
};

export default Cardprofile;
