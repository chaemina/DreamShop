import ToggleGroup from "../../features/toggleGroup/ui/ToggleGroup";

const Header = () => {
  return (
    <div className="gap-2 h-[3rem] w-full flex justify-center items-center flex-col tablet:flex-row  m-2 ">
      <div className="flex-[1] justify-center flex">
        <img
          src="/images/Logo.svg"
          alt="Logo"
          className="w-[12rem] laptop:w-[16rem] m-2"
        />
      </div>

      <div className="flex-[1] flex justify-center">
        <div>
          <ToggleGroup/>
        </div>
      </div>

      <div className="flex-[1]" />
    </div>
  );
};

export default Header;
