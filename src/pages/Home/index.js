import React from "react";

import { Section, Slider } from "components";
import { LastNews, LastComments, OrderCall } from "./containers";
import { Carousel, Advantages, Measurer } from "./components";

import popularJSON from "./popular.json";

const Home = () => (
    <section className="home">
        <Carousel />

        <Section title="Популярные модели сезона">
            <Slider items={popularJSON} />
        </Section>

        <Section title="Новые модели в каталоге">
            <Slider items={popularJSON} />
        </Section>

        <Advantages />
        <LastNews />
        <Measurer />
        <LastComments />
        <OrderCall />
    </section>
);

export default Home;
