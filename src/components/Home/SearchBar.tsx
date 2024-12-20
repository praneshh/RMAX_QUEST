
import Logo from '../RMax.png'
export function SearchBar() {
  return (
    <div className="flex items-center max-w-2xl mx-auto bg-white rounded-lg shadow-sm border p-2">
      <div className="w-10 h-10 flex-shrink-0">
        <img src={Logo} alt="RMax AI" className="w-full h-full object-contain" />
      </div>
      <input
        type="text"
        placeholder="Curious? Let AI Uncover the Answers!"
        className="flex-1 px-4 py-2 outline-none text-gray-600"
      />
    </div>
  );
}