import SideBar from '../Components/SideBars/SideBar';
import SecondarySideBar from "../Components/SideBars/Secondary-SideBar";
import PetProfile from '../Components/PetProfile';
import PetPCondensed from '../Components/PetPCondensed';
import ServiceQuote from "../Components/ServiceQuote";
import ServiceQuoteWithImage from '../Components/ServiceQuoteWithImage';
import ServiceAddress from '../Components/ServiceAddress';
// import CheckinLocation from '../Components/CheckinLocation';
import SitterProfile from '../Components/SitterProfile';
import SitterEmptyState from '../Components/SitterEmptyState';
import ServiceReceipt from '../Components/ServiceReceipt';
import ServiceListItems from '../Components/ServiceListItems';
function App() {
  return (
    <div className="">
      <div class="flex flex-row min-h-screen">
        <SideBar />
        {/* <SecondarySideBar/> */}
        <div class="w-3/4 h-full p-[50px]">
          {/* <PetProfile /> */}
          {/* <PetPCondensed/> */}
          {/* <ServiceQuote /> */}
          {/* <ServiceQuoteWithImage/> */}
          {/* <ServiceAddress/> */}
          {/* <SitterProfile/> */}
          {/* <SitterEmptyState/> */}
          {/* <ServiceReceipt/> */}
          <ServiceListItems />
        </div>
      </div>
    </div>
  );
}

export default App;
