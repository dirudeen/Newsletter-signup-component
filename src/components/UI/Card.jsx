
const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  return <main className=" bg-secondary-100 md:rounded-[2rem] md:flex md:flex-row-reverse md:max-w-[50rem] md:p-5 md:gap-2 ">{props.children}</main>;
};

export default Card;
