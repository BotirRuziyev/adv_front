import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import PropTypes from "prop-types";
import Button from "../button/button";
import Select from "../select/Select";
import "./css/index.css";

const DownloadReportModal = ({ isOpen, onClose }) => {
  // Устанавливаем начальное значение (11 февраля - 16 февраля текущего года)
  const initialStartDate = dayjs().month(1).date(11); // февраль = 1 (январь = 0)
  const initialEndDate = dayjs().month(1).date(16);

  const [dateRange, setDateRange] = useState([
    initialStartDate,
    initialEndDate,
  ]);
  const [quickSelection, setQuickSelection] = useState(null);

  // Форматирование даты в нужный формат
  const formatDateRange = () => {
    if (!dateRange[0] || !dateRange[1]) return "";

    const start = dateRange[0].locale("ru").format("D MMMM");
    const end = dateRange[1].locale("ru").format("D MMMM");

    return `${start} - ${end}`;
  };

  // Функции для быстрого выбора
  const handleQuickSelect = (type) => {
    const today = dayjs();
    let startDate, endDate;

    if (type === "month") {
      startDate = today.startOf("month");
      endDate = today.endOf("month");
      setQuickSelection("month");
    } else if (type === "year") {
      startDate = today.startOf("year");
      endDate = today.endOf("year");
      setQuickSelection("year");
    }

    setDateRange([startDate, endDate]);
  };
  const selectOptions = {
    options: ["Тематика 1", "Тематика 2", "Тематика 3"],
  };

  return (
    <div className={"download-report " + (isOpen ? "show" : "")}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.6361 1.09248L0.908133 13.8204M13.6361 13.8204L0.908134 1.09248"
              stroke="white"
            />
          </svg>
        </button>
        <form action="#" className="download-report__form">
          <div className="form-control">
            <Select label={"Выберите канал"} data={selectOptions} />
          </div>
          <div className="form-control">
            <label htmlFor="#" className="label">
              Канал
            </label>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
              <DateRangePicker
                value={dateRange}
                onChange={(newValue) => {
                  setDateRange(newValue);
                  setQuickSelection(null);
                }}
                calendars={1}
              />
            </LocalizationProvider>
            <div className="form-input__group">
              <input
                type="text"
                value={
                  quickSelection === "month" ? formatDateRange() : "За 1 мес"
                }
                onClick={() => handleQuickSelect("month")}
                style={{
                  backgroundColor:
                    quickSelection === "month"
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                }}
                readOnly
              />
              <input
                type="text"
                value={quickSelection === "year" ? formatDateRange() : "За год"}
                onClick={() => handleQuickSelect("year")}
                style={{
                  backgroundColor:
                    quickSelection === "year"
                      ? "rgba(255, 255, 255, 0.2)"
                      : "transparent",
                }}
                readOnly
              />
            </div>
            <Button title="Выгрузить отчет" />
          </div>
        </form>
      </div>
    </div>
  );
};

DownloadReportModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default DownloadReportModal;
