"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Wrapper,
  Container,
  Section,
  Title,
  Slider,
  Slide,
  ImageWrapper,
  StyledImage,
  Overlay,
  Caption,
  Dots,
  Dot,
  CategoriesWrapper,
  CategoriesHeader,
  CategoriesScroll,
  CategoryButton,
  CategoryIcon,
  CategoryText,
  SeeAllButton,
  CategoriesGrid,
  HeadlinesSection,
  HeadlinesGrid,
  ButtonWrapper,
  ViewMoreButton,
} from "../Styles/HomeStyled";

import NewsCard from "../components/NewsCard";

export default function TopTrendingSection() {
  // ----- Trending Slides -----
  const slides = [
    {
      id: 1,
      image: "/images/trending1.jpg",
      caption:
        "This week’s top OTT hit is Manoj Bajpayee’s movie Inspector Jhende, based on a true incident.",
      category: "Entertainment",
    },
    {
      id: 2,
      image: "/images/trending2.jpg",
      caption:
        "Vikrant Massey’s next crime thriller dominates streaming charts this week.",
      category: "Crime",
    },
    {
      id: 3,
      image: "/images/trending3.jpg",
      caption:
        "New documentary on India’s police reforms gains attention across OTT platforms.",
      category: "Politics",
    },
  ];

  // ----- Categories -----
  const categories = [
    { name: "India", icon: "/icons/india.png" },
    { name: "Politics", icon: "/icons/politics.png" },
    { name: "World", icon: "/icons/world.png" },
    { name: "Trending", icon: "/icons/trending.png" },
    { name: "Business", icon: "/icons/business.png" },
    { name: "Entertainment", icon: "/icons/entertainment.png" },
    { name: "Crime", icon: "/icons/crime.png" },
    { name: "Tech", icon: "/icons/tech.png" },
    { name: "Health", icon: "/icons/health.png" },
    { name: "Education", icon: "/icons/education.png" },
    { name: "Lifestyle", icon: "/icons/lifestyle.png" },
    { name: "Science", icon: "/icons/science.png" },
    { name: "Weather", icon: "/icons/weather.png" },
    { name: "Tourism", icon: "/icons/tourism.png" },
    { name: "Food", icon: "/icons/food.png" },
  ];

  // ----- Headlines -----
  const headlines = [
    {
      id: 1,
      title: "Mahindra Cars Now Gets Up to ₹1.56 Lakh Discount",
      summary:
        "Following the government’s decision to change the GST slab structure, Mahindra cut prices of petrol and diesel SUVs by up to ₹1.56 lakh from today.",
      expandedText: "This makes popular models like Bolero, Thar, Scorpio, and XUV700 much cheaper now. From now on, petrol cars below 1200cc, diesel cars below 1500cc, and cars shorter than 4 meters attract just 18% GST, not 28%. Therefore, Mahindra has cut prices on Bolero, Bolero Neo, Thar, Scorpio, XUV3XO (petrol and diesel), XUV700, and Scorpio-N. Price cuts range between ₹1.01 lakh and ",
      image: "/images/mahindra.png",
      category: "Business",
    },
    {
      id: 2,
      title: "Modi Called ‘Friend’ by Trump Again",
      summary:
        "US President Donald Trump recently indicated reducing the distance in India–US relations.",
      expandedText: "In a recent interview, Trump referred to Prime Minister Narendra Modi as his 'friend' and expressed his admiration for Modi's leadership. This marks another instance where Trump has highlighted the strong ties between the two nations, emphasizing cooperation on various fronts including trade, defense, and counter.",
      image: "/images/modi.png",
      category: "Politics",
    },
    {
      id: 3,
      title: "Maruti Suzuki Announces Festival Offers",
      summary:
        "Maruti Suzuki introduces massive festive discounts on popular hatchbacks and SUVs this Diwali season.",
      expandedText: "The offers include cash discounts, exchange bonuses, and attractive financing options on models like Swift, Baleno, Vitara Brezza, and Ertiga. Customers can avail discounts up to ₹75,000 on select models. Additionally, Maruti Suzuki is providing special benefits for first-time buyers and loyal customers during the festive period.",
      image: "/images/maruti.png",
      category: "Business",
    },
    {
      id: 4,
      title: "India’s Stock Market Hits Record High",
      summary: "The Sensex and Nifty reached new lifetime highs.",
      expandedText: "The stock market rally was driven by strong corporate earnings and positive global cues. Investors are optimistic about the economic recovery and are betting on further reforms by the government.",
      image: "/images/market.png",
      category: "Business",
    },
    {
      id: 5,
      title: "New EV Policy Announced by Government",
      summary: "The central government launches incentives for EV adoption.",
      expandedText: "The new policy aims to boost electric vehicle sales by offering subsidies, tax benefits, and developing charging infrastructure across the country. The government targets to have 30% of all vehicles on the road to be electric by 2030.",
      image: "/images/ev.png",
      category: "Tech",
    },
    {
      id: 6,
      title: "Tech Giants Announce New AI Initiatives",
      summary: "Several leading tech companies revealed ambitious AI programs.",
      expandedText: "These initiatives focus on advancing AI research, developing ethical guidelines, and creating AI-powered products to enhance user experience. Collaboration between companies and academic institutions is also a key component of these programs.",
      image: "/images/ai.png",
      category: "Tech",
    },
    {
      id: 7,
      title: "Crude Oil Prices Drop Amid Global Uncertainty",
      summary: "Global oil prices fell 2% due to declining demand.",
      expandedText: "The drop in crude oil prices is attributed to concerns over economic slowdown and oversupply in the market. Analysts predict that prices may remain volatile in the coming months as geopolitical tensions and production decisions by major oil-producing countries continue to impact the market.",
      image: "/images/oil.png",
      category: "World",
    },
  ];

  // ----- States -----
  const [current, setCurrent] = useState(0);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllHeadlines, setShowAllHeadlines] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Auto-slide trending section
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % filteredSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Filter logic
  const filteredSlides =
    selectedCategory === "All"
      ? slides
      : slides.filter((s) => s.category === selectedCategory);

  const filteredHeadlines =
    selectedCategory === "All"
      ? headlines
      : headlines.filter((h) => h.category === selectedCategory);

  const visibleHeadlines = showAllHeadlines
    ? filteredHeadlines
    : filteredHeadlines.slice(0, 6);

  return (
    <Wrapper>
      <Container>
        {/* ---- TOP TRENDINGS ---- */}
        <Section id="top-trendings">
          <Title>TOP TRENDINGS</Title>
          <Slider>
            {filteredSlides.length > 0 ? (
              filteredSlides.map((slide, index) => (
                <Slide key={slide.id} $active={index === current}>
                  <ImageWrapper>
                    <StyledImage
                      src={slide.image}
                      alt={slide.caption}
                      fill
                      priority
                    />
                    <Overlay />
                    <Caption>{slide.caption}</Caption>
                  </ImageWrapper>
                </Slide>
              ))
            ) : (
              <p style={{ textAlign: "center", color: "#999" }}>
                No trending news available for {selectedCategory}.
              </p>
            )}
          </Slider>

          <Dots>
            {filteredSlides.map((_, index) => (
              <Dot key={index} $active={index === current} />
            ))}
          </Dots>
        </Section>

        {/* ---- CATEGORIES ---- */}
        <Section id="categories">
          <CategoriesWrapper>
            <CategoriesHeader>
              <Title>CATEGORIES</Title>
              <SeeAllButton onClick={() => setShowAllCategories(!showAllCategories)}>
                {showAllCategories ? "Close" : "See All"}
              </SeeAllButton>
            </CategoriesHeader>

            {!showAllCategories ? (
              <CategoriesScroll>
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    style={{
                      border:
                        selectedCategory === cat.name
                          ? "2px solid #c75b27"
                          : "2px solid transparent",
                    }}
                  >
                    <CategoryIcon>
                      <Image src={cat.icon} alt={cat.name} width={60} height={60} />
                    </CategoryIcon>
                    <CategoryText>{cat.name}</CategoryText>
                  </CategoryButton>
                ))}
              </CategoriesScroll>
            ) : (
              <CategoriesGrid>
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    style={{
                      border:
                        selectedCategory === cat.name
                          ? "2px solid #c75b27"
                          : "2px solid transparent",
                    }}
                  >
                    <CategoryIcon>
                      <Image src={cat.icon} alt={cat.name} width={60} height={60} />
                    </CategoryIcon>
                    <CategoryText>{cat.name}</CategoryText>
                  </CategoryButton>
                ))}
              </CategoriesGrid>
            )}
          </CategoriesWrapper>
        </Section>

        {/* ---- TOP 10 HEADLINES ---- */}
        <Section id="top-10-headlines">
          <HeadlinesSection>
            <Title>
              TOP <span>10</span> HEADLINES
            </Title>
            <HeadlinesGrid>
              {filteredHeadlines.slice(0, 10).length > 0 ? (
                filteredHeadlines.slice(0, 10).map((news, index) => (
                  <NewsCard
                    key={news.id}
                    news={news}
                    rank={index + 1}
                    showRank={true}
                  />
                ))
              ) : (
                <p style={{ textAlign: "center", color: "#999" }}>
                  No headlines available for {selectedCategory}.
                </p>
              )}
            </HeadlinesGrid>
          </HeadlinesSection>
        </Section>

        {/* ---- MORE HEADLINES ---- */}
        <Section id="more-headlines">
          <HeadlinesSection>
            <Title>MORE HEADLINES</Title>

            <HeadlinesGrid>
              {visibleHeadlines.length > 0 ? (
                visibleHeadlines.map((news, index) => (
                  <NewsCard key={news.id} news={news} rank={index + 1} />
                ))
              ) : (
                <p style={{ textAlign: "center", color: "#999" }}>
                  No more headlines for {selectedCategory}.
                </p>
              )}
            </HeadlinesGrid>

            {!showAllHeadlines && filteredHeadlines.length > 6 && (
              <ButtonWrapper>
                <ViewMoreButton onClick={() => setShowAllHeadlines(true)}>
                  View More
                </ViewMoreButton>
              </ButtonWrapper>
            )}
          </HeadlinesSection>
        </Section>
      </Container>
    </Wrapper>
  );
}
