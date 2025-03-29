
import GlobalSwiper from "../../../components/channel-swiper/GlobalSwiper";
import addchanel from "@/assets/images/add-user.svg"
import telegram from "@/assets/images/telegram.svg";
import avatar from "@/assets/images/avtar.svg";
import burgerIcon from "@/assets/icons/burger.svg";

const Advertisement = () => {
    const slides = [
        { image: telegram, title: "Все каналы", selected: true, },
        { image: avatar, title: "Осторожно, новости", selected: false, },
        { image: telegram, title: "Все каналы", selected: false, },
        { image: avatar, title: "Осторожно, новости", selected: false, },
        { image: telegram, title: "Все каналы", selected: false, },
        { image: avatar, title: "Осторожно, новости", selected: false, },
        { image: telegram, title: "Все каналы", selected: false, },
        { image: avatar, title: "Осторожно, новости", selected: false, },
        { image: telegram, title: "Все каналы", selected: false, },
        { image: avatar, title: "Осторожно, новости", selected: false, },
        { image: telegram, title: "Все каналы", selected: false, },
        { image: avatar, title: "Осторожно, новости", selected: false, },
        { image: telegram, title: "Все каналы", selected: false, },
    ];
    return (
        <div className="main">
            <div className="advertisement-page">
                <div className="channels">
                    <GlobalSwiper slides={slides} />
                    <button className='add-channel-btn'>
                        <img src={addchanel} alt="" />
                        Добавить канал
                    </button>
                    <button className='burger-btn'>
                        <img src={burgerIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Advertisement