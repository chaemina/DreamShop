import GridFrame from "../../shared/ui/GridFrame";
import Link from 'next/link'

const ContactPage = () => {


const SNS = [
  { name: "insta", image: "/images/instagram.svg", link: "https://www.instagram.com/cokomong2025/" },
  { name: "youtube", image: "/images/youtube.svg", link: "https://www.youtube.com/@wfk-cokomong/" },
];

  return (
    <div className="flex flex-col w-full justify-center items-center mt-10 ">
         <img
              src="/images/sns.svg"
              alt="sns"
              className=" mb-2"
            />
      <GridFrame columns={{ mobile: 2, laptop: 2, desktop: 2 }}>
        {SNS.map((item, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center justify-center p-4"
          >
          <Link href={item.link}>
            <img
              src={item.image}
              alt={item.name}
              className=" mb-2"
            />
            </Link>
          </div>
        ))}
      </GridFrame>
    </div>
  );
};

export default ContactPage;
