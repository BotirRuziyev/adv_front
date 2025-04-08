import { useEffect, useState } from "react";
import GlobalSwiper from "../../../components/channel-swiper/GlobalSwiper";
import DownloadReportModal from "../../../components/download-report/DownloadReportModal";
import AddChannnel from "../../../components/add-channel-modal/AddChannnel";
import TableModal from "../../../components/table-modal/TableModal";
import "./css/advertisement.css";

import addchanel from "@/assets/images/add-user.svg";
import telegram from "@/assets/images/telegram.svg";
import avatar from "@/assets/images/avtar.svg";
import burgerIcon from "@/assets/icons/burger.svg";
import filestats from "@/assets/icons/file-stats.svg";
import deleteIcon from "@/assets/icons/Status_delete_button.svg";
import cloceCircle from "@/assets/icons/clock-circle.svg";
import deletegradientIcon from "@/assets/icons/Status_delete_button-gradient.svg";

const CampaignsPage = () => {
  const [onOpen, setOpen] = useState(false);
  const [addChannel, setAddChannel] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  document.title = "Главная страница";
  const [selectedAvatar] = useState(() => {
    return (
      localStorage.getItem("selectedAvatar") || "src/assets/avatars/43332.jpg"
    );
  });

  useEffect(() => {
    localStorage.setItem("selectedAvatar", selectedAvatar);
  }, [selectedAvatar]);
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
  const [subscriber, setSubscriber] = useState(false);
  const [subscribers, setSubscribers] = useState([
    {
      id: 1,
      title: "Запланирована",
      selected: false,
    },
    {
      id: 2,
      title: "Размещена",
      selected: false,
    },
    {
      id: 3,
      title: "Завершена",
      selected: false,
    },
    {
      id: 4,
      title: "Спор",
      selected: false,
    },
  ]);
  const handleSelect = (id) => {
    setSubscribers((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };
  const openMenu = () => {
    setSubscriber(!subscriber);
  };
  const downloadModal = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const openAddChanelModal = () => setAddChannel(true);
  const closeAddChanelModal = () => setAddChannel(false);
  const deleteModalOpen = () => {
    setDeleteModal(true);
  };
  return (
    <div className="advertisement-page">
      <header className="page-header">
        <h4 className="header-title">Реклама</h4>
        <button className="header-button" onClick={downloadModal}>
          <img src={filestats} alt="" />
          Выгрузить отчет
        </button>
      </header>
      <div className="main">
        <div className="main-page">
          <div className="channels">
            <GlobalSwiper slides={slides} />
            <button className="add-channel-btn" onClick={openAddChanelModal}>
              <img src={addchanel} alt="" />
              Добавить канал
            </button>
            <button className="burger-btn">
              <img src={burgerIcon} alt="" />
            </button>
          </div>
          <div className="channels-table">
            <div className="table-top">
              <h3 className="table-title">Каналы</h3>
            </div>
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th className="th">Канал</th>
                  <th className="th th-subscribers">Пост</th>
                  <th className="th clock-th">
                    Дата и время
                    <button className="date-btn" onClick={openMenu}>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.78033 0.46967C10.0732 0.762563 10.0732 1.23744 9.78033 1.53033L5.78033 5.53033C5.48744 5.82322 5.01256 5.82322 4.71967 5.53033L0.719669 1.53033C0.426777 1.23744 0.426777 0.762563 0.719669 0.46967C1.01256 0.176776 1.48744 0.176776 1.78033 0.469669L5.25 3.93934L8.71967 0.46967C9.01256 0.176777 9.48744 0.176777 9.78033 0.46967Z"
                          fill="#262626"
                        />
                      </svg>
                    </button>
                  </th>
                  <th className="th status-th">
                    Статус
                    <button className="status-btn" onClick={openMenu}>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.78033 0.46967C10.0732 0.762563 10.0732 1.23744 9.78033 1.53033L5.78033 5.53033C5.48744 5.82322 5.01256 5.82322 4.71967 5.53033L0.719669 1.53033C0.426777 1.23744 0.426777 0.762563 0.719669 0.46967C1.01256 0.176776 1.48744 0.176776 1.78033 0.469669L5.25 3.93934L8.71967 0.46967C9.01256 0.176777 9.48744 0.176777 9.78033 0.46967Z"
                          fill="#262626"
                        />
                      </svg>
                    </button>
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
                          <div className="form-checkbox">
                            <input type="checkbox" checked={item.selected} />
                          </div>
                          {item.title}
                        </div>
                      ))}
                    </div>
                  </th>
                  <th className="th">Охват</th>
                  <th className="th">CPM</th>
                  <th className="th income-th">
                    Доход
                    <button className="income-btn">
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.78033 0.46967C10.0732 0.762563 10.0732 1.23744 9.78033 1.53033L5.78033 5.53033C5.48744 5.82322 5.01256 5.82322 4.71967 5.53033L0.719669 1.53033C0.426777 1.23744 0.426777 0.762563 0.719669 0.46967C1.01256 0.176776 1.48744 0.176776 1.78033 0.469669L5.25 3.93934L8.71967 0.46967C9.01256 0.176777 9.48744 0.176777 9.78033 0.46967Z"
                          fill="#262626"
                        />
                      </svg>
                    </button>
                  </th>
                  <th className="th">Действия</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td className="td chanel-td">
                    <div className="chanel-img">
                      <img src={telegram} alt="" />
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">Varlamov News</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td post-td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>24 февраля в 16:00</span>
                  </td>
                  <td className="td status-td">
                    <span className="bg-gray">Запланирована</span>
                  </td>
                  <td className="td">20 000</td>
                  <td className="td">2 000 ₽</td>
                  <td className="td">200 000 ₽</td>
                  <td className="td actions-td">
                    <button className="clock-btn">
                      <img src={cloceCircle} alt="" />
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
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">Новая газета</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td post-td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>24 февраля в 16:00</span>
                  </td>
                  <td className="td status-td">
                    <span className="bg-green">Размещена</span>
                  </td>
                  <td className="td">20 000</td>
                  <td className="td">2 000 ₽</td>
                  <td className="td">200 000 ₽</td>
                  <td className="td actions-td">
                    <button className="clock-btn">
                      <img src={cloceCircle} alt="" />
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
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">Новая газета</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td post-td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>22 февраля в 16:00</span>
                  </td>
                  <td className="td status-td">
                    <span className="bg-brown">Завершена</span>
                  </td>
                  <td className="td">20 000</td>
                  <td className="td">2 000 ₽</td>
                  <td className="td">200 000 ₽</td>
                  <td className="td actions-td">
                    <button className="clock-btn">
                      <img src={cloceCircle} alt="" />
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
                      <img src={telegram} alt="" />
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">Светские хроники</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td post-td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>21 февраля в 16:00</span>
                  </td>
                  <td className="td status-td">
                    <span className="bg-orange">Спор</span>
                  </td>
                  <td className="td">20 000</td>
                  <td className="td">2 000 ₽</td>
                  <td className="td">200 000 ₽</td>
                  <td className="td actions-td">
                    <button className="clock-btn">
                      <img src={cloceCircle} alt="" />
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
                      <img src={telegram} alt="" />
                    </div>
                    <div className="chanel-info">
                      <h4 className="chanel-name">Varlamov News</h4>
                      <p className="chanel-status">Новостной портал</p>
                    </div>
                  </td>
                  <td className="td post-td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td status-td">
                    <span className="bg-gray">Запланирована</span>
                  </td>
                  <td className="td">20 000</td>
                  <td className="td">2 000 ₽</td>
                  <td className="td">200 000 ₽</td>
                  <td className="td actions-td">
                    <button className="clock-btn">
                      <img src={cloceCircle} alt="" />
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
                <select name="show" id="show" className="form-select">
                  <option value="10" selected>
                    10
                  </option>
                  <option value="20" selected>
                    20
                  </option>
                  <option value="30" selected>
                    30
                  </option>
                  <option value="40" selected>
                    40
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadReportModal isOpen={onOpen} onClose={onClose} />
      <AddChannnel isOpen={addChannel} onClose={closeAddChanelModal} />
      <TableModal
        title="Вы точно хотите удалить канал?"
        description="Канал удалится из базы и чтобы возобновить продажу рекламы, потребуется новая регистрация"
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
      />
    </div>
  );
};

export default CampaignsPage;
