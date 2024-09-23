import Button from "@/components/buttonComponent";

export const Spinner = () => {
  return (
    // <div className="h-[100vh] w-full flex flex-col item-center px-7 py-7 gap-8">
    //   <div className="flex md:w-full w-full justify-between gap-8">
    //     <div className="skeleton sm:w-32 w-48 h-8"></div>
    //     <div className="skeleton sm:w-32 w-48 h-8"></div>
    //   </div>
    //   <div className="w-full skeleton h-[75vh]"></div>
    // </div>
    <div className="px-10 md:px-20 lg:px-40 pt-16 pb-16">
      <div className="h-3/4 flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="text-xl sm:text-3xl font-medium skeleton w-36 sm:w-48 h-8"></div>
          <div className="flex gap-3">
            <div className="skeleton w-10 sm:w-32 h-8">
              <div></div>
            </div>

            <div className="skeleton w-10 sm:w-32 h-8"></div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto w-full skeleton h-[75vh]"></div>
        </div>
        <div className="flex justify-center">
          <div className="skeleton w-[100px]" />
        </div>
      </div>
    </div>
  );
};
