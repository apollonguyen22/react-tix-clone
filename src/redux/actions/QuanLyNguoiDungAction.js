import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { DANG_KY_ACTION, DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";
import {history} from '../../App'



export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

            if (result.status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data
                });
                //Chuyển hướng đăng nhập về trang trước đó
                history.goBack();
            }

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}


export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try{
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy)

            if(result.status === 200){
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinDangKy: result.data
                });
                history.push("/");
            }
            console.log('dangky',result);
        }catch(e){
            console.log('lỗi đăng ký',e.response.data)
        }
    }
}





export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung(thongTinDangNhap);


            if (result.data.status === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data
                });

            }

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}
