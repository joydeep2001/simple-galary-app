export default function Tab({ tabs, onClick, active }) {
  const handleCatagoryChange = (catagory) => {
    return (e) => {
      onClick(catagory);
      e.target.classList.add("active");
    };
  };
  return (
    <div className="tab-wrapper">
      {tabs.map((tab) => (
        <div
          className={`tab-item ${tab.catagory === active && "active"}`}
          key={tab.catagory}
          onClick={handleCatagoryChange(tab.catagory)}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
}
