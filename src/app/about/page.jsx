import Breadcrumbs from "@/utils/Breadcrumbs";
import Image from "next/image";
import Card from "./Card";
import ProfileCard from "./ProfileCard";
import ServiceCard from "./ServiceCard";
import { services, cards, profiles } from "@/utils/data";

export default function About() {

    return (
      <div className="flex flex-col px-32 py-10 gap-5">
        <Breadcrumbs/>
        <div className="flex flex-col gap-32 py-10 pb-20">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col gap-5 justify-start w-1/3">
              <h1 className="text-3xl font-bold">Our Story</h1>
              <p>
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with
                 an active presense in Bangladesh. Supported by wide range of tailored marketing, 
                 data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 
                 3 millioons customers across the region. 
              </p>
              <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
              </p>
            </div>
            <Image src='/about/banner.png' height={700} width={700} alt="banner"/>
          </div>
          
          <div className="flex flex-row justify-between">
            {cards.map((card,id) => (
              <Card card={card} key={id}/>
            ))}
          </div>
          
          <div className="flex flex-row justify-between">
            {profiles.map((profile,id) => (
              <ProfileCard profile={profile} key={id}/>
            ))}
          </div>
          
          <div className="flex flex-row justify-between">
            {services.map((service,id) => (
              <ServiceCard service={service} key={id}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
  