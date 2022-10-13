import Footer from "../Footer";
import Protected from "../Protected/Protected";
import Body from "./Body";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Home_2 = () => {
  return (
    <div>
      <Protected>
        <Navbar />
      </Protected>
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
};
export default Home_2;
