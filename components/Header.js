import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Magna est exercitation quis labore cillum irure ut pariatur non irure
        esse.
      </p>
    </div>
  );
};

export default Header;
