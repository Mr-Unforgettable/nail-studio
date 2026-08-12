export default function Navbar() {
  return (
    <nav className="pr-32 pl-32 border border-[#e8dcd3]">
      <div className="m-2 flex items-center justify-between">
        <h2 className="pl-6 pr-6 pt-3 pb-3 flex items-center border border-gray-500 rounded-md">
          Logo ✨
        </h2>
        <ul className="m-4 flex items-center justify-between gap-8 list-none">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Booking</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button
          type="button"
          className="pl-6 pr-6 pt-3 pb-3 rounded-md gap-2.5 bg-[#B89C85] text-[#242424] hover:bg-[#b58c6b] font-medium"
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}
