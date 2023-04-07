import './App.css';
import SideBar from './Components/SideBar';
import SecondarySideBar from './Components/Secondary-SideBar';
import PetProfile from './Components/PetProfile';
function App() {
  return (
    <div className="App">
      {/* <SecondarySideBar/> */}
      <div class="flex flex-row h-screen">
        {/* <div class="w-1/4 h-full bg-gray-900"> */}
      <SideBar />
        {/* </div> */}
        <div class="w-3/4 h-full">

      <PetProfile />
        </div>
      </div>
    </div>
  );
}

export default App;
