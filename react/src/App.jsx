import { useState, useEffect } from "react";
import axios from "axios";

import "./App.scss";
import Card from "./components/Card";
import Modal from "./components/Modal/Modal";

function App() {
  const [items, setItems] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://65cbf306efec34d9ed884b5a.mockapi.io/pictures")
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  return (
    <>
      {modalOpened && (
        <Modal items={items} onClose={() => setModalOpened(false)} />
      )}

      <div className="wrapper">
        <header className="header">
          <h1 className="header-title">Галерея изображений</h1>
        </header>
        <main className="container">
          {items.map((item) => (
            <Card
              key={item.id}
              src={item.src}
              description={item.description}
              openModal={() => setModalOpened(true)}
            />
          ))}
        </main>
        <footer className="footer">
          <span className="copyright">
            Тестовое задание для компании 2Leads.
          </span>
          <a
            className="telegram-link"
            href="https://t.me/youngfrontdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            t.me/youngfrontdev
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
