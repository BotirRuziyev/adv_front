import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru"; // Rus tilini import qilish
import dayjs from "dayjs";
import "./css/index.css"

const currentYear = dayjs();

const MonthModal = () => {
    return (
        <div className='month-modal'>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                <DatePicker
                    defaultValue={dayjs("2022-04-17")}
                    maxDate={currentYear}
                    openTo="month"
                    views={["month", "year"]}
                    format="MMMM - YYYY"
                    yearsOrder="desc"
                    sx={{ minWidth: 250 }}
                />
            </LocalizationProvider>
        </div>
    )
}

export default MonthModal