import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Card from "../components/Card"
import ShowTabel from "../components/ShowTable"
import Riwayat from "../components/Riwayat"
import Nav from "../components/Nav"
import Product from "../components/Product"

const daftarProdukOppo = [
  {image: "../image/oppo/OPPO A16.jpg" ,judul : "OPPO A16 3GB/32GB", isi : "13MP Triple Camera, HD+ Eye-care Display, 5000mAh"},
  {image: "../image/oppo/OPPO A54.jpg" ,judul : "OPPO Reno5 F 8GB/128GB", isi : "48MP Quad Camera, 30W VOOC Flash Charge 4.0, Dual-View Video"},
];

const daftarProdukOppo2 = [
  {image: "../image/oppo/OPPO A95.jpg" ,judul : "OPPO A54 6/128GB", isi : "IPX4 Water Resistant, 16MP Selfie Camera, 5000mAh Battery, 18W Fast Charging"},
  {image: "../image/oppo/OPPO RENO5 F.jpg" ,judul : "OPPO A95 8GB/128GB", isi : "33W Flash Charge, 5000mAh Battery, NFC, 48MP AI Triple Camera"},
];

const daftarProdukXiaomi = [
  {image: "../image/xiaomi/Redmi Note 10 Pro.jpg" ,judul : "Xiaomi Redmi Note 10 Pro (8GB+128GB)", isi : "AMOLED 6.67, 108MP Quad Kamera, Snapdragon 732G, Baterai 5020mAh"},
  {image: "../image/xiaomi/Redmi Note 10S.jpg" ,judul : "Xiaomi Redmi Note 10S (8GB+128GB)", isi : "Helio G95, 64MP Quad Kamera, Layar 6.43 inch, Super AMOLED, 5000mAh"},
];

const daftarProdukXiaomi2 = [
  {image: "../image/xiaomi/POCO M3 Pro.jpg" ,judul : "POCO M3 Pro 5G (4GB+64GB)", isi : "Dimensity 700, 48MP AI Triple Kamera Layar, 90Hz 6.5 inch FHD+, 5000mAh NFC"},
  {image: "../image/xiaomi/POCO X3 GT.jpg" ,judul : "POCO X3 GT 8GB+256GB", isi : "6nm Dimensity1100, 64MP Triple Kamera Layar, DotDisplay FHD+ 6,6 inch 120Hz, 5000mAh"},
];

function App() {
  return (
    <div>
      <Nav/>
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            {daftarProdukOppo.map((agt, indeks)=>(
              <Product image={agt.image} judul={agt.judul} isi={agt.isi}/>
            ))}
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            {daftarProdukOppo2.map((agt, indeks)=>(
              <Product image={agt.image} judul={agt.judul} isi={agt.isi}/>
            ))}
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            {daftarProdukXiaomi.map((agt, indeks)=>(
              <Product image={agt.image} judul={agt.judul} isi={agt.isi}/>
            ))}
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            {daftarProdukXiaomi2.map((agt, indeks)=>(
              <Product image={agt.image} judul={agt.judul} isi={agt.isi}/>
            ))}
          </div>
        </div>
      </div>
      <br />
      <Footer/>
    </div>
  )
}

export default App
