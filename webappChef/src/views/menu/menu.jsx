import { Carousel } from "flowbite-react";
import { FormattedMessage } from "react-intl";
import "./menu.css";
import img20 from "./../../img/20.png";
import imgd4 from "./../../img/d4.png";


const Menu = () => {

    let menuImgs = [
        "https://i.ibb.co/LrmKzds/18.png",
        "https://i.ibb.co/23DDjTr/19.png",
        "https://i.ibb.co/Qd8tLP1/d1.png",
        "https://i.ibb.co/gz1mQPS/d2.png",
        "https://i.ibb.co/Cw6wzZz/d3.png",
        "https://i.ibb.co/WKZXys9/d4.png",
        "https://i.ibb.co/M8sMYSW/d5.png",
        "https://i.ibb.co/hB9nPkp/1.png",
        "https://i.ibb.co/TM3c8KB/2.png",
        "https://i.ibb.co/RpCr9TF/3.png",
        "https://i.ibb.co/9Yg2KtP/4.png",
        "https://i.ibb.co/BHJRWXF/5.png",
        "https://i.ibb.co/9ZFRLkm/6.png",
        "https://i.ibb.co/GWRSmH3/7.png",
        "https://i.ibb.co/7j7F0mS/8.png",
        "https://i.ibb.co/f4KkDGC/9.png",
        "https://i.ibb.co/3Ybjz4j/10.png",
        "https://i.ibb.co/NCxqVR0/Whats-App-Image-2023-12-14-at-9-38-10-AM-1.jpg",
        "https://i.ibb.co/jvpcJhS/Whats-App-Image-2023-12-14-at-9-38-10-AM-2.jpg",
        "https://i.ibb.co/WVB8hPM/Whats-App-Image-2023-12-14-at-9-38-10-AM.jpg",
        "https://i.ibb.co/tb9ZvHv/El-Equipo.png",
        "https://i.ibb.co/4VHH7W1/El-Equipo-1.png",
        "https://i.ibb.co/hd7Qkjk/17.png",
    ]


    return (
        <>
            <div className="md:h-screen md:grid md:grid-cols-2 
                                         
                        border-b-2 border-yellow-400">{/* aqui se contiene todo */}

                <div className="font-txt text-slate-200 sm:py-4 sm:px-6 md:pr-4 md:pl-6 md:overflow-auto custom-scrollbar">{/* los textos */}

                <h1 className="font-signature text-yellow-400 text-5xl md:mt-1 md:py-3"><FormattedMessage id="menu.title1" defaultMessage="The experience" /></h1>
                <p className="mb-2"><FormattedMessage id="menu.p1" defaultMessage="When we indulge in Chef Alfonso's culinary experience, we not only taste the masterful blend of ingredients but also immerse ourselves in a feast of experiences, memories, and narratives that transport us to unforgettable moments and places." /></p>
                <p className="mb-2"><FormattedMessage id="menu.p2" defaultMessage="Every bite is an exhilarating journey that embeds itself in our memory and comfortably settles in the most special corner of our hearts. Delighting in his creations is not just about nourishing the body; " /></p>
                <p className="mb-2"><FormattedMessage id="menu.p3" defaultMessage=" it is about feeding the soul with a symphony of emotions that resonate long after the last delicious note has been savored." /></p>
                <div className="w-3/4 border-b-2 border-yellow-400"></div>
                
                <h1 className="font-signature text-yellow-400 sm:text-4xl sm:mt-4 md:text-5xl md:mt-12">
                    <FormattedMessage id="menu.title2" defaultMessage="Complete Menu Options:" /></h1>
                <p><FormattedMessage id="menu.p21" defaultMessage="The menu options presented below are not exhaustive. Contact us to create an exclusive, tailored, and personalized menu for your event or occasion." /></p>

               
               {/* welcome menu */}
               <div className="shadow-md shadow-slate-700 pl-4 pb-4">
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-8 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-2/5 md:mb-2">
                    <FormattedMessage id="menu.app" defaultMessage="WELCOME MENU"/>
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.app1" defaultMessage="Guacamole | Chips | mexican sauces" /></li>
                    <li><FormattedMessage id="menu.app2" defaultMessage="Mini Shrimp | seafood Coktail" /></li>
                    <li><FormattedMessage id="menu.app3" defaultMessage="Tuna sashimi" /></li>
                    <li><FormattedMessage id="menu.app4" defaultMessage="Seasoned Corn kernels" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Quesadillas: chicken | beef | seafood | vegetables" /></li>
                    <li><FormattedMessage id="menu.app6" defaultMessage="Skew: fruit | chicken | beef | seafood | vegetables" /></li>
                    <li><FormattedMessage id="menu.app7" defaultMessage="Mexican street food: sopes | memelas | tostadas | chalupas | and more" /></li>
                    <li><FormattedMessage id="menu.app8" defaultMessage="Crispy taquitos" /></li>
                    <li><FormattedMessage id="menu.app9" defaultMessage="Crudites: humus | homemade dressing" /></li>
                    <h1 className="mt-4"><FormattedMessage id="menu.dr" defaultMessage="BEVERAGES" /></h1>
                    <li><FormattedMessage id="menu.dr1" defaultMessage="Mezcalitas cocktail" /></li>
                    <li><FormattedMessage id="menu.dr2" defaultMessage="Fresh fruit mexican drinks (Non-Alcoholic)" /></li>
                </ul>
                </div>

                {/* breakfast menu */}
                <div className="shadow-md shadow-slate-700 pl-4 pb-4">
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-12 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="BREAKFAST MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                    <h1 className="mt-4"><FormattedMessage id="menu.dr" defaultMessage="BEVERAGES" /></h1>
                    <li><FormattedMessage id="menu.brDrinks" defaultMessage="Mezcalitas cocktail" /></li>                    
                </ul>
                </div>


                {/* lunch menu */}
                <div className="shadow-md shadow-slate-700 pl-4 pb-4">
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-12 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.lunch" defaultMessage="MENU LUNCH" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.lunch1" defaultMessage="Pick your style, we'll craft the perfect combination" /></li>
                    <li><FormattedMessage id="menu.lunch2" defaultMessage="Seafood party" /></li>
                    <li><FormattedMessage id="menu.lunch3" defaultMessage="Beach BBQ" /></li>
                    <li><FormattedMessage id="menu.lunch4" defaultMessage="Taco party" /></li>                    
                </ul>
                </div>


                 {/* sea at night */}
                 <div className="shadow-md shadow-slate-700 pl-4 pb-4">
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-12 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.dinner" defaultMessage="SEA AT NIGHT" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.dinner1" defaultMessage="We will create a complete menu to your liking and pleasure, it includes:" /></li>
                    <li><FormattedMessage id="menu.dinner2" defaultMessage="Appetizer and welcome cocktail" /></li>
                    <li><FormattedMessage id="menu.dinner3" defaultMessage="Starter" /></li>
                    <li><FormattedMessage id="menu.dinner4" defaultMessage="Main course" /></li>
                    <li><FormattedMessage id="menu.dinner5" defaultMessage="Dessert" /></li>
                    <li><FormattedMessage id="menu.dinner6" defaultMessage="Wine" /></li>                    
                </ul>
                </div>



                {/* MEXICAN BEACH MENU */}
                <div className="shadow-md shadow-slate-700 pl-4 pb-4">
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-12 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.mex" defaultMessage="MENU PLAYA MEXICANA" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.mex1" defaultMessage="Mini mixed snacks" /></li>
                    <li><FormattedMessage id="menu.mex2" defaultMessage="Nopal salad" /></li>
                    <li><FormattedMessage id="menu.mex3" defaultMessage="Shrimp soup | Ceviche | Grilled fish" /></li>
                    <li><FormattedMessage id="menu.mex4" defaultMessage="Steak or garlic shrimp | Diablo style" /></li>
                    <h1 className="mt-4"><FormattedMessage id="menu.mex5" defaultMessage="DESSERTS" /></h1>                    
                    <li><FormattedMessage id="menu.mex6" defaultMessage="Chocolate volcano" /></li>
                    <li><FormattedMessage id="menu.mex7" defaultMessage="Fried Ice Cream" /></li>
                    <li><FormattedMessage id="menu.mex8" defaultMessage="Napolitan Flan" /></li>                    
                </ul>
                </div>


                {/* INTERNATIONAL CUISINE */}
                <div className="shadow-md shadow-slate-700 pl-4 pb-4">
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-12 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.int" defaultMessage="INTERNATIONAL CUISINE" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.int1" defaultMessage="Options for complete international menu:" /></li>
                    <li><FormattedMessage id="menu.int2" defaultMessage="Italian" /></li>
                    <li><FormattedMessage id="menu.int3" defaultMessage="Argentinian" /></li>
                    <li><FormattedMessage id="menu.int4" defaultMessage="Japanese" /></li>
                </ul>
                    <p><FormattedMessage id="menu.int5" defaultMessage="Inquire about your preference" /></p>                    
                </div>



                {/* TEQUILA TASTING */}
                <div className="shadow-md shadow-slate-700 pl-4 pb-4">
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-12 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.tasting" defaultMessage="TEQUILA TASTING" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.tasting1" defaultMessage="Enjoy the complete experience we have designed for you" /></li>
                    <li><FormattedMessage id="menu.tasting2" defaultMessage="Variety of Blanco | Reposado | Añejo Tequila" /></li>
                    <li><FormattedMessage id="menu.tasting3" defaultMessage="Delicious pairings at each stage" /></li>
                    <li><FormattedMessage id="menu.tasting4" defaultMessage="The best accompaniment: Mariachi" /></li>                                   
                </ul>
                </div>



                {/* AND MORE... */}
                <div className="shadow-md shadow-slate-700 pl-4 pb-4">
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-12 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.more" defaultMessage="AND MORE..." />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.more1" defaultMessage="We also offer complete menu options:" /></li>
                    <li><FormattedMessage id="menu.more2" defaultMessage="Vegetarian Menu" /></li>
                    <li><FormattedMessage id="menu.more3" defaultMessage="Coffee and fine pastry service" /></li>                    
                </ul>
                </div>

                    <p className="text-yellow-400 text-l py-10 px-6">
                    <FormattedMessage id="menu.end" defaultMessage="The options are endless when you have the service and expertise of Chef Alfonso and his team by your side!" /></p>                    



                </div>


                <div>{/* las imagenes */}

                    <div className="md:h-full sm:h-screen mx-4">
                        <Carousel>
                            <img src={img20} alt="..." />
                            <img src={imgd4} alt="..." />
                            {menuImgs.map((imgToShow, index)=>(
                                <img key={index} src={imgToShow} alt="..." />
                            ))}                            
                        </Carousel>
                    </div>

                </div>

            </div>
        </>
    )
};

export default Menu;





