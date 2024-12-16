import Banner from "./components/Banner";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <div className="w-full lg:w-2/3 lg:self-end h-full overflow-x-hidden overflow-y-auto bg-red-500">
        {/* Other page components */}
      </div>
    </Wrapper>
  );
}
