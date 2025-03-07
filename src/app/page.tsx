import HomeMobile from "@/components/Mobile/homeMobile";

export default function Home() {
  return (
    <div className="dark:text-white text-black">
      <div className="sm:hidden">
        <HomeMobile />
      </div>
      <div className="sm:block hidden">
        <h2>HomeDesk</h2>
      </div>
    </div>
  );
}
