import React, { useState, useEffect, useRef } from 'react';
import { Link,useParams } from 'react-router-dom';
import Axios from 'axios';
import './style.scss';
import ImgUsers from '../../assets/images/user_icon.png';
import {currencyFormat} from '../../helper';
const Detail = () => {
const [detail, setDetail] = useState({});
  let { CarsId } = useParams();


//   const baseUrl = 'https://633ffc6ed1fcddf69cae3eac.mockapi.io';
// const baseUrl = 'https://6350e0713e9fa1244e4f4cab.mockapi.io'
const baseUrl = 'https://bootcamp-rent-cars.herokuapp.com/customer'


  const fetch = useRef(true);

  const getDetail = ( CarsId) => {
    Axios.get(`${baseUrl}/car/${CarsId}`)
    .then((response) => {
      setDetail(response.data);
    })
    .catch((error) =>
      // handle error
      console.log(error)
    );
  };

  useEffect(() => {
    if (fetch.current) {
      fetch.current = false;
      getDetail( CarsId)
    }
  }, [ CarsId]);

    return (
        <>
            <main className="main">
                <section className="hero-section-details">
                   
                </section>
                {/* <section className="find-result">
                    <div className="container">
                        <div className="find-result-border-details">
                            <h3 style={{textAlign:'center'}}>Pencarianmu</h3>
                            <div className="row">
                                <div className="find-result-form-details">
                                    <div className="form">
                                        <div className="col-lg-3">
                                            <div className="form-border details">
                                                <div className="mb-3">
                                                    <label className="form-label details">Nama Mobil</label>
                                                    <input type="text" className="form-control details" placeholder="Innova" disabled />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border details">
                                                <label className="form-label details">Kategori</label>
                                                <select className="form-select details" disabled>
                                                  
                                                    <option value="3" >6 - 8 orang</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border details">
                                                <label className="form-label details">Harga</label>
                                                <select className="form-select details" disabled>
                                                  
                                                    <option value="2" > Rp. 400.000 - Rp. 600.000 </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="form-border details">
                                                <label className="form-label details">Status</label>
                                                <select className="form-select details" disabled>
                                                    <option >Disewa</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section> */}

               <div className="container">
               <h1 className='text-center mt-2 fw-bold'>Detail Kendaraan</h1>
               </div>
                <section className="car-detail">
                    <div className="container">
                        <div className="car-detail-border">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="package-desc">
                                        <div className="card">
                                            <h3>Tentang Paket</h3>
                                            <h3>Include</h3>
                                            <ul>
                                                <li>Asuransi untuk mobil dan penumpang</li>
                                                <li>Penggunaan hingga 24 jam per hari</li>
                                            </ul>
                                            <h3>Exclude</h3>
                                            <ul>
                                                <li>Bensin, pengambilan/pengembalian di luar kota, dan klaim asuransi</li>
                                            </ul>
                                            <h3>Dokumen yang Dibutuhkan</h3>
                                            <ul>
                                                <li>Mohon diketahui bahwa saat pengambilan mobil, traveler pada Detail Traveler harus menunjukkan KTP/paspor, SIM A, dan kartu kredit asli milik pribadi atau keluarga (foto kartu keluarga atau surat nikah Anda harus dibagikan kepada tempat rental sebelum pengambilan mobil untuk memverifikasi kartu kredit keluarga)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="card-border">
                                        <div className="card">
                                            <img src={detail?.image !== null ? detail?.image : 'https://polteksahid.ac.id/wp-content/uploads/2021/12/placeholder.png'} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{detail.name}</h5>
                                                <ul>
                                                    <img src={ImgUsers} alt="" />
                                                    {/* <li className='ms-2'>6 - 8 orang</li> */}
                                                    <li className='ms-2'>{(()=>{
                                                        switch(detail.category ){
                                                            case 'small': return '2-4 orang';
                                                            case 'medium': return '4-6 orang';
                                                            case 'large': return '6-8 orang';
                                                            default: return '-'
                                                        }
                                                    })()}</li>
                                                    
                                                </ul>
                                                <div className="nominal">
                                                    <h4>Total</h4>

                                                 
                                                    <h4>Rp {currencyFormat(detail.price)} / hari</h4>

                                                   
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <Link to={`/CariMobil`} className='btn btn-warning text-white' style={{marginBottom:'0px'}}>Kembali</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Detail;