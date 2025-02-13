import React, { useState, useEffect } from 'react';


function CampaignsPage() {
  document.title = "Компании";

  const [selectedAvatar, setSelectedAvatar] = useState(() => {
    return localStorage.getItem("selectedAvatar") || "src/assets/avatars/43332.jpg";
  });

  useEffect(() => {
    localStorage.setItem("selectedAvatar", selectedAvatar);
  }, [selectedAvatar]);

  return (
    <p>Страница рекламы компании !</p>
  );
}

export default CampaignsPage;