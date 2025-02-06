import React from 'react'
import '../styles/profile-info.css'
import CustomCheckbox from './custom_checkbox'


function ProfileDocx() {
    const handleCheckboxChange = (isChecked) => {
        console.log("Чекбокс:", isChecked ? "включен" : "выключен");
      };

    return (
        <div className="profile_info">
            <div className="check-box-role conteiner-prf-info">
                <CustomCheckbox label="Прямой рекламодатель" onChange={handleCheckboxChange} />
                <CustomCheckbox label="Посредник (агентство/менеджер, иной посредник)" onChange={handleCheckboxChange} />
            </div>
            <div className="legal-data conteiner-prf-info">
                <div className="container-flex-prf-info">
                    <h3>Юридические данные</h3>
                    <button className="change-password add-info-btn">Добавить юридические данные</button>
                </div>
            </div>
            <div className="cont-data conteiner-prf-info">
                <div className="container-flex-prf-info">
                    <h3>Контактные данные</h3>
                    <button className="change-password add-info-btn">Добавить контактные данные</button>
                </div>
            </div>
            <div className="bank-data conteiner-prf-info">
                <div className="container-flex-prf-info">
                    <h3>Банковские рекизиты</h3>
                    <button className="change-password add-info-btn">Добавить банковские реквизиты</button>
                </div>
            </div>
            <div className="contract-data conteiner-prf-info">
                <div className="container-flex-prf-info">
                    <h3>Договор</h3>
                    <button className="change-password add-info-btn">Заключить договор</button>
                </div>
            </div>
            <div className="notifications-data conteiner-prf-info">
                <div className="container-flex-prf-info">
                    <h3>Уведомления</h3>
                    <button className="change-password add-info-btn">Настроить уведомления</button>
                </div>
            </div>
        </div>
    )
}



export default ProfileDocx