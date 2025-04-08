import { useState, useEffect } from "react";
import GlobalSwiper from "../../../components/channel-swiper/GlobalSwiper";
import "./css/main.css";
import addchanel from "@/assets/images/add-user.svg";
import telegram from "@/assets/images/telegram.svg";
import avatar from "@/assets/images/avtar.svg";
import burgerIcon from "@/assets/icons/burger.svg";
import rublIcon from "@/assets/icons/rubl.svg";
import advertisingIcon from "@/assets/icons/advertising-icon.svg";
import planningIcon from "@/assets/icons/planned.svg";
import walletSearch from "@/assets/icons/wallet-search.svg";
import editIcon from "@/assets/icons/Status_pen_button.svg";
import pauseIcon from "@/assets/icons/Status_pause_button.svg";
import deleteIcon from "@/assets/icons/Status_delete_button.svg";
import pauseblackIcon from "@/assets/icons/Status_pause_button-black.svg";
import deletegradientIcon from "@/assets/icons/Status_delete_button-gradient.svg";
import ChartComponent from "../../../components/ChartComponent/ChartComponent";
import AddChannnel from "../../../components/add-channel-modal/AddChannnel";
import TableModal from "../../../components/table-modal/TableModal";
import AllChanels from "../../../components/all-channels/AllChanels";

function Main() {
  const [addChannel, setAddChannel] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [pauseModal, setPauseModal] = useState(false);
  const [allChannelsModal, setAllChannelsModal] = useState(false);
  document.title = "Главная страница";
  const [selectedAvatar] = useState(() => {
    return (
      localStorage.getItem("selectedAvatar") || "src/assets/avatars/43332.jpg"
    );
  });
  useEffect(() => {
    localStorage.setItem("selectedAvatar", selectedAvatar);
  }, [selectedAvatar]);

  const [subscriber, setSubscriber] = useState(false);
  const slides = [
    { image: telegram, title: "Все каналы", selected: true },
    { image: avatar, title: "Осторожно, новости", selected: false },
    { image: telegram, title: "Все каналы", selected: false },
    { image: avatar, title: "Осторожно, новости", selected: false },
    { image: telegram, title: "Все каналы", selected: false },
    { image: avatar, title: "Осторожно, новости", selected: false },
    { image: telegram, title: "Все каналы", selected: false },
    { image: avatar, title: "Осторожно, новости", selected: false },
    { image: telegram, title: "Все каналы", selected: false },
    { image: avatar, title: "Осторожно, новости", selected: false },
    { image: telegram, title: "Все каналы", selected: false },
    { image: avatar, title: "Осторожно, новости", selected: false },
    { image: telegram, title: "Все каналы", selected: false },
  ];
  const [subscribers, setSubscribers] = useState([
    {
      id: 1,
      title: "По умолчанию",
      selected: false,
    },
    {
      id: 2,
      title: "По возрастанию",
      selected: true,
    },
    {
      id: 3,
      title: "По убыванию",
      selected: false,
    },
  ]);
  const handleSelect = (id) => {
    setSubscribers((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === id,
      })),
    );
  };
  const openMenu = () => {
    setSubscriber(!subscriber);
  };

  const deleteModalOpen = () => {
    setDeleteModal(true);
  };
  const pauseModalOpen = () => {
    setPauseModal(true);
  };

  const openAddChanelModal = () => setAddChannel(true);
  const closeAddChanelModal = () => setAddChannel(false);
  const openAllChannelsModal = () => setAllChannelsModal(true);

  return (
    <div className="main-body">
      <div className="main">
        <div className="main-page">
          <div className="channels">
            <GlobalSwiper slides={slides} />
            <button className="add-channel-btn" onClick={openAddChanelModal}>
              <img src={addchanel} alt="" />
              Добавить канал
            </button>
            <button className="burger-btn" onClick={openAllChannelsModal}>
              <img src={burgerIcon} alt="" />
            </button>
          </div>
          <div className="channels-list-wrapper">
            <ul className="channels-list">
              <li className="list-item active">
                <div className="list-img">
                  <img src={telegram} alt="" />
                </div>
                Все каналы
              </li>
            </ul>
            <div className="right-block">
              <span className="circle"></span>
            </div>
          </div>
          <ul className="advertising-list">
            <li className="list-item">
              <div className="list-img">
                <img src={advertisingIcon} alt="" />
              </div>
              <div className="list-info">
                <h4 className="list-title">Реклам продано</h4>
                <div className="list-body">
                  <span>278 </span>
                  за год
                  <p>/</p>
                  <span>278</span>
                  за текущий месяц
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="list-img">
                <img src={planningIcon} alt="" />
              </div>
              <div className="list-info">
                <h4 className="list-title">Реклам запланировано</h4>
                <div className="list-body">
                  <span>23</span>
                </div>
              </div>
            </li>
            <li className="list-item">
              <div className="list-img">
                <img src={rublIcon} alt="" />
              </div>
              <div className="list-info">
                <h4 className="list-title">
                  250 000 руб <span>доступно</span>
                </h4>
                <div className="list-body">
                  <button className="withdraw-funds-btn">
                    <img src={walletSearch} alt="" />
                    Вывести средства
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className="chart-container">
            <ChartComponent
              title="Рекламные размещения"
              lefttitle="количество"
            />
            <ChartComponent
              title="Рекламный доход"
              lefttitle="Доход от рекламы"
              righttitle="тыс. руб"
            />
          </div>
          <div className="channels-table">
            <div className="table-top">
              <h3 className="table-title">Каналы</h3>
              <ul className="chanels-status">
                <li className="status-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      fill="#818181"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  - на модерации
                </li>
                <li className="status-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      fill="#FF9900"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M14.829 6.76604C15.5809 7.46501 16 8.40462 16 9.40151C16 10.3984 15.5809 11.3266 14.829 12.037C14.2989 12.5297 13.6333 12.8735 12.9183 13.0224V13.412C12.9183 13.8818 12.4992 14.2714 11.9938 14.2714C11.4884 14.2714 11.0693 13.8818 11.0693 13.412V12.2662C11.0693 11.7964 11.4884 11.4068 11.9938 11.4068C12.5732 11.4068 13.1156 11.2005 13.5223 10.8224C13.9291 10.4442 14.151 9.94007 14.151 9.40151C14.151 8.86296 13.9291 8.35878 13.5223 7.98065C12.7088 7.22438 11.2912 7.22438 10.4777 7.98065C10.0709 8.35878 9.849 8.86296 9.849 9.40151C9.849 9.87131 9.42989 10.2609 8.9245 10.2609C8.41911 10.2609 8 9.87131 8 9.40151C8 8.40462 8.41911 7.47647 9.17103 6.76604C10.6872 5.35663 13.3251 5.35663 14.8413 6.76604H14.829ZM13.2265 16.5631C13.2265 17.1933 12.6718 17.709 11.9938 17.709C11.3159 17.709 10.7612 17.1933 10.7612 16.5631C10.7612 15.9329 11.3159 15.4173 11.9938 15.4173C12.6718 15.4173 13.2265 15.9329 13.2265 16.5631Z"
                      fill="white"
                    />
                  </svg>
                  - на модерации
                </li>
                <li className="status-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      fill="#00CC5E"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M9.95589 15.4528C10.1339 15.6232 10.3679 15.709 10.6013 15.709C10.8347 15.709 11.0687 15.6238 11.2467 15.4528L16.7325 10.2013C17.0892 9.85988 17.0892 9.30649 16.7325 8.96506C16.3758 8.62363 15.7978 8.62363 15.4411 8.96506L10.6013 13.5981L8.55891 11.643C8.20224 11.3015 7.62416 11.3015 7.2675 11.643C6.91083 11.9844 6.91083 12.5378 7.2675 12.8792L9.95589 15.4528Z"
                      fill="white"
                    />
                  </svg>
                  - одобрен
                </li>
                <li className="status-item">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="11"
                      fill="#FF0000"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 16L16 8M16 16L8.00001 8"
                      stroke="white"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                  - отклонен
                </li>
              </ul>
            </div>
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th className="th">Канал</th>
                  <th className="th th-subscribers">
                    Подписчиков
                    <svg
                      onClick={openMenu}
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.66667 0.833008C5.66667 0.487833 5.38684 0.208008 5.04167 0.208008H0.874999C0.529833 0.208008 0.249999 0.487833 0.249999 0.833008C0.249999 1.17818 0.529833 1.45801 0.874999 1.45801H5.04167C5.38684 1.45801 5.66667 1.17818 5.66667 0.833008ZM8.33333 4.99967C8.33333 4.65451 8.05351 4.37467 7.70833 4.37467H0.874999C0.529833 4.37467 0.249999 4.65451 0.249999 4.99967C0.249999 5.34484 0.529833 5.62467 0.874999 5.62467H7.70833C8.05351 5.62467 8.33333 5.34484 8.33333 4.99967ZM11 9.16634C11 8.82117 10.7202 8.54134 10.375 8.54134H0.874999C0.529833 8.54134 0.249999 8.82117 0.249999 9.16634C0.249999 9.51151 0.529833 9.79134 0.874999 9.79134H10.375C10.7202 9.79134 11 9.51151 11 9.16634Z"
                        fill="#262626"
                      />
                    </svg>
                    <div
                      className={"select-menu " + (subscriber ? "show" : "")}
                    >
                      {subscribers.map((item) => (
                        <div
                          className={
                            "select-option " + (item.selected ? "selected" : "")
                          }
                          key={item.id}
                          onClick={() => handleSelect(item.id)}
                        >
                          <div className="icon">
                            <svg
                              width="11"
                              height="10"
                              viewBox="0 0 11 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.41658 9.16699C5.41658 9.51217 5.13676 9.79199 4.79158 9.79199H0.624918C0.279751 9.79199 -8.2016e-05 9.51217 -8.2016e-05 9.16699C-8.2016e-05 8.82182 0.279751 8.54199 0.624918 8.54199H4.79158C5.13676 8.54199 5.41658 8.82182 5.41658 9.16699ZM10.0833 5.00033C10.0833 5.34549 9.80343 5.62533 9.45825 5.62533H0.624918C0.279751 5.62533 -8.2016e-05 5.34549 -8.2016e-05 5.00033C-8.2016e-05 4.65516 0.279751 4.37533 0.624918 4.37533H9.45825C9.80343 4.37533 10.0833 4.65516 10.0833 5.00033ZM7.74992 0.833659C7.74992 1.17883 7.47009 1.45866 7.12492 1.45866H0.624918C0.279751 1.45866 -8.2016e-05 1.17883 -8.2016e-05 0.833659C-8.2016e-05 0.488493 0.279751 0.208659 0.624918 0.208659H7.12492C7.47009 0.208659 7.74992 0.488493 7.74992 0.833659Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </th>
                  <th className="th">
                    Средний охват рекламного поста, просмотров
                  </th>
                  <th className="th">CPM</th>
                  <th className="th">CPM</th>
                  <th className="th">Действия</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td className="td chanel-td">
                    <div className="chanel-img">
                      <img src={telegram} alt="" />
                      <span className="created">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14"
                            cy="14"
                            r="13"
                            fill="#818181"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">Varlamov News</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td subscribers-td">
                    <h4 className="subscribers-num">2 000</h4>
                    <div className="subscribers-list">
                      <div className="subscribers-list-in">
                        <div className="man-subscriber">
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4001_813)">
                              <path
                                d="M15.1303 5.57223C15.0589 4.7428 14.4962 4.01268 13.6964 3.713C13.1856 3.52131 13.0704 3.05276 13.0476 2.91567C13.1601 2.79119 13.7336 2.64119 14.2658 2.6007C14.3828 2.59202 14.4835 2.51581 14.5244 2.40602C14.5652 2.29592 14.5382 2.17236 14.4553 2.08954C12.8235 0.457721 9.00039 0.498217 8.85461 0.502119C8.67674 0.49551 4.49276 0.379119 3.1828 3.35483C3.1462 3.41933 2.31379 4.97375 3.44859 8.65828L3.44437 10.1347C3.44437 12.1835 3.64565 14.2704 5.1053 15.6566C5.33776 15.8774 5.58826 16.0748 5.84414 16.2604V18.2001C5.84414 18.3659 5.97821 18.5 6.14409 18.5C6.30966 18.5 6.44405 18.3659 6.44405 18.2001V16.6813C6.47854 16.7044 6.51306 16.7275 6.54754 16.7503L6.82472 16.9369C6.9384 17.014 7.04938 17.0959 7.16008 17.1778C7.64033 17.533 8.13676 17.9001 8.83542 17.9001C8.83693 17.9001 8.83812 17.8998 8.83964 17.8998C8.84115 17.8998 8.84234 17.9001 8.84382 17.9001C9.54244 17.9001 10.0389 17.5329 10.5192 17.1778C10.6299 17.0959 10.7408 17.014 10.8545 16.9369L11.1428 16.7434C11.1761 16.7209 11.21 16.6978 11.2436 16.6753V18.2001C11.2436 18.366 11.3777 18.5 11.5435 18.5C11.7091 18.5 11.8435 18.366 11.8435 18.2001V16.2605C12.0991 16.0748 12.3496 15.8774 12.5823 15.6566C14.0492 14.2639 14.2514 12.1635 14.2514 10.1009V9.24867C14.9221 7.84987 15.2194 6.61281 15.1303 5.57223ZM13.6514 9.18293V10.1008C13.6514 12.0296 13.4717 13.9845 12.1693 15.221C11.9305 15.4478 11.6641 15.6518 11.3905 15.8459C11.3836 15.8501 11.3764 15.8522 11.3701 15.8564C11.1818 15.9902 10.9892 16.1189 10.7969 16.2469L10.5092 16.4401C10.389 16.5217 10.2714 16.6087 10.1544 16.6954C9.73473 17.0055 9.33845 17.298 8.8396 17.2998C8.34075 17.298 7.94447 17.0056 7.52482 16.6954C7.40783 16.6087 7.29025 16.5217 7.16995 16.4401L6.87808 16.2442C6.40922 15.9314 5.92478 15.6071 5.51831 15.221C4.15825 13.9303 4.04425 11.919 4.04425 10.1356L4.04875 8.60281V8.60221L4.05233 7.40115C4.05233 7.19835 4.09192 7.00188 4.16992 6.81712C4.20022 6.74481 4.23921 6.67823 4.28181 6.61524C4.2944 6.59633 4.30849 6.57924 4.32171 6.56125C4.3556 6.51685 4.39191 6.47484 4.43121 6.43554C4.44682 6.41993 4.46211 6.40373 4.47891 6.38875C4.53139 6.34196 4.58658 6.29816 4.64631 6.26037C4.65021 6.25798 4.6538 6.25496 4.6577 6.25229C4.72189 6.21239 4.79089 6.1797 4.86197 6.15091C4.88148 6.14311 4.90155 6.13681 4.92138 6.12992C4.97597 6.11041 5.03176 6.09484 5.08878 6.08222C5.11096 6.07712 5.13345 6.07203 5.15627 6.06841C5.22408 6.05702 5.29365 6.04981 5.36416 6.0477C5.37376 6.0477 5.38335 6.04591 5.39295 6.04591C5.45475 6.04559 5.51715 6.05371 5.57982 6.06092C5.60622 6.06422 5.63262 6.06331 5.65902 6.06812C5.74782 6.08313 5.83721 6.10651 5.92541 6.13832C6.38317 6.30389 7.26209 6.50128 8.8519 6.50128C10.4418 6.50128 11.3206 6.30389 11.7784 6.13832C12.4935 5.88034 13.2636 6.17791 13.5335 6.81716C13.6118 7.00196 13.6514 7.19842 13.6514 7.40118V9.18293Z"
                                fill="#5C9BFB"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4001_813">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="percentage">65%</p>
                          <span className="audience man-audience">
                            <svg
                              width="8"
                              height="21"
                              viewBox="0 0 8 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 20.416C4.89543 20.416 4 19.5206 4 18.416L4 14.416L-4.37114e-07 10.416L4 6.41602L4 2.41602C4 1.31145 4.89543 0.416015 6 0.416015C7.10457 0.416015 8 1.31144 8 2.41602L8 18.416C8 19.5206 7.10457 20.416 6 20.416Z"
                                fill="url(#paint0_linear_319_2103)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_319_2103"
                                  x1="6"
                                  y1="22.416"
                                  x2="6"
                                  y2="-1.58399"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#00CC5E" />
                                  <stop offset="1" stopColor="#00B3FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Кол-во мужской аудитории.
                          </span>
                        </div>
                        <div className="women-subscriber">
                          <p className="percentage">65%</p>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4001_820)">
                              <path
                                d="M16.845 10.6434L15.7407 6.50536C13.6493 0.309152 10.0896 0.494334 9.9542 0.501963C9.89318 0.503474 3.82633 0.715479 2.42185 7.62764L2.38343 7.82013C2.35383 7.97051 2.32423 8.12061 2.29006 8.271C2.07409 9.22338 1.50761 12.5881 3.28607 15.8988C3.34038 16.0001 3.445 16.0596 3.55481 16.0596C3.5893 16.0596 3.62438 16.0535 3.65823 16.0413C3.8007 15.99 3.88366 15.8421 3.85378 15.6938C3.85319 15.6905 3.79339 15.3433 3.98525 15.1078C4.10695 14.9577 4.32019 14.8744 4.60939 14.8507C4.78996 15.1201 4.99771 15.3748 5.24389 15.6081C5.4806 15.8329 5.73504 16.0337 5.99523 16.2225V18.1949C5.99523 18.3633 6.13159 18.5 6.30029 18.5C6.46867 18.5 6.60534 18.3633 6.60534 18.1949V16.6499C6.63919 16.6727 6.67308 16.6956 6.70693 16.7182L6.99275 16.9104C7.10837 16.9888 7.22093 17.072 7.33349 17.155C7.82186 17.5165 8.32703 17.8899 9.03718 17.8899C9.03869 17.8899 9.03992 17.8896 9.04147 17.8896C9.04302 17.8896 9.04421 17.8899 9.04572 17.8899C9.75587 17.8899 10.261 17.5165 10.7494 17.1553C10.862 17.072 10.9749 16.9888 11.0905 16.9104L11.383 16.7136C11.4172 16.6907 11.4517 16.6673 11.4861 16.6444V18.1949C11.4861 18.3633 11.6225 18.5 11.7912 18.5C11.9595 18.5 12.0962 18.3633 12.0962 18.1949V16.2225C12.3561 16.0336 12.6108 15.8329 12.8476 15.6081C12.9019 15.5563 12.9513 15.502 13.0022 15.4483C13.019 15.4489 13.0352 15.4492 13.0517 15.4468C15.2096 15.1594 16.2141 13.9203 16.6766 12.931C16.9963 12.2474 17.0561 11.435 16.845 10.6434ZM13.0145 14.455C13.009 14.4635 13.0026 14.4721 12.9971 14.4806C12.9486 14.5541 12.8985 14.6264 12.8449 14.6975C12.8308 14.7158 12.815 14.7338 12.8003 14.7524C12.7527 14.8131 12.7045 14.8735 12.6527 14.9318C12.6524 14.9321 12.6521 14.9327 12.6518 14.9333C12.581 15.0129 12.5063 15.0904 12.4276 15.1655C12.1844 15.3961 11.9132 15.6038 11.6351 15.8012C11.6287 15.8052 11.6213 15.8073 11.6149 15.8116C11.4249 15.9464 11.2311 16.0754 11.0377 16.2048L10.7397 16.4049C10.6174 16.4882 10.4975 16.5767 10.3782 16.6648C9.95178 16.9799 9.54883 17.2777 9.04151 17.2795C8.53422 17.2777 8.13124 16.9799 7.70477 16.6648C7.58549 16.5767 7.46591 16.4882 7.34329 16.4049L7.0471 16.2063C6.57029 15.8876 6.07763 15.5581 5.66399 15.1655C5.41079 14.9254 5.20093 14.6601 5.02584 14.3767C5.02552 14.3761 5.02524 14.3754 5.02492 14.3748C4.93279 14.2254 4.85106 14.0698 4.77752 13.9099C4.77355 13.9014 4.76989 13.8934 4.76624 13.8855C4.24461 12.737 4.16499 11.3451 4.16499 9.99308C4.16499 8.8772 4.68387 7.80435 5.55326 7.12345C6.33663 6.50969 7.22922 6.02405 7.67274 5.79799C7.84327 6.17166 8.03882 6.50754 8.24685 6.82173C8.28742 6.88367 8.32524 6.95106 8.36735 7.01085C8.39604 7.05142 8.42775 7.08682 8.45703 7.12647C8.5583 7.26374 8.65989 7.4001 8.76665 7.52577C8.80539 7.57153 8.84687 7.61087 8.88652 7.65513C9.12721 7.92478 9.37767 8.17218 9.63664 8.38999C9.63815 8.39122 9.6397 8.39213 9.64121 8.39364C9.79039 8.51871 9.94169 8.63584 10.0939 8.74506C10.1336 8.77375 10.1738 8.79723 10.2135 8.825C10.3282 8.90402 10.4426 8.98301 10.5576 9.05377C10.5707 9.06172 10.5835 9.06843 10.5963 9.07602C11.9767 9.91613 13.3451 10.1855 13.9254 10.2657C13.9107 11.7797 13.7618 13.2979 13.0145 14.455Z"
                                fill="#33D87F"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4001_820">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0.5 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="audience female-audience">
                            <svg
                              width="8"
                              height="21"
                              viewBox="0 0 8 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 20.416C4.89543 20.416 4 19.5206 4 18.416L4 14.416L-4.37114e-07 10.416L4 6.41602L4 2.41602C4 1.31145 4.89543 0.416015 6 0.416015C7.10457 0.416015 8 1.31144 8 2.41602L8 18.416C8 19.5206 7.10457 20.416 6 20.416Z"
                                fill="url(#paint0_linear_319_2103)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_319_2103"
                                  x1="6"
                                  y1="22.416"
                                  x2="6"
                                  y2="-1.58399"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#00CC5E" />
                                  <stop offset="1" stopColor="#00B3FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Кол-во женской аудитории
                          </span>
                        </div>
                      </div>
                      <div className="subscribers-pagination">
                        <div className="man-pagination"></div>
                        <div className="women-pagination"></div>
                      </div>
                    </div>
                  </td>
                  <td className="td">2 000</td>
                  <td className="td">2 000</td>
                  <td className="td schedule-td">
                    <p className="schedule-text">
                      2 публикации <span>в день 14:00 - 16:00</span>
                    </p>
                  </td>
                  <td className="td actions-td">
                    <button className="edit-btn">
                      <img src={editIcon} alt="" />
                    </button>
                    <button className="pause-btn" onClick={pauseModalOpen}>
                      <img src={pauseIcon} alt="" />
                      <img src={pauseblackIcon} alt="" />
                    </button>
                    <button className="delete-btn" onClick={deleteModalOpen}>
                      <img src={deletegradientIcon} alt="" />
                      <img src={deleteIcon} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="td chanel-td">
                    <div className="chanel-img">
                      <img src={avatar} alt="" />
                      <span className="created">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14"
                            cy="14"
                            r="13"
                            fill="#00CC5E"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <path
                            d="M11.9559 17.1598C12.1339 17.3302 12.3679 17.416 12.6013 17.416C12.8347 17.416 13.0687 17.3308 13.2467 17.1598L18.7325 11.9083C19.0892 11.5669 19.0892 11.0135 18.7325 10.6721C18.3758 10.3307 17.7978 10.3307 17.4411 10.6721L12.6013 15.3052L10.5589 13.35C10.2022 13.0086 9.62416 13.0086 9.2675 13.35C8.91083 13.6914 8.91083 14.2448 9.2675 14.5862L11.9559 17.1598Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">Новая газета</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td subscribers-td">
                    <h4 className="subscribers-num">3 050</h4>
                    <div className="subscribers-list">
                      <div className="subscribers-list-in">
                        <div className="man-subscriber">
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4001_813)">
                              <path
                                d="M15.1303 5.57223C15.0589 4.7428 14.4962 4.01268 13.6964 3.713C13.1856 3.52131 13.0704 3.05276 13.0476 2.91567C13.1601 2.79119 13.7336 2.64119 14.2658 2.6007C14.3828 2.59202 14.4835 2.51581 14.5244 2.40602C14.5652 2.29592 14.5382 2.17236 14.4553 2.08954C12.8235 0.457721 9.00039 0.498217 8.85461 0.502119C8.67674 0.49551 4.49276 0.379119 3.1828 3.35483C3.1462 3.41933 2.31379 4.97375 3.44859 8.65828L3.44437 10.1347C3.44437 12.1835 3.64565 14.2704 5.1053 15.6566C5.33776 15.8774 5.58826 16.0748 5.84414 16.2604V18.2001C5.84414 18.3659 5.97821 18.5 6.14409 18.5C6.30966 18.5 6.44405 18.3659 6.44405 18.2001V16.6813C6.47854 16.7044 6.51306 16.7275 6.54754 16.7503L6.82472 16.9369C6.9384 17.014 7.04938 17.0959 7.16008 17.1778C7.64033 17.533 8.13676 17.9001 8.83542 17.9001C8.83693 17.9001 8.83812 17.8998 8.83964 17.8998C8.84115 17.8998 8.84234 17.9001 8.84382 17.9001C9.54244 17.9001 10.0389 17.5329 10.5192 17.1778C10.6299 17.0959 10.7408 17.014 10.8545 16.9369L11.1428 16.7434C11.1761 16.7209 11.21 16.6978 11.2436 16.6753V18.2001C11.2436 18.366 11.3777 18.5 11.5435 18.5C11.7091 18.5 11.8435 18.366 11.8435 18.2001V16.2605C12.0991 16.0748 12.3496 15.8774 12.5823 15.6566C14.0492 14.2639 14.2514 12.1635 14.2514 10.1009V9.24867C14.9221 7.84987 15.2194 6.61281 15.1303 5.57223ZM13.6514 9.18293V10.1008C13.6514 12.0296 13.4717 13.9845 12.1693 15.221C11.9305 15.4478 11.6641 15.6518 11.3905 15.8459C11.3836 15.8501 11.3764 15.8522 11.3701 15.8564C11.1818 15.9902 10.9892 16.1189 10.7969 16.2469L10.5092 16.4401C10.389 16.5217 10.2714 16.6087 10.1544 16.6954C9.73473 17.0055 9.33845 17.298 8.8396 17.2998C8.34075 17.298 7.94447 17.0056 7.52482 16.6954C7.40783 16.6087 7.29025 16.5217 7.16995 16.4401L6.87808 16.2442C6.40922 15.9314 5.92478 15.6071 5.51831 15.221C4.15825 13.9303 4.04425 11.919 4.04425 10.1356L4.04875 8.60281V8.60221L4.05233 7.40115C4.05233 7.19835 4.09192 7.00188 4.16992 6.81712C4.20022 6.74481 4.23921 6.67823 4.28181 6.61524C4.2944 6.59633 4.30849 6.57924 4.32171 6.56125C4.3556 6.51685 4.39191 6.47484 4.43121 6.43554C4.44682 6.41993 4.46211 6.40373 4.47891 6.38875C4.53139 6.34196 4.58658 6.29816 4.64631 6.26037C4.65021 6.25798 4.6538 6.25496 4.6577 6.25229C4.72189 6.21239 4.79089 6.1797 4.86197 6.15091C4.88148 6.14311 4.90155 6.13681 4.92138 6.12992C4.97597 6.11041 5.03176 6.09484 5.08878 6.08222C5.11096 6.07712 5.13345 6.07203 5.15627 6.06841C5.22408 6.05702 5.29365 6.04981 5.36416 6.0477C5.37376 6.0477 5.38335 6.04591 5.39295 6.04591C5.45475 6.04559 5.51715 6.05371 5.57982 6.06092C5.60622 6.06422 5.63262 6.06331 5.65902 6.06812C5.74782 6.08313 5.83721 6.10651 5.92541 6.13832C6.38317 6.30389 7.26209 6.50128 8.8519 6.50128C10.4418 6.50128 11.3206 6.30389 11.7784 6.13832C12.4935 5.88034 13.2636 6.17791 13.5335 6.81716C13.6118 7.00196 13.6514 7.19842 13.6514 7.40118V9.18293Z"
                                fill="#5C9BFB"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4001_813">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="percentage">65%</p>
                          <span className="audience man-audience">
                            <svg
                              width="8"
                              height="21"
                              viewBox="0 0 8 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 20.416C4.89543 20.416 4 19.5206 4 18.416L4 14.416L-4.37114e-07 10.416L4 6.41602L4 2.41602C4 1.31145 4.89543 0.416015 6 0.416015C7.10457 0.416015 8 1.31144 8 2.41602L8 18.416C8 19.5206 7.10457 20.416 6 20.416Z"
                                fill="url(#paint0_linear_319_2103)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_319_2103"
                                  x1="6"
                                  y1="22.416"
                                  x2="6"
                                  y2="-1.58399"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#00CC5E" />
                                  <stop offset="1" stopColor="#00B3FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Кол-во мужской аудитории.
                          </span>
                        </div>
                        <div className="women-subscriber">
                          <p className="percentage">65%</p>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4001_820)">
                              <path
                                d="M16.845 10.6434L15.7407 6.50536C13.6493 0.309152 10.0896 0.494334 9.9542 0.501963C9.89318 0.503474 3.82633 0.715479 2.42185 7.62764L2.38343 7.82013C2.35383 7.97051 2.32423 8.12061 2.29006 8.271C2.07409 9.22338 1.50761 12.5881 3.28607 15.8988C3.34038 16.0001 3.445 16.0596 3.55481 16.0596C3.5893 16.0596 3.62438 16.0535 3.65823 16.0413C3.8007 15.99 3.88366 15.8421 3.85378 15.6938C3.85319 15.6905 3.79339 15.3433 3.98525 15.1078C4.10695 14.9577 4.32019 14.8744 4.60939 14.8507C4.78996 15.1201 4.99771 15.3748 5.24389 15.6081C5.4806 15.8329 5.73504 16.0337 5.99523 16.2225V18.1949C5.99523 18.3633 6.13159 18.5 6.30029 18.5C6.46867 18.5 6.60534 18.3633 6.60534 18.1949V16.6499C6.63919 16.6727 6.67308 16.6956 6.70693 16.7182L6.99275 16.9104C7.10837 16.9888 7.22093 17.072 7.33349 17.155C7.82186 17.5165 8.32703 17.8899 9.03718 17.8899C9.03869 17.8899 9.03992 17.8896 9.04147 17.8896C9.04302 17.8896 9.04421 17.8899 9.04572 17.8899C9.75587 17.8899 10.261 17.5165 10.7494 17.1553C10.862 17.072 10.9749 16.9888 11.0905 16.9104L11.383 16.7136C11.4172 16.6907 11.4517 16.6673 11.4861 16.6444V18.1949C11.4861 18.3633 11.6225 18.5 11.7912 18.5C11.9595 18.5 12.0962 18.3633 12.0962 18.1949V16.2225C12.3561 16.0336 12.6108 15.8329 12.8476 15.6081C12.9019 15.5563 12.9513 15.502 13.0022 15.4483C13.019 15.4489 13.0352 15.4492 13.0517 15.4468C15.2096 15.1594 16.2141 13.9203 16.6766 12.931C16.9963 12.2474 17.0561 11.435 16.845 10.6434ZM13.0145 14.455C13.009 14.4635 13.0026 14.4721 12.9971 14.4806C12.9486 14.5541 12.8985 14.6264 12.8449 14.6975C12.8308 14.7158 12.815 14.7338 12.8003 14.7524C12.7527 14.8131 12.7045 14.8735 12.6527 14.9318C12.6524 14.9321 12.6521 14.9327 12.6518 14.9333C12.581 15.0129 12.5063 15.0904 12.4276 15.1655C12.1844 15.3961 11.9132 15.6038 11.6351 15.8012C11.6287 15.8052 11.6213 15.8073 11.6149 15.8116C11.4249 15.9464 11.2311 16.0754 11.0377 16.2048L10.7397 16.4049C10.6174 16.4882 10.4975 16.5767 10.3782 16.6648C9.95178 16.9799 9.54883 17.2777 9.04151 17.2795C8.53422 17.2777 8.13124 16.9799 7.70477 16.6648C7.58549 16.5767 7.46591 16.4882 7.34329 16.4049L7.0471 16.2063C6.57029 15.8876 6.07763 15.5581 5.66399 15.1655C5.41079 14.9254 5.20093 14.6601 5.02584 14.3767C5.02552 14.3761 5.02524 14.3754 5.02492 14.3748C4.93279 14.2254 4.85106 14.0698 4.77752 13.9099C4.77355 13.9014 4.76989 13.8934 4.76624 13.8855C4.24461 12.737 4.16499 11.3451 4.16499 9.99308C4.16499 8.8772 4.68387 7.80435 5.55326 7.12345C6.33663 6.50969 7.22922 6.02405 7.67274 5.79799C7.84327 6.17166 8.03882 6.50754 8.24685 6.82173C8.28742 6.88367 8.32524 6.95106 8.36735 7.01085C8.39604 7.05142 8.42775 7.08682 8.45703 7.12647C8.5583 7.26374 8.65989 7.4001 8.76665 7.52577C8.80539 7.57153 8.84687 7.61087 8.88652 7.65513C9.12721 7.92478 9.37767 8.17218 9.63664 8.38999C9.63815 8.39122 9.6397 8.39213 9.64121 8.39364C9.79039 8.51871 9.94169 8.63584 10.0939 8.74506C10.1336 8.77375 10.1738 8.79723 10.2135 8.825C10.3282 8.90402 10.4426 8.98301 10.5576 9.05377C10.5707 9.06172 10.5835 9.06843 10.5963 9.07602C11.9767 9.91613 13.3451 10.1855 13.9254 10.2657C13.9107 11.7797 13.7618 13.2979 13.0145 14.455Z"
                                fill="#33D87F"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4001_820">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0.5 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="audience female-audience">
                            <svg
                              width="8"
                              height="21"
                              viewBox="0 0 8 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 20.416C4.89543 20.416 4 19.5206 4 18.416L4 14.416L-4.37114e-07 10.416L4 6.41602L4 2.41602C4 1.31145 4.89543 0.416015 6 0.416015C7.10457 0.416015 8 1.31144 8 2.41602L8 18.416C8 19.5206 7.10457 20.416 6 20.416Z"
                                fill="url(#paint0_linear_319_2103)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_319_2103"
                                  x1="6"
                                  y1="22.416"
                                  x2="6"
                                  y2="-1.58399"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#00CC5E" />
                                  <stop offset="1" stopColor="#00B3FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Кол-во женской аудитории
                          </span>
                        </div>
                      </div>
                      <div className="subscribers-pagination">
                        <div className="man-pagination"></div>
                        <div className="women-pagination"></div>
                      </div>
                    </div>
                  </td>
                  <td className="td">2 000</td>
                  <td className="td">2 000</td>
                  <td className="td schedule-td">
                    <p className="schedule-text">
                      2 публикации <span>в день 14:00 - 16:00</span>
                    </p>
                  </td>
                  <td className="td actions-td">
                    <button className="edit-btn">
                      <img src={editIcon} alt="" />
                    </button>
                    <button className="pause-btn" onClick={pauseModalOpen}>
                      <img src={pauseIcon} alt="" />
                      <img src={pauseblackIcon} alt="" />
                    </button>
                    <button className="delete-btn" onClick={deleteModalOpen}>
                      <img src={deletegradientIcon} alt="" />
                      <img src={deleteIcon} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="td chanel-td">
                    <div className="chanel-img">
                      <img src={avatar} alt="" />
                      <span className="created">
                        <svg
                          width="28"
                          height="29"
                          viewBox="0 0 28 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14"
                            cy="14.416"
                            r="13"
                            fill="#FF9900"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <path
                            d="M16.829 9.47307C17.5809 10.172 18 11.1116 18 12.1085C18 13.1054 17.5809 14.0336 16.829 14.744C16.2989 15.2367 15.6333 15.5805 14.9183 15.7295V16.119C14.9183 16.5888 14.4992 16.9784 13.9938 16.9784C13.4884 16.9784 13.0693 16.5888 13.0693 16.119V14.9732C13.0693 14.5034 13.4884 14.1138 13.9938 14.1138C14.5732 14.1138 15.1156 13.9075 15.5223 13.5294C15.9291 13.1513 16.151 12.6471 16.151 12.1085C16.151 11.57 15.9291 11.0658 15.5223 10.6877C14.7088 9.93141 13.2912 9.93141 12.4777 10.6877C12.0709 11.0658 11.849 11.57 11.849 12.1085C11.849 12.5783 11.4299 12.9679 10.9245 12.9679C10.4191 12.9679 10 12.5783 10 12.1085C10 11.1116 10.4191 10.1835 11.171 9.47307C12.6872 8.06366 15.3251 8.06366 16.8413 9.47307H16.829ZM15.2265 19.2702C15.2265 19.9004 14.6718 20.416 13.9938 20.416C13.3159 20.416 12.7612 19.9004 12.7612 19.2702C12.7612 18.6399 13.3159 18.1243 13.9938 18.1243C14.6718 18.1243 15.2265 18.6399 15.2265 19.2702Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">ANNA NEWS</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td subscribers-td">
                    <h4 className="subscribers-num">1 580</h4>
                    <div className="subscribers-list">
                      <div className="subscribers-list-in">
                        <div className="man-subscriber">
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4001_813)">
                              <path
                                d="M15.1303 5.57223C15.0589 4.7428 14.4962 4.01268 13.6964 3.713C13.1856 3.52131 13.0704 3.05276 13.0476 2.91567C13.1601 2.79119 13.7336 2.64119 14.2658 2.6007C14.3828 2.59202 14.4835 2.51581 14.5244 2.40602C14.5652 2.29592 14.5382 2.17236 14.4553 2.08954C12.8235 0.457721 9.00039 0.498217 8.85461 0.502119C8.67674 0.49551 4.49276 0.379119 3.1828 3.35483C3.1462 3.41933 2.31379 4.97375 3.44859 8.65828L3.44437 10.1347C3.44437 12.1835 3.64565 14.2704 5.1053 15.6566C5.33776 15.8774 5.58826 16.0748 5.84414 16.2604V18.2001C5.84414 18.3659 5.97821 18.5 6.14409 18.5C6.30966 18.5 6.44405 18.3659 6.44405 18.2001V16.6813C6.47854 16.7044 6.51306 16.7275 6.54754 16.7503L6.82472 16.9369C6.9384 17.014 7.04938 17.0959 7.16008 17.1778C7.64033 17.533 8.13676 17.9001 8.83542 17.9001C8.83693 17.9001 8.83812 17.8998 8.83964 17.8998C8.84115 17.8998 8.84234 17.9001 8.84382 17.9001C9.54244 17.9001 10.0389 17.5329 10.5192 17.1778C10.6299 17.0959 10.7408 17.014 10.8545 16.9369L11.1428 16.7434C11.1761 16.7209 11.21 16.6978 11.2436 16.6753V18.2001C11.2436 18.366 11.3777 18.5 11.5435 18.5C11.7091 18.5 11.8435 18.366 11.8435 18.2001V16.2605C12.0991 16.0748 12.3496 15.8774 12.5823 15.6566C14.0492 14.2639 14.2514 12.1635 14.2514 10.1009V9.24867C14.9221 7.84987 15.2194 6.61281 15.1303 5.57223ZM13.6514 9.18293V10.1008C13.6514 12.0296 13.4717 13.9845 12.1693 15.221C11.9305 15.4478 11.6641 15.6518 11.3905 15.8459C11.3836 15.8501 11.3764 15.8522 11.3701 15.8564C11.1818 15.9902 10.9892 16.1189 10.7969 16.2469L10.5092 16.4401C10.389 16.5217 10.2714 16.6087 10.1544 16.6954C9.73473 17.0055 9.33845 17.298 8.8396 17.2998C8.34075 17.298 7.94447 17.0056 7.52482 16.6954C7.40783 16.6087 7.29025 16.5217 7.16995 16.4401L6.87808 16.2442C6.40922 15.9314 5.92478 15.6071 5.51831 15.221C4.15825 13.9303 4.04425 11.919 4.04425 10.1356L4.04875 8.60281V8.60221L4.05233 7.40115C4.05233 7.19835 4.09192 7.00188 4.16992 6.81712C4.20022 6.74481 4.23921 6.67823 4.28181 6.61524C4.2944 6.59633 4.30849 6.57924 4.32171 6.56125C4.3556 6.51685 4.39191 6.47484 4.43121 6.43554C4.44682 6.41993 4.46211 6.40373 4.47891 6.38875C4.53139 6.34196 4.58658 6.29816 4.64631 6.26037C4.65021 6.25798 4.6538 6.25496 4.6577 6.25229C4.72189 6.21239 4.79089 6.1797 4.86197 6.15091C4.88148 6.14311 4.90155 6.13681 4.92138 6.12992C4.97597 6.11041 5.03176 6.09484 5.08878 6.08222C5.11096 6.07712 5.13345 6.07203 5.15627 6.06841C5.22408 6.05702 5.29365 6.04981 5.36416 6.0477C5.37376 6.0477 5.38335 6.04591 5.39295 6.04591C5.45475 6.04559 5.51715 6.05371 5.57982 6.06092C5.60622 6.06422 5.63262 6.06331 5.65902 6.06812C5.74782 6.08313 5.83721 6.10651 5.92541 6.13832C6.38317 6.30389 7.26209 6.50128 8.8519 6.50128C10.4418 6.50128 11.3206 6.30389 11.7784 6.13832C12.4935 5.88034 13.2636 6.17791 13.5335 6.81716C13.6118 7.00196 13.6514 7.19842 13.6514 7.40118V9.18293Z"
                                fill="#5C9BFB"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4001_813">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="percentage">65%</p>
                          <span className="audience man-audience">
                            <svg
                              width="8"
                              height="21"
                              viewBox="0 0 8 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 20.416C4.89543 20.416 4 19.5206 4 18.416L4 14.416L-4.37114e-07 10.416L4 6.41602L4 2.41602C4 1.31145 4.89543 0.416015 6 0.416015C7.10457 0.416015 8 1.31144 8 2.41602L8 18.416C8 19.5206 7.10457 20.416 6 20.416Z"
                                fill="url(#paint0_linear_319_2103)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_319_2103"
                                  x1="6"
                                  y1="22.416"
                                  x2="6"
                                  y2="-1.58399"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#00CC5E" />
                                  <stop offset="1" stopColor="#00B3FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Кол-во мужской аудитории.
                          </span>
                        </div>
                        <div className="women-subscriber">
                          <p className="percentage">65%</p>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4001_820)">
                              <path
                                d="M16.845 10.6434L15.7407 6.50536C13.6493 0.309152 10.0896 0.494334 9.9542 0.501963C9.89318 0.503474 3.82633 0.715479 2.42185 7.62764L2.38343 7.82013C2.35383 7.97051 2.32423 8.12061 2.29006 8.271C2.07409 9.22338 1.50761 12.5881 3.28607 15.8988C3.34038 16.0001 3.445 16.0596 3.55481 16.0596C3.5893 16.0596 3.62438 16.0535 3.65823 16.0413C3.8007 15.99 3.88366 15.8421 3.85378 15.6938C3.85319 15.6905 3.79339 15.3433 3.98525 15.1078C4.10695 14.9577 4.32019 14.8744 4.60939 14.8507C4.78996 15.1201 4.99771 15.3748 5.24389 15.6081C5.4806 15.8329 5.73504 16.0337 5.99523 16.2225V18.1949C5.99523 18.3633 6.13159 18.5 6.30029 18.5C6.46867 18.5 6.60534 18.3633 6.60534 18.1949V16.6499C6.63919 16.6727 6.67308 16.6956 6.70693 16.7182L6.99275 16.9104C7.10837 16.9888 7.22093 17.072 7.33349 17.155C7.82186 17.5165 8.32703 17.8899 9.03718 17.8899C9.03869 17.8899 9.03992 17.8896 9.04147 17.8896C9.04302 17.8896 9.04421 17.8899 9.04572 17.8899C9.75587 17.8899 10.261 17.5165 10.7494 17.1553C10.862 17.072 10.9749 16.9888 11.0905 16.9104L11.383 16.7136C11.4172 16.6907 11.4517 16.6673 11.4861 16.6444V18.1949C11.4861 18.3633 11.6225 18.5 11.7912 18.5C11.9595 18.5 12.0962 18.3633 12.0962 18.1949V16.2225C12.3561 16.0336 12.6108 15.8329 12.8476 15.6081C12.9019 15.5563 12.9513 15.502 13.0022 15.4483C13.019 15.4489 13.0352 15.4492 13.0517 15.4468C15.2096 15.1594 16.2141 13.9203 16.6766 12.931C16.9963 12.2474 17.0561 11.435 16.845 10.6434ZM13.0145 14.455C13.009 14.4635 13.0026 14.4721 12.9971 14.4806C12.9486 14.5541 12.8985 14.6264 12.8449 14.6975C12.8308 14.7158 12.815 14.7338 12.8003 14.7524C12.7527 14.8131 12.7045 14.8735 12.6527 14.9318C12.6524 14.9321 12.6521 14.9327 12.6518 14.9333C12.581 15.0129 12.5063 15.0904 12.4276 15.1655C12.1844 15.3961 11.9132 15.6038 11.6351 15.8012C11.6287 15.8052 11.6213 15.8073 11.6149 15.8116C11.4249 15.9464 11.2311 16.0754 11.0377 16.2048L10.7397 16.4049C10.6174 16.4882 10.4975 16.5767 10.3782 16.6648C9.95178 16.9799 9.54883 17.2777 9.04151 17.2795C8.53422 17.2777 8.13124 16.9799 7.70477 16.6648C7.58549 16.5767 7.46591 16.4882 7.34329 16.4049L7.0471 16.2063C6.57029 15.8876 6.07763 15.5581 5.66399 15.1655C5.41079 14.9254 5.20093 14.6601 5.02584 14.3767C5.02552 14.3761 5.02524 14.3754 5.02492 14.3748C4.93279 14.2254 4.85106 14.0698 4.77752 13.9099C4.77355 13.9014 4.76989 13.8934 4.76624 13.8855C4.24461 12.737 4.16499 11.3451 4.16499 9.99308C4.16499 8.8772 4.68387 7.80435 5.55326 7.12345C6.33663 6.50969 7.22922 6.02405 7.67274 5.79799C7.84327 6.17166 8.03882 6.50754 8.24685 6.82173C8.28742 6.88367 8.32524 6.95106 8.36735 7.01085C8.39604 7.05142 8.42775 7.08682 8.45703 7.12647C8.5583 7.26374 8.65989 7.4001 8.76665 7.52577C8.80539 7.57153 8.84687 7.61087 8.88652 7.65513C9.12721 7.92478 9.37767 8.17218 9.63664 8.38999C9.63815 8.39122 9.6397 8.39213 9.64121 8.39364C9.79039 8.51871 9.94169 8.63584 10.0939 8.74506C10.1336 8.77375 10.1738 8.79723 10.2135 8.825C10.3282 8.90402 10.4426 8.98301 10.5576 9.05377C10.5707 9.06172 10.5835 9.06843 10.5963 9.07602C11.9767 9.91613 13.3451 10.1855 13.9254 10.2657C13.9107 11.7797 13.7618 13.2979 13.0145 14.455Z"
                                fill="#33D87F"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4001_820">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0.5 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="audience female-audience">
                            <svg
                              width="8"
                              height="21"
                              viewBox="0 0 8 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 20.416C4.89543 20.416 4 19.5206 4 18.416L4 14.416L-4.37114e-07 10.416L4 6.41602L4 2.41602C4 1.31145 4.89543 0.416015 6 0.416015C7.10457 0.416015 8 1.31144 8 2.41602L8 18.416C8 19.5206 7.10457 20.416 6 20.416Z"
                                fill="url(#paint0_linear_319_2103)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_319_2103"
                                  x1="6"
                                  y1="22.416"
                                  x2="6"
                                  y2="-1.58399"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#00CC5E" />
                                  <stop offset="1" stopColor="#00B3FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Кол-во женской аудитории
                          </span>
                        </div>
                      </div>
                      <div className="subscribers-pagination">
                        <div className="man-pagination"></div>
                        <div className="women-pagination"></div>
                      </div>
                    </div>
                  </td>
                  <td className="td">2 000</td>
                  <td className="td">2 000</td>
                  <td className="td schedule-td">
                    <p className="schedule-text">
                      2 публикации <span>в день 14:00 - 16:00</span>
                    </p>
                  </td>
                  <td className="td actions-td">
                    <button className="edit-btn">
                      <img src={editIcon} alt="" />
                    </button>
                    <button className="pause-btn" onClick={pauseModalOpen}>
                      <img src={pauseIcon} alt="" />
                      <img src={pauseblackIcon} alt="" />
                    </button>
                    <button className="delete-btn" onClick={deleteModalOpen}>
                      <img src={deletegradientIcon} alt="" />
                      <img src={deleteIcon} alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="td chanel-td">
                    <div className="chanel-img">
                      <img src={avatar} alt="" />
                      <span className="created">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="14"
                            cy="14"
                            r="13"
                            fill="#FF0000"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <path
                            d="M10 17.708L18 9.70801M18 17.708L10 9.70801"
                            stroke="white"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">Светские хроники</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td subscribers-td">
                    <h4 className="subscribers-num">2 005</h4>
                    <div className="subscribers-list">
                      <div className="subscribers-list-in">
                        <div className="man-subscriber">
                          <svg
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4001_813)">
                              <path
                                d="M15.1303 5.57223C15.0589 4.7428 14.4962 4.01268 13.6964 3.713C13.1856 3.52131 13.0704 3.05276 13.0476 2.91567C13.1601 2.79119 13.7336 2.64119 14.2658 2.6007C14.3828 2.59202 14.4835 2.51581 14.5244 2.40602C14.5652 2.29592 14.5382 2.17236 14.4553 2.08954C12.8235 0.457721 9.00039 0.498217 8.85461 0.502119C8.67674 0.49551 4.49276 0.379119 3.1828 3.35483C3.1462 3.41933 2.31379 4.97375 3.44859 8.65828L3.44437 10.1347C3.44437 12.1835 3.64565 14.2704 5.1053 15.6566C5.33776 15.8774 5.58826 16.0748 5.84414 16.2604V18.2001C5.84414 18.3659 5.97821 18.5 6.14409 18.5C6.30966 18.5 6.44405 18.3659 6.44405 18.2001V16.6813C6.47854 16.7044 6.51306 16.7275 6.54754 16.7503L6.82472 16.9369C6.9384 17.014 7.04938 17.0959 7.16008 17.1778C7.64033 17.533 8.13676 17.9001 8.83542 17.9001C8.83693 17.9001 8.83812 17.8998 8.83964 17.8998C8.84115 17.8998 8.84234 17.9001 8.84382 17.9001C9.54244 17.9001 10.0389 17.5329 10.5192 17.1778C10.6299 17.0959 10.7408 17.014 10.8545 16.9369L11.1428 16.7434C11.1761 16.7209 11.21 16.6978 11.2436 16.6753V18.2001C11.2436 18.366 11.3777 18.5 11.5435 18.5C11.7091 18.5 11.8435 18.366 11.8435 18.2001V16.2605C12.0991 16.0748 12.3496 15.8774 12.5823 15.6566C14.0492 14.2639 14.2514 12.1635 14.2514 10.1009V9.24867C14.9221 7.84987 15.2194 6.61281 15.1303 5.57223ZM13.6514 9.18293V10.1008C13.6514 12.0296 13.4717 13.9845 12.1693 15.221C11.9305 15.4478 11.6641 15.6518 11.3905 15.8459C11.3836 15.8501 11.3764 15.8522 11.3701 15.8564C11.1818 15.9902 10.9892 16.1189 10.7969 16.2469L10.5092 16.4401C10.389 16.5217 10.2714 16.6087 10.1544 16.6954C9.73473 17.0055 9.33845 17.298 8.8396 17.2998C8.34075 17.298 7.94447 17.0056 7.52482 16.6954C7.40783 16.6087 7.29025 16.5217 7.16995 16.4401L6.87808 16.2442C6.40922 15.9314 5.92478 15.6071 5.51831 15.221C4.15825 13.9303 4.04425 11.919 4.04425 10.1356L4.04875 8.60281V8.60221L4.05233 7.40115C4.05233 7.19835 4.09192 7.00188 4.16992 6.81712C4.20022 6.74481 4.23921 6.67823 4.28181 6.61524C4.2944 6.59633 4.30849 6.57924 4.32171 6.56125C4.3556 6.51685 4.39191 6.47484 4.43121 6.43554C4.44682 6.41993 4.46211 6.40373 4.47891 6.38875C4.53139 6.34196 4.58658 6.29816 4.64631 6.26037C4.65021 6.25798 4.6538 6.25496 4.6577 6.25229C4.72189 6.21239 4.79089 6.1797 4.86197 6.15091C4.88148 6.14311 4.90155 6.13681 4.92138 6.12992C4.97597 6.11041 5.03176 6.09484 5.08878 6.08222C5.11096 6.07712 5.13345 6.07203 5.15627 6.06841C5.22408 6.05702 5.29365 6.04981 5.36416 6.0477C5.37376 6.0477 5.38335 6.04591 5.39295 6.04591C5.45475 6.04559 5.51715 6.05371 5.57982 6.06092C5.60622 6.06422 5.63262 6.06331 5.65902 6.06812C5.74782 6.08313 5.83721 6.10651 5.92541 6.13832C6.38317 6.30389 7.26209 6.50128 8.8519 6.50128C10.4418 6.50128 11.3206 6.30389 11.7784 6.13832C12.4935 5.88034 13.2636 6.17791 13.5335 6.81716C13.6118 7.00196 13.6514 7.19842 13.6514 7.40118V9.18293Z"
                                fill="#5C9BFB"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4001_813">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="percentage">65%</p>
                          <span className="audience man-audience">
                            <svg
                              width="8"
                              height="21"
                              viewBox="0 0 8 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 20.416C4.89543 20.416 4 19.5206 4 18.416L4 14.416L-4.37114e-07 10.416L4 6.41602L4 2.41602C4 1.31145 4.89543 0.416015 6 0.416015C7.10457 0.416015 8 1.31144 8 2.41602L8 18.416C8 19.5206 7.10457 20.416 6 20.416Z"
                                fill="url(#paint0_linear_319_2103)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_319_2103"
                                  x1="6"
                                  y1="22.416"
                                  x2="6"
                                  y2="-1.58399"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#00CC5E" />
                                  <stop offset="1" stopColor="#00B3FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Кол-во мужской аудитории.
                          </span>
                        </div>
                        <div className="women-subscriber">
                          <p className="percentage">65%</p>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_4001_820)">
                              <path
                                d="M16.845 10.6434L15.7407 6.50536C13.6493 0.309152 10.0896 0.494334 9.9542 0.501963C9.89318 0.503474 3.82633 0.715479 2.42185 7.62764L2.38343 7.82013C2.35383 7.97051 2.32423 8.12061 2.29006 8.271C2.07409 9.22338 1.50761 12.5881 3.28607 15.8988C3.34038 16.0001 3.445 16.0596 3.55481 16.0596C3.5893 16.0596 3.62438 16.0535 3.65823 16.0413C3.8007 15.99 3.88366 15.8421 3.85378 15.6938C3.85319 15.6905 3.79339 15.3433 3.98525 15.1078C4.10695 14.9577 4.32019 14.8744 4.60939 14.8507C4.78996 15.1201 4.99771 15.3748 5.24389 15.6081C5.4806 15.8329 5.73504 16.0337 5.99523 16.2225V18.1949C5.99523 18.3633 6.13159 18.5 6.30029 18.5C6.46867 18.5 6.60534 18.3633 6.60534 18.1949V16.6499C6.63919 16.6727 6.67308 16.6956 6.70693 16.7182L6.99275 16.9104C7.10837 16.9888 7.22093 17.072 7.33349 17.155C7.82186 17.5165 8.32703 17.8899 9.03718 17.8899C9.03869 17.8899 9.03992 17.8896 9.04147 17.8896C9.04302 17.8896 9.04421 17.8899 9.04572 17.8899C9.75587 17.8899 10.261 17.5165 10.7494 17.1553C10.862 17.072 10.9749 16.9888 11.0905 16.9104L11.383 16.7136C11.4172 16.6907 11.4517 16.6673 11.4861 16.6444V18.1949C11.4861 18.3633 11.6225 18.5 11.7912 18.5C11.9595 18.5 12.0962 18.3633 12.0962 18.1949V16.2225C12.3561 16.0336 12.6108 15.8329 12.8476 15.6081C12.9019 15.5563 12.9513 15.502 13.0022 15.4483C13.019 15.4489 13.0352 15.4492 13.0517 15.4468C15.2096 15.1594 16.2141 13.9203 16.6766 12.931C16.9963 12.2474 17.0561 11.435 16.845 10.6434ZM13.0145 14.455C13.009 14.4635 13.0026 14.4721 12.9971 14.4806C12.9486 14.5541 12.8985 14.6264 12.8449 14.6975C12.8308 14.7158 12.815 14.7338 12.8003 14.7524C12.7527 14.8131 12.7045 14.8735 12.6527 14.9318C12.6524 14.9321 12.6521 14.9327 12.6518 14.9333C12.581 15.0129 12.5063 15.0904 12.4276 15.1655C12.1844 15.3961 11.9132 15.6038 11.6351 15.8012C11.6287 15.8052 11.6213 15.8073 11.6149 15.8116C11.4249 15.9464 11.2311 16.0754 11.0377 16.2048L10.7397 16.4049C10.6174 16.4882 10.4975 16.5767 10.3782 16.6648C9.95178 16.9799 9.54883 17.2777 9.04151 17.2795C8.53422 17.2777 8.13124 16.9799 7.70477 16.6648C7.58549 16.5767 7.46591 16.4882 7.34329 16.4049L7.0471 16.2063C6.57029 15.8876 6.07763 15.5581 5.66399 15.1655C5.41079 14.9254 5.20093 14.6601 5.02584 14.3767C5.02552 14.3761 5.02524 14.3754 5.02492 14.3748C4.93279 14.2254 4.85106 14.0698 4.77752 13.9099C4.77355 13.9014 4.76989 13.8934 4.76624 13.8855C4.24461 12.737 4.16499 11.3451 4.16499 9.99308C4.16499 8.8772 4.68387 7.80435 5.55326 7.12345C6.33663 6.50969 7.22922 6.02405 7.67274 5.79799C7.84327 6.17166 8.03882 6.50754 8.24685 6.82173C8.28742 6.88367 8.32524 6.95106 8.36735 7.01085C8.39604 7.05142 8.42775 7.08682 8.45703 7.12647C8.5583 7.26374 8.65989 7.4001 8.76665 7.52577C8.80539 7.57153 8.84687 7.61087 8.88652 7.65513C9.12721 7.92478 9.37767 8.17218 9.63664 8.38999C9.63815 8.39122 9.6397 8.39213 9.64121 8.39364C9.79039 8.51871 9.94169 8.63584 10.0939 8.74506C10.1336 8.77375 10.1738 8.79723 10.2135 8.825C10.3282 8.90402 10.4426 8.98301 10.5576 9.05377C10.5707 9.06172 10.5835 9.06843 10.5963 9.07602C11.9767 9.91613 13.3451 10.1855 13.9254 10.2657C13.9107 11.7797 13.7618 13.2979 13.0145 14.455Z"
                                fill="#33D87F"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_4001_820">
                                <rect
                                  width="18"
                                  height="18"
                                  fill="white"
                                  transform="translate(0.5 0.5)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="audience female-audience">
                            <svg
                              width="8"
                              height="21"
                              viewBox="0 0 8 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 20.416C4.89543 20.416 4 19.5206 4 18.416L4 14.416L-4.37114e-07 10.416L4 6.41602L4 2.41602C4 1.31145 4.89543 0.416015 6 0.416015C7.10457 0.416015 8 1.31144 8 2.41602L8 18.416C8 19.5206 7.10457 20.416 6 20.416Z"
                                fill="url(#paint0_linear_319_2103)"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_319_2103"
                                  x1="6"
                                  y1="22.416"
                                  x2="6"
                                  y2="-1.58399"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#00CC5E" />
                                  <stop offset="1" stopColor="#00B3FF" />
                                </linearGradient>
                              </defs>
                            </svg>
                            Кол-во женской аудитории
                          </span>
                        </div>
                      </div>
                      <div className="subscribers-pagination">
                        <div className="man-pagination"></div>
                        <div className="women-pagination"></div>
                      </div>
                    </div>
                  </td>
                  <td className="td">2 000</td>
                  <td className="td">2 000</td>
                  <td className="td schedule-td">
                    <p className="schedule-text">
                      2 публикации <span>в день 14:00 - 16:00</span>
                    </p>
                  </td>
                  <td className="td actions-td">
                    <button className="edit-btn">
                      <img src={editIcon} alt="" />
                    </button>
                    <button className="pause-btn" onClick={pauseModalOpen}>
                      <img src={pauseIcon} alt="" />
                      <img src={pauseblackIcon} alt="" />
                    </button>
                    <button className="delete-btn" onClick={deleteModalOpen}>
                      <img src={deletegradientIcon} alt="" />
                      <img src={deleteIcon} alt="" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table-bottom">
              <p className="left-text">Всего каналов: 926</p>
              <div className="table-pagination">
                <button className="prev-button">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.42436 0.275345C6.19005 0.0410307 5.81015 0.0410307 5.57583 0.275345L0.775833 5.07535C0.541519 5.30966 0.541519 5.68956 0.775833 5.92387L5.57583 10.7239C5.81015 10.9582 6.19005 10.9582 6.42436 10.7239C6.65868 10.4896 6.65868 10.1097 6.42436 9.87535L2.04863 5.49961L6.42436 1.12387C6.65868 0.889559 6.65868 0.50966 6.42436 0.275345Z"
                      fill="#262626"
                      fillOpacity="1"
                    />
                  </svg>
                </button>
                <div className="table-page">
                  <p>Страница</p>
                  <span className="table-page-number">1</span>
                  <p className="">из 34</p>
                </div>
                <button className="next-button">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.775834 0.275345C1.01015 0.0410307 1.39005 0.0410307 1.62436 0.275345L6.42436 5.07535C6.65868 5.30966 6.65868 5.68956 6.42436 5.92387L1.62436 10.7239C1.39005 10.9582 1.01015 10.9582 0.775835 10.7239C0.54152 10.4896 0.54152 10.1097 0.775834 9.87535L5.15157 5.49961L0.775834 1.12387C0.541519 0.889559 0.541519 0.50966 0.775834 0.275345Z"
                      fill="#262626"
                    />
                  </svg>
                </button>
              </div>
              <div className="pagination-show">
                <p className="show-text">Показать</p>
                <select
                  defaultValue="10"
                  name="show"
                  id="show"
                  className="form-select"
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddChannnel isOpen={addChannel} onClose={closeAddChanelModal} />
      <TableModal
        title="Вы точно хотите удалить канал?"
        description="Канал удалится из базы и чтобы возобновить продажу рекламы, потребуется новая регистрация"
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
      />
      <TableModal
        title="Вы точно хотите поставить канал на паузу?"
        description="Канал не будет доступен для новых публикаций"
        isOpen={pauseModal}
        onClose={() => setPauseModal(false)}
      />
      <AllChanels
        isOpen={allChannelsModal}
        onClose={() => setAllChannelsModal(false)}
      />
    </div>
  );
}

export default Main;
