const Home_card_container = ({ children, headline }) => {
  return (
    <>
      <div className="w-full h-full rounded-md   bg-gray-200/50 p-2 space-y-2 overflow-x-hidden overflow-y-scroll gap-3  review ">
        <h6 className="text-xl font-bold  underline-offset-4 tracking-wide">
          {headline}
        </h6>
        {children}
      </div>
    </>
  );
};

export default Home_card_container;
