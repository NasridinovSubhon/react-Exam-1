import AllDiv from "./components/AllDiv"
import logo from "./assets/Logo.svg"
import Buttons from "./components/Buttons"
import menu from "./assets/Group 1390.svg"
import sag from "./assets/Object-13 1.svg"
import i1L from "./assets/icon.svg"
import i2L from "./assets/icon (1).svg"
import i3L from "./assets/icon (2).svg"
import i4L from "./assets/icon (3).svg"
import uni from "./assets/Union.svg"
import sag2 from "./assets/Object-14 1.svg"
import i1L2 from "./assets/i1L2.svg"
import i2L2 from "./assets/i2L2.svg"
import i3L2 from "./assets/i3L2.svg"
import i4L2 from "./assets/i4L2.svg"
import sag3 from "./assets/image (4).svg"
import Footer from "./components/footer"

const App = () => {
  let data = [
    {
      img: i1L,
      t1: 'Pet Grooming',
      t2: "There are many variatio of passage of Lorem for a Ipsum available",
      bg: "white"
    },
    {
      img: i2L,
      t1: 'Pet Grooming',
      t2: "There are many variatio of passage of Lorem for a Ipsum available",
      bg: "pink"
    },
    {
      img: i3L,
      t1: 'Pet Grooming',
      t2: "There are many variatio of passage of Lorem for a Ipsum available",
      bg: "white"
    },
    {
      img: i4L,
      t1: 'Pet Grooming',
      t2: "There are many variatio of passage of Lorem for a Ipsum available",
      bg: "white"
    }
  ]
  let data2 = [
    {
      img: i1L2,
      t1: 'Rosalina Wiliam',
      t2: "CEO & Founder",
      bg: "white"
    },
    {
      img: i2L2,
      t1: 'Rosalina Wiliam',
      t2: "CEO & Founder",
      bg: "pink"
    },
    {
      img: i3L2,
      t1: 'Rosalina Wiliam',
      t2: "CEO & Founder",
      bg: "white"
    },
    {
      img: i4L2,
      t1: 'Rosalina Wiliam',
      t2: "CEO & Founder",
      bg: "white"
    }
  ]
  return (
    <>
      <AllDiv>
        <img src={logo} alt="" className="xl:w-[10%] sm:w-[25%]" />
        <div className="xl:w-[35%] xl:flex justify-between items-center s sm:hidden">
          <h1 className="xl:text-[20px]">Start</h1>
          <h1 className="xl:text-[20px]">Services</h1>
          <h1 className="xl:text-[20px]">About</h1>
          <h1 className="xl:text-[20px]">News</h1>
          <h1 className="xl:text-[20px]">Contact</h1>
        </div>
        <Buttons className={"xl:p-[8px_27px] sm:p-[4px_10px] bg-[#FF7852] rounded-[20px] text-white"} text={"384-129-293-39"}>  </Buttons>
        <img src={menu} alt="" className="xl:hidden sm:block" />
      </AllDiv>

      <AllDiv>
        <div className="xl:w-[45%] sm:w-[90%]">
          <h1 className="xl:text-[100px] xl:leading-[100px]" >For Your Pet’s Natural Life & Care</h1>
          <h1 style={{ marginTop: "15px" }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt</h1>
          <div style={{ marginTop: '15px' }} className="flex xl:w-[60%] justify-between items-center sm:w-[85%]">
            <Buttons className={"bg-[#FF7852] text-white rounded-[20px] xl:p-[8px_20px]  sm:p-[5px_8px]"} text={"Our Services"} />
            <Buttons className={"bg-[#8EC637] text-white rounded-[20px] xl:p-[8px_20px]  sm:p-[5px_8px]"} text={"Make Appointment"} />
          </div>
        </div>
        <img style={{ filter: "drop-shadow(0px 0px 50px #FFDBCC)" }} src={sag} alt="" className="xl:w-[45%]" />
      </AllDiv>

      <div style={{ margin: "auto", marginTop: "30px", marginBottom: "70px" }} className="bg-[#FFECE4] text-center xl:w-[80%] xl:p-[40px] rounded-3xl">
        <h1 style={{ marginBottom: "10px" }} className="text-[#FF7751] ">Care For Your Pet</h1>
        <h1 className="xl:text-[64px] sm:text-[30px]">What We Do</h1>
        <div style={{ margin: 'auto', marginTop: "20px" }} className="w-[85%] flex justify-between items-center sm:flex-wrap">
          {data.map((e, i) => {
            return <div style={{ backgroundColor: e.bg, margin: 'auto', marginBottom: "20px", }} className="xl:w-[23%] rounded-[20px] p-[30px_25px] sm:w-[80%] sm:flex-wrap">
              <img src={e.img} alt="" style={{ margin: "auto" }} className="xl:w-[40%] " />
              <h1 style={{ marginTop: "20px", marginBottom: "20px", fontSize: "26px" }} >  {e.t1} </h1>
              <h1>{e.t2}</h1>
            </div>
          })}
        </div>
      </div>

      <AllDiv>
        <div className="xl:w-[50%]">
          <h1 style={{ marginBottom: '15px' }} className="text-[#FF7751]">Our Success Story</h1>
          <p className="xl:text-[64px] sm:text-[30px]">Experience Vet Clinic
            And Services</p>
          <p>Aliquam erat volutpat In id fermentum augue, ut pellentesque  Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis maximus.</p>
          <div style={{ marginTop: "20px" }} className="flex gap-[20px] items-center">
            <img src={uni} alt="" />
            <h1>Donec commodo scelerisque laoreet nibh hendrerit</h1>
          </div>
          <div style={{ marginTop: "20px" }} className="flex gap-[20px] items-center">
            <img src={uni} alt="" />
            <h1>Donec commodo scelerisque laoreet nibh hendrerit</h1>
          </div>
          <div style={{ marginTop: "20px", marginBottom: "25px" }} className="flex gap-[20px] items-center">
            <img src={uni} alt="" />
            <h1>Donec commodo scelerisque laoreet nibh hendrerit</h1>
          </div>
          <Buttons className={"bg-[#FF7852] text-white rounded-[20px] xl:p-[8px_20px]  sm:p-[5px_8px]"} text={"Know More About Us"} />
        </div>
        <img src={sag2} alt="" className="xl:w-[40%]" style={{ filter: "drop-shadow(10px 10px 30px #FFDBCC)" }} />
      </AllDiv>

      <div style={{ margin: "auto", marginTop: "30px", marginBottom: "70px" }} className="bg-[#FFECE4] text-center xl:w-[80%] xl:p-[40px] rounded-3xl">
        <h1 style={{ marginBottom: "10px" }} className="text-[#FF7751] ">Care For Your Pet</h1>
        <h1 className="xl:text-[64px] sm:text-[30px]">What We Do</h1>
        <div style={{ margin: 'auto', marginTop: "20px" }} className="w-[85%] flex justify-between items-center sm:flex-wrap">
          {data2.map((e, i) => {
            return <div style={{ backgroundColor: e.bg, margin: 'auto', marginBottom: "20px", }} className="xl:w-[23%] rounded-[120px] p-[30px_25px] sm:w-[80%] sm:flex-wrap">
              <img src={e.img} alt="" style={{ margin: "auto" }} className="xl:w-[80%] " />
              <h1 style={{ marginTop: "20px", marginBottom: "20px", fontSize: "26px" }} >  {e.t1} </h1>
              <h1>{e.t2}</h1>
            </div>
          })}
        </div>
      </div>


      <div style={{ margin: "auto" }} className="flex items-center xl:w-[70%] sm:w-[90%] sm:flex-wrap">

        <div style={{ border: "2px solid #FF7751", marginBottom: "20px", margin: "auto" }} className="p-[25px] text-center xl:w-[33%] rounded-[20px] sm:w-[90%]">
          <h1 style={{ marginBottom: "0px" }} className="text-[28px]">Regular Pack</h1>
          <h1 className="text-[50px]">3 Days</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Pet Shower</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Fitness Checkup</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Pet Grooming</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Hair and Nail Cut</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Control Hair Falling</h1>

          <h1 style={{ marginTop: "20px", marginBottom: "10px" }} className="text-[50px] font-bold text-[#FF7751]">$150<span className="text-[20px]"> Prev Virtinr </span> </h1>
          <Buttons className={"bg-[#FF7852] text-white rounded-[20px] xl:p-[8px_20px]  sm:p-[5px_8px]"} text={"Purchase Pack"} />
        </div>


        <div style={{ border: "2px solid #FF7751", marginBottom: "20px", margin: "auto" }} className="p-[25px] text-center xl:w-[33%] rounded-[20px] sm:w-[90%] bg-[#FF6439] text-[white]">
          <h1 style={{ marginBottom: "0px" }} className="text-[28px]">Regular Pack</h1>
          <h1 className="text-[50px]">3 Days</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Pet Shower</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Fitness Checkup</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Fitness Checkup</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Fitness Checkup</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Pet Grooming</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Hair and Nail Cut</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Control Hair Falling</h1>

          <h1 style={{ marginTop: "20px", marginBottom: "10px" }} className="text-[50px] font-bold">$150<span className="text-[20px]"> Prev Virtinr </span> </h1>
          <Buttons className={"bg-[white]  text-[#FF6439] rounded-[20px] xl:p-[8px_20px]  sm:p-[5px_8px]"} text={"Purchase Pack"} />
        </div>

        <div style={{ border: "2px solid #FF7751", marginBottom: "20px", margin: "auto" }} className="p-[25px] text-center xl:w-[33%] rounded-[20px] sm:w-[90%]">
          <h1 style={{ marginBottom: "0px" }} className="text-[28px]">Regular Pack</h1>
          <h1 className="text-[50px]">30 Days</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Pet Shower</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Fitness Checkup</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Pet Grooming</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Hair and Nail Cut</h1>
          <h1 style={{ marginTop: "15px" }} className="text-[20px]">Control Hair Falling</h1>

          <h1 style={{ marginTop: "20px", marginBottom: "10px" }} className="text-[50px] font-bold text-[#FF7751]">$150<span className="text-[20px]"> Prev Virtinr </span> </h1>
          <Buttons className={"bg-[#FF7852] text-white rounded-[20px] xl:p-[8px_20px]  sm:p-[5px_8px]"} text={"Purchase Pack"} />
        </div>

      </div>

      <div style={{ margin: "auto", marginTop: '100px', }} className="xl:w-[75%] bg-[#FFECE4] rounded-xl sm:w-[90%]">
        <AllDiv>
          <div style={{ margin: "auto" }} className="xl:w-[56%] sm:w-[90%]">
            <h1 style={{ marginBottom: "20px" }} className="xl:text-[54px]">Professional Pet Care</h1>
            <h1 style={{ marginBottom: "20px" }}>Pet owners trust us to look after the needs of their beloved companions. We are specialists committed to delivering the very highest of veterinary care and affection.</h1>
            <Buttons className={"bg-[#FFA992] text-white rounded-[20px] xl:p-[10px_25px]  sm:p-[5px_8px]"} text={"Contact Us Now"} />
          </div>


          <img src={sag3} alt="" className="xl:w-[40%]" />

        </AllDiv>
      </div>

      <Footer />

    </>
  )
}

export default App
