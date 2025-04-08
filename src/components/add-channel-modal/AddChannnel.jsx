import * as React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Input from "../input/Input";
import "./css/index.css";
import Select from "../select/Select";
import plus from "@/assets/icons/add-plus.svg";
import Button from "../button/button";

const AddChannel = ({ isOpen = false, onClose }) => {
  const [startTime, setStartTime] = React.useState(
    dayjs().set("hour", 12).set("minute", 0),
  );
  const [endTime, setEndTime] = React.useState(
    dayjs().set("hour", 14).set("minute", 0),
  );
  const botLink = "/newbot/tyFjfhjfkljkll";
  const modalClasses = `add-chanel__modal ${isOpen ? "show" : ""}`;
  const selectOptions = {
    options: ["Тематика 1", "Тематика 2", "Тематика 3"],
  };
  const selectOptions2 = {
    options: ["1 публикация", "2 публикация", "3 публикация"],
  };

  const timeFormat = "HH:mm";

  return (
    <div className={modalClasses}>
      <div className="modal-in">
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
        <div className="modal-content">
          <p className="modal-description">
            <span>
              Чтобы получать заказы с биржи, Вам необходимо добавить нашего бота{" "}
              <a href={botLink} target="_blank" rel="noopener noreferrer">
                {botLink}
              </a>{" "}
              администратором в канал с правами добавления и удаления сообщений.
            </span>
            Перед отправкой канала на модерацию, убедитесь, что бот был
            добавлен.
          </p>

          <form className="add-chanel__form">
            <Input
              label="Ссылка на канал"
              type="text"
              placeholder="Ссылка на канал"
              required
            />
            <Select label={"Тематика"} data={selectOptions} />
            <Select
              label={"Количество публикаций в день"}
              data={selectOptions2}
            />
            <div className="form-clock">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker", "TimePicker"]}>
                  <TimePicker
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    format={timeFormat}
                    ampm={false} // 24 soatlik format
                    sx={{
                      width: "100%",
                      "& .MuiInputBase-input": {
                        fontWeight: "bold",
                        color: "#333",
                      },
                    }}
                  />
                  <TimePicker
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    format={timeFormat}
                    ampm={false} // 24 soatlik format
                    sx={{
                      width: "100%",
                      "& .MuiInputBase-input": {
                        fontWeight: "bold",
                        color: "#333",
                      },
                    }}
                    minTime={startTime}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <div className="button-wrapper border-gradient">
                <button className="add-clock__btn">
                  <img src={plus} alt="" />
                  Добавить время
                </button>
              </div>
            </div>
            <div className="terms-consent">
              <h5 className="label">
                Согласны ли вы размещать посты следующего содержания
              </h5>
              <div className="checkbox-group">
                <div className="form-control">
                  <input type="checkbox" id="1" className="form-check" />
                  <label htmlFor="1">18+</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" id="2" className="form-check" />
                  <label htmlFor="2">ставки</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" id="3" className="form-check" />
                  <label htmlFor="3">о криптовалютах</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" id="4" className="form-check" />
                  <label htmlFor="4">казино</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" id="5" className="form-check" />
                  <label htmlFor="5">шок-контент, треш</label>
                </div>
                <div className="form-control">
                  <input type="checkbox" id="6" className="form-check" />
                  <label htmlFor="6">военного характера</label>
                </div>
              </div>
            </div>
            <div className="form-button">
              <Button title="Сохранить" />
              <button className="send-btn border-gradient">
                Отправить на проверку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddChannel.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default AddChannel;
