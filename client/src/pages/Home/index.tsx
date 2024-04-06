import HomeCards from "../../components/HomeCards";

const HomeData: React.FC = () => {
  const cards = [
    {
      title: 'Consultar Clientes',
      description: 'Controle e consluta de clintes',
      img: '/laptop.png',
      redirect: [
        {
          to: '/clients',
          title: 'Consultar Clientes',
        },
      ],
    },
  ];
  return (
    <div className="w-full md:h-full h-[1500px] flex items-center justify-center px-[5%] md:pt-0 md:pb-0 pt-6 pb-8">
      <div className="md:grid md:grid-cols-1 md:grid-rows-2 md:gap-4 flex-col md:space-y-0 space-y-4">
        {cards.map((card) => (
          <HomeCards
            key={card.title}
            title={card.title}
            description={card.description}
            img={card.img}
            redirect={card?.redirect}
            className="h-[250px] md:max-w-[600px] w-[900px] max-w-[350px]"
          />
        ))}
      </div>
    </div>
  );
};

export default HomeData;