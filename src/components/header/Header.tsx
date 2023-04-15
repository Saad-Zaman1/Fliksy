import "./Header.css";
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="head">
      🎬 Fliksy 🎥
    </span>
  );
};

export default Header;
