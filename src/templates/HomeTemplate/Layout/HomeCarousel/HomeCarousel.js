import React from 'react'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux'
import './HomeCarousel.css';

const contentStyle = {
    paddingBottom: "43%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

};

export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer)

    // const dispatch = useDispatch();

    //Sẽ tự kích hoạt khi component load ra 
    // useEffect( () => {

    //     //1 action = {type:'',data}
    //     //2 (phải cài middleware): callBackFunction (dispatch)

    //     // const action = getCarouselAction(1);

    //     dispatch(getCarouselAction());
    // }, [])


    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className="w-full h-0 object-cover hidden opacity-0" alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (

        <Carousel autoplay>
            {renderImg()}
        </Carousel>

    )
}
