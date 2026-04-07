import Navbar from "@/app/compoments/Navbar";
import Header from "./compoments/Header";
import Features from "./compoments/Features";
import Summary from "./compoments/Summary";
import Step from "./compoments/Step";
import Footer from "./compoments/Footer";
import SignupModal from "./compoments/modals/SignupModal";
import LogInModal from "./compoments/modals/LogInModal";
import ForgotPassword from "./compoments/modals/ForgotPassword";


export default function Home() {
  return (
    <div className="w-full h-full max-w-[100vw] font-onest p-0 mx-auto my-0 box-border">
    <Navbar />
    <Header />
    <Features />
    <Summary />
    <Step />
    <Footer />
    <SignupModal />
    <LogInModal />
    <ForgotPassword />
    </div>
  );
}
