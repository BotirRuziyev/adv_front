import Button from "../../../components/button/button";
import filestats from "@/assets/icons/file-stats.svg";
import walletsearch from "@/assets/icons/wallet-search-svg.svg";
import listcheck from "@/assets/icons/list-check.svg";
import rublIcon from "@/assets/icons/rubl.svg";
import ChartComponent from "../../../components/ChartComponent/ChartComponent";
import MonthPicker from "../../../components/monthModal";
import "./css/Income.css";
import { useState } from "react";
import DownloadActModal from "../../../components/download-act-modal/DownloadActModal";

const Income = () => {
  const [onOpen, setOpen] = useState(false);

  const downloadModal = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="income-page">
      <header className="page-header">
        <h4 className="header-title">Доход</h4>
        <div className="right-block">
          <button className="header-button">
            <img src={filestats} alt="" />
          </button>
          <button className="header-button">
            <img src={walletsearch} alt="" />
          </button>
          <button className="header-button">
            <img src={listcheck} alt="" />
          </button>
        </div>
      </header>
      <div className="main">
        <div className="main-page">
          <div className="income-head">
            <ChartComponent
              title="Рекламный доход"
              lefttitle="Доход от рекламы"
              righttitle="тыс. руб"
            />
            <div className="right-block">
              <div className="period">
                <div className="form-control">
                  <label htmlFor="date" className="label">
                    Период
                  </label>
                  <MonthPicker />
                </div>
                <Button title="Выгрузить акт" buttonClick={downloadModal} />
              </div>
              <div className="funds">
                <div className="funds-img">
                  <img src={rublIcon} alt="" />
                </div>
                <div className="funds-body">
                  <h3 className="funds-info">
                    250 000 руб <span>доступно</span>
                  </h3>
                  <Button imgSrc={walletsearch} title="Вывести средства" />
                </div>
              </div>
            </div>
          </div>
          <div className="channels-table">
            <table className="table">
              <thead className="table-head">
                <tr>
                  <th className="th">Дата</th>
                  <th className="th">Пост</th>
                  <th className="th">Канал</th>
                  <th className="th">Доход</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
                </tr>
                <tr>
                  <td className="td">
                    <span>20 февраля в 16:00</span>
                  </td>
                  <td className="td">
                    <span>ID 56879090-90</span>
                  </td>
                  <td className="td">
                    <span>Varlamov News</span>
                  </td>
                  <td className="td">2 000 ₽</td>
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
      <DownloadActModal isOpen={onOpen} onClose={onClose} />
    </div>
  );
};

export default Income;
