import HomeMobile from "@/components/Mobile/homeMobile";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black duration-300">
      <div className="sm:hidden">
        <HomeMobile />
      </div>
      <div className="sm:block hidden">
        <h2>HomeDesk</h2>
      </div>
    </div>
  );
}
