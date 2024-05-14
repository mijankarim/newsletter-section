import check from "../assets/check-fill.png";
const featuresArray = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses of artistic inspiration",
];
const Features = () => {
  return (
    <>
      <h2 className="text-3xl md:text-5xl text-neutral-900 font-semibold mb-4">
        Get the finest curated abstracts delivered weekly to your inbox
      </h2>
      <ul className="flex flex-col gap-5">
        {featuresArray.map((item, index) => (
          <li className="list-item" key={index}>
            <img className="w-6 h-6" src={check} alt="check" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Features;
