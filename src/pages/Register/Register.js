/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction';

export default function Register(props) {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP02',
            maLoaiNguoiDung: 'KhachHang',
            hoTen: ''
        },
        onSubmit: values => {
            console.log('thongTinDK',values);
            dispatch(dangKyAction(values))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-6 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Đăng ký</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tên đăng nhập</div>
                            <input name="taiKhoan" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Tên đăng nhập" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </div>
                            </div>
                            <input name="matKhau" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Mật khẩu" />
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Email
                                </div>
                            </div>
                            <input name="email" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="email" placeholder="Email" />
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Số điện thoại
                                </div>
                            </div>
                            <input name="soDt" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="phone" placeholder="Số điện thoại" />
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Họ tên
                                </div>
                            </div>
                            <input name="hoTen" onChange={formik.handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Họ tên" />
                        </div>
                        
                        <div className="mt-10">
                            <button type="submit" className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 text-sm font-display font-semibold text-gray-700 text-center">
                        Đã có tài khoản ? <NavLink to="login" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng nhập</NavLink>
                    </div>
                </div>
            </div>
        </form>

    )
}
