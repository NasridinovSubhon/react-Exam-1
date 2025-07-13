import AllDiv from "./AllDiv"
import logo from "../assets/Logo.svg"
import Buttons from "./Buttons"
const Footer = () => {
    return (
        <>
            <div style={{ margin: "auto", marginTop: "100px" }} className="xl:w-[90%] sm:w-[90%]">
                <AllDiv>
                    <div style={{ margin: "auto" }} className="xl:w-[30%] sm:text-center sm:w-[70%]">
                        <img src={logo} alt="" />
                        <h1 style={{ marginTop: "10px", marginBottom: "20px" }} className="">Quisque id leo non dolor tempor elementum quis ac urna. Nam pharetra, ligula eget finibus dignissim, turpis ipsum sollicitudin</h1>
                        <div className="w-[90%] flex justify-between bg-amber-100 items-center p-[5px_5px] rounded-3xl">
                            <input type="text" className="w-[60%]" placeholder="Email address" />
                            <Buttons style={{ marginTop: "25px" }} className={"bg-[#FF7852] text-white rounded-[20px] xl:p-[8px_20px]  sm:p-[5px_8px]"} text={"Subscribe"} />
                        </div>
                    </div>
                    <div style={{ margin: "auto" }} className="xl:w-[20%] sm:text-center sm:w-[70%]">
                        <h1 style={{ marginBottom: "12px" }} className="text-[28px]">Address</h1>
                        <h1 style={{ marginBottom: "12px" }}>+23 384 485 29</h1>
                        <h1 style={{ marginBottom: "12px" }}>vet@shamim.com</h1>
                        <h1 style={{ marginBottom: "12px" }}>123 king street, Melbrown</h1>
                        <h1 style={{ marginBottom: "12px" }}>Victoria 3000, Australia</h1>
                    </div>
                    <div style={{ margin: "auto" }} className="xl:w-[20%] sm:text-center sm:w-[70%]">
                        <h1 style={{ marginBottom: "12px" }} className="text-[28px]">Links</h1>
                        <h1 style={{ marginBottom: "12px" }}>About Us</h1>
                        <h1 style={{ marginBottom: "12px" }}>Groomers</h1>
                        <h1 style={{ marginBottom: "12px" }}>Contact Us</h1>
                        <h1 style={{ marginBottom: "12px" }}>Privacy Policy</h1>
                        <h1 style={{ marginBottom: "12px" }}>Tearms</h1>
                    </div>
                    <div style={{ margin: "auto" }} className="xl:w-[20%] sm:text-center sm:w-[70%]">
                        <h1 style={{ marginBottom: "12px" }} className="text-[28px]">Opening Hours</h1>
                        <h1 style={{ marginBottom: "12px" }}>Monday-Tuesday 09:00-18:00</h1>
                        <h1 style={{ marginBottom: "12px" }}>Wednesday 09:00-18:00</h1>
                        <h1 style={{ marginBottom: "12px" }}>Thrusday-Friday 09:00-18:00</h1>
                        <h1 style={{ marginBottom: "12px" }}>Saturday 10:00-17:00</h1>
                        <h1 style={{ marginBottom: "12px" }}>Sunday 10:30-16:00</h1>
                    </div>
                </AllDiv>
            </div>
        </>
    )
}

export default Footer
