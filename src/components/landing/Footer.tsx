const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl mb-2">Контакты</h3>
          <p className="text-muted-foreground">+7 (000) 000-00-00</p>
          <p className="text-muted-foreground">vip@clinic.ru</p>
          <p className="text-muted-foreground">Барнаул, ул. Ленина, 12</p>
        </div>
        <div>
          <h3 className="font-display text-xl mb-2">Соцсети</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <a className="story-link" href="#">
                Вконтакте
              </a>
            </li>
            <li>
              <a className="story-link" href="#">
                Telegram
              </a>
            </li>
          </ul>
        </div>
        <div className="text-muted-foreground">
          © {new Date().getFullYear()} Premium Dental. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
