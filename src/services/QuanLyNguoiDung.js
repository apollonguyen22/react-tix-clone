/* eslint-disable no-useless-constructor */
import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    
    layThongTinNguoiDung = (data) => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan?MaNhom=${GROUPID}`,data);
    }

    dangKy = (thongTinDangKy) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`,thongTinDangKy)
    }
  
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
