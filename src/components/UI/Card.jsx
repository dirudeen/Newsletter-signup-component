
const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  return <main className=" bg-secondary-100 md:rounded-[2rem] h-full md:h-auto md:flex md:flex-row-reverse md:gap-8 md:max-w-[55rem] md:p-5 " >{props.children}</main>;
};

export default Card;
