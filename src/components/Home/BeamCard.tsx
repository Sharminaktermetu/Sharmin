import ShineBorder from "../ui/shine-border";

export function ShineBorderDemo() {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-7 cols-12 pb-40">
        <ShineBorder
          className="rounded-lg"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className=" bg-base-100 w-96 rounded h-full">
            <div className="card-body">
              <div className="size-16 bg-red-500 rounded-full flex items-center justify-center">
                p
              </div>
              <h2 className="card-title">Fast Performance</h2>
              <p>
                Enjoy lightning-fast load times and a seamless user experience
                with our optimized platform.
              </p>
            </div>
          </div>
        </ShineBorder>

        <ShineBorder
          className="rounded-lg"
          color={["#D2848A", "#f2b3c0", "#FFBE7B"]}
        >
          <div className="bg-base-100 w-96 rounded h-full">
            <div className="card-body">
              <div className="size-16 bg-red-500 rounded-full flex items-center justify-center">
                p
              </div>
              <h2 className="card-title">
                Shoes!
              </h2>
              <p> Enjoy lightning-fast load times and a seamless user experience
              with our optimized platform.</p>
             
            </div>
          </div>
        </ShineBorder>
        <ShineBorder
          className="rounded-lg"
          color={["#2f4661", "#1a1a1a", "#FFBE7B"]}
        >
          <div className=" bg-base-100 w-96 rounded h-full">
            <div className="card-body">
              <div className="size-16 bg-red-500 rounded-full flex items-center justify-center">
                p
              </div>
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              
            </div>
          </div>
        </ShineBorder>
      </div>
    </div>
  );
}
