import chanel from "@/assets/images/telegram.svg";
import PropTypes from "prop-types";
import "./css/all-channels.css";
const AllChanels = ({ isOpen = false, onClose }) => {
  const chanels = [
    {
      id: 1,
      img: chanel,
      name: "Varlamov News",
    },
    {
      id: 2,
      img: chanel,
      name: "Новая газета",
    },
    {
      id: 3,
      img: chanel,
      name: "ANNA NEWS",
    },
    {
      id: 4,
      img: chanel,
      name: "Светские хроники",
    },
    {
      id: 5,
      img: chanel,
      name: "ANNA NEWS",
    },
    {
      id: 6,
      img: chanel,
      name: "Новая газета",
    },
    {
      id: 7,
      img: chanel,
      name: "Светские хроники",
    },
    {
      id: 8,
      img: chanel,
      name: "Varlamov News",
    },
    {
      id: 9,
      img: chanel,
      name: "ANNA NEWS",
    },
    {
      id: 10,
      img: chanel,
      name: "Светские хроники",
    },
    {
      id: 11,
      img: chanel,
      name: "ANNA NEWS",
    },
    {
      id: 12,
      img: chanel,
      name: "Новая газета",
    },
  ];
  const modalClasses = `all-channels__modal ${isOpen ? "show" : ""}`;
  return (
    <div className={modalClasses}>
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
        <ul className="channels-list">
          {chanels.map((chanel) => {
            return (
              <li key={chanel.id} className="chanel-item">
                <div className="left-block">
                  <div className="channel-img">
                    <img src={chanel.img} alt="" />
                  </div>
                  <h5 className="channel-name">Varlamov News</h5>
                </div>
                <div className="right-block">
                  Новостной <br /> портал
                </div>
              </li>
            );
          })}
        </ul>
        <div className="all-channels">Всего каналов: 926</div>
      </div>
    </div>
  );
};

AllChanels.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default AllChanels;
