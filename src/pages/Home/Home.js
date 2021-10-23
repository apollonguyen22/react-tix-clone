import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
//Kết nối redux
import { useSelector, useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/RSlick/MultipleRowSlick'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
import { layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapActions';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';

export default function Home(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    console.log('propsHome', arrFilm);
    // props.match.params

    // const renderFilms = () => {
    //     return arrFilm.map((phim, index) => {
    //         return <Film key={index} />


    //     })
    // }

    useEffect(()=>{
        const action = layDanhSachPhimAction();
        dispatch(action); //dispatch function từ thunk

        dispatch(layDanhSachHeThongRapAction());

    },[])

    // const getProfile =() => {
    //     dispatch(layThongTinNguoiDungAction({
    //         taiKhoan: "testdangky"
    //     }))
    // }
    
    return (
        <div>
            <HomeCarousel />

            {/* <button className="bg-red-500 p-3 text-white" onClick={()=>getProfile()}>Get Thong tin người dùng</button> */}

            <section className="text-gray-600 body-font" >
                <div className="px-5 py-24 mx-auto max-w-6xl" >

                    <MultipleRowSlick arrFilm={arrFilm}/>
                    {/* <div className="flex flex-wrap  " style={{ justifyContent: 'center' }}>
                        {renderFilms()}
                    </div> */}
                </div>
            </section>

            <div className="mx-36">
                <HomeMenu  heThongRapChieu={heThongRapChieu}/>

            </div>
        </div>
    )
}
