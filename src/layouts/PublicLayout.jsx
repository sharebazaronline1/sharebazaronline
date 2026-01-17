import HeaderAndNav from "../components/HeaderAndNav";
import Footer from "../components/Footer";

const PublicLayout = ({ children }) => (
  <>
    <HeaderAndNav />
    <main className="flex-1 min-w-0 px-4 lg:px-6">
      {children}
    </main>
    <Footer />
  </>
);

export default PublicLayout;
