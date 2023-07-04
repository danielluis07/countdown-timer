"use client";

interface BoxProps {
  num: number;
  changestyle: boolean;
}

const Box: React.FC<BoxProps> = ({ num, changestyle }) => {
  return (
    <div
      className={`w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] rounded-lg flex items-center justify-center ${
        changestyle ? "bg-yellow-200" : "bg-darkblue"
      }`}>
      <h1 className="text-softred font-bold text-2xl desktop:text-7xl">
        {num}
      </h1>
    </div>
  );
};

export default Box;
