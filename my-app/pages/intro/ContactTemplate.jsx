import GridFrame from "../../shared/ui/GridFrame";
import Link from 'next/link'

const ContactPage = () => {


const SNS = [
  { name: "insta", image: "/images/insta.svg", link: "https://www.instagram.com/cokomong2025/" },
  { name: "drive", image: "/images/google-classroom.png", link: "https://drive.google.com/drive/folders/19H_cMk2NfkDQXXVPk-wU8sNwfH03rYLHevCrnFr3TNWCfx5AFkyz0iNjyPlbuJBFqLxc9-9C?usp=drive_link" },
];

  return (
    <div className="flex flex-col w-full justify-center items-center mt-20 ">
      <div className="w-[80%] laptop:w-[50%] text-xs tablet:text-lg text-textBrown text-center">
         <p>And you can see our history on team Instagram or GoogleDrive!</p>
      </div>
      <GridFrame columns={{ mobile: 2, laptop: 2, desktop: 2 }}>
        {SNS.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-col justify-center w-full items-center justify-center"
          >
          <Link className="items-center justify-center flex" href={item.link}>
            <img
              src={item.image}
              alt={item.name}
              className="w-[6rem] laptop:w-[10rem]  mb-2"
            />
            </Link>
          </div>
        ))}
      </GridFrame>
    </div>
  );
};

export default ContactPage;
