import Banner from "./components/Banner";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Banner />
      <div className="h-full w-full overflow-y-auto overflow-x-hidden bg-red-500 lg:w-2/3 lg:self-end">
        {/* Other page components */}
      </div>
    </Wrapper>
  );
}
