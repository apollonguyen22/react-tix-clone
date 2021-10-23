import { SET_CAROUSEL } from "../actions/types/CarouselType";


const stateDefault = {
    arrImg: [
        {
            maBanner: 1,
            maPhim: 1282,
            hinhAnh:
                "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png",
        },
        {
            maBanner: 2,
            maPhim: 1283,
            hinhAnh:
                "https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg",
        },
        {
            maBanner: 3,
            maPhim: 1284,
            hinhAnh:
                "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png",
        },

    ],

}


export const CarouselReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case SET_CAROUSEL: {
            // state.arrImg = action.arrImg;
            return { ...state, arrImg: action.arrImg }
        }

        default: return { ...state }
    }

}