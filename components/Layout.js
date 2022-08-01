import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";

const Layout = ({ children }) => {
  // the children of layout would be the component inside app.js
  return (
    <>
      <Meta />
      <Nav></Nav>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
