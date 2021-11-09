import Header from "../Header";
import LeftBar from "../LeftBar";
import MainContent from "../MainContent";
import Footer from "../Footer";

import style from './Layout.module.css';

function Layout() {
    return (
        <div>
            <Header />
            <div className={style.middle}>
                <LeftBar /> 
                <MainContent />
            </div>
            <Footer />
        </div>
    );
}
  
export default Layout;