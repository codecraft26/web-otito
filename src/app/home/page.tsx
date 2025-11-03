"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import { useApiList } from "../hooks/useApi";
import { fetchCategories, fetchArticles } from "../services/api";

type ApiArticle = {
  id?: string | number;
  _id?: string;
  title?: string;
  headline?: string;
  summary?: string;
  description?: string;
  image?: string;
  imageUrl?: string;
  thumbnail?: string;
  category?: string | string[];
  language?: string;
  content?: string;
};

type News = {
  id: string | number;
  title: string;
  summary?: string;
  image?: string;
  expandedText?: string;
};

export default function TopTrendingSection() {
  // ----- Trending Slides (fetched per selected category) -----
  type Slide = { id: string | number; image: string; caption: string; category: string };

  // ----- Categories (fetched enum) -----
  const [categories, setCategories] = useState<Array<{ slug: string; name: string; icon: string }>>([]);
  useEffect(() => {
    const load = async () => {
      const slugs = await fetchCategories();
      const iconMap: Record<string, string> = {
        business: "/icons/business.png",
        crime: "/icons/crime.png",
        domestic: "/icons/india.png",
        education: "/icons/education.png",
        entertainment: "/icons/entertainment.png",
        environment: "/icons/science.png",
        food: "/icons/food.png",
        health: "/icons/health.png",
        lifestyle: "/icons/lifestyle.png",
        other: "/icons/trending.png",
        politics: "/icons/politics.png",
        science: "/icons/science.png",
        sports: "/icons/world.png",
        technology: "/icons/tech.png",
        top: "/icons/trending.png",
        tourism: "/icons/tourism.png",
        world: "/icons/world.png",
      };
      const toName = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
      const mapped = slugs.map((slug) => ({ slug, name: toName(slug), icon: iconMap[slug] || "/icons/world.png" }));
      setCategories(mapped);
    };
    load();
  }, []);

  // ----- Headlines (fetched from API) -----
  const [headlines, setHeadlines] = useState<Array<{
    id: string | number;
    title: string;
    summary?: string;
    expandedText?: string;
    image?: string;
    category?: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // More headlines (separate API with categories filter)
  const [moreApiHeadlines, setMoreApiHeadlines] = useState<Array<{
    id: string | number;
    title: string;
    summary?: string;
    expandedText?: string;
    image?: string;
    category?: string;
  }>>([]);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [errorMore, setErrorMore] = useState<string | null>(null);

  // NEW: State for all-news-by-category
  const [categoryNews, setCategoryNews] = useState<News[]>([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [categoryError, setCategoryError] = useState<string|null>(null);

  // ----- States -----
  const [current, setCurrent] = useState(0);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllHeadlines, setShowAllHeadlines] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const apiCategory = useMemo(() => {
    const name = selectedCategory;
    if (!name || name === "All") return undefined;
    // selectedCategory holds slug from categories list (or "All")
    return name;
  }, [selectedCategory]);

  const top10Params = useMemo<Record<string, string | string[]>>(() => {
    if (apiCategory) {
      return { "category[]": [apiCategory], page: "1", limit: "10", language: "EN" };
    }
    return { page: "1", limit: "10", language: "EN" } as Record<string, string>;
  }, [apiCategory]);

  // Slides depend on selected category
  const slidesParams = useMemo<Record<string, string | string[]>>(() => {
    if (apiCategory) {
      return { "category[]": [apiCategory], language: "EN", page: "1", limit: "5" };
    }
    return { "category[]": ["top"], language: "EN", page: "1", limit: "5" };
  }, [apiCategory]);

  const { data: topRaw, loading: slidesLoading, error: slidesError } = useApiList<ApiArticle>(
    "/api/articles",
    slidesParams
  );

  const slides: Slide[] = useMemo(() => {
    return topRaw.map((a, idx) => {
      const categoryValue = Array.isArray(a.category)
        ? (a.category[0] ?? "Trending")
        : a.category ?? "Trending";
      return {
        id: a.id ?? a._id ?? `top-${idx}`,
        image: a.image ?? a.imageUrl ?? a.thumbnail ?? "/images/demo1.png",
        caption: a.title ?? a.headline ?? "",
        category: categoryValue,
      };
    });
  }, [topRaw]);

  const { data: top10Raw, loading: top10Loading, error: top10Error } = useApiList<ApiArticle>(
    "/api/articles",
    top10Params
  );
  useEffect(() => {
    setIsLoading(top10Loading);
    setError(top10Error ?? null);
    const mapped = top10Raw.map((a, idx) => ({
      id: a.id ?? a._id ?? `${idx}`,
      title: a.title ?? a.headline ?? "Untitled",
      summary: a.summary ?? a.description ?? undefined,
      expandedText: a.content ?? a.description ?? undefined,
      image: a.image ?? a.imageUrl ?? a.thumbnail ?? undefined,
      category: Array.isArray(a.category) ? a.category[0] : a.category ?? "All",
    }));
    setHeadlines(mapped);
  }, [top10Raw, top10Loading, top10Error]);

  const moreParams = useMemo<Record<string, string | string[]>>(() => {
    if (apiCategory) {
      return { "category[]": [apiCategory], language: "EN", page: "1", limit: "10" };
    }
    return { "category[]": ["crime", "technology"], language: "EN", page: "1", limit: "10" };
  }, [apiCategory]);

  const { data: moreRaw, loading: moreLoading, error: moreErr } = useApiList<ApiArticle>(
    "/api/articles",
    moreParams
  );
  useEffect(() => {
    setIsLoadingMore(moreLoading);
    setErrorMore(moreErr ?? null);
    const mapped = moreRaw.map((a, idx) => ({
      id: a.id ?? a._id ?? `more-${idx}`,
      title: a.title ?? a.headline ?? "Untitled",
      summary: a.summary ?? a.description ?? undefined,
      expandedText: a.content ?? a.description ?? undefined,
      image: a.image ?? a.imageUrl ?? a.thumbnail ?? undefined,
      category: Array.isArray(a.category) ? a.category[0] : a.category ?? "All",
    }));
    setMoreApiHeadlines(mapped);
  }, [moreRaw, moreLoading, moreErr]);

  // When a category (not All) is selected, fetch all news for it
  useEffect(() => {
    let active = true;
    if (selectedCategory !== "All") {
      setIsCategoryLoading(true);
      setCategoryError(null);
      fetchArticles({ "category[]": [selectedCategory], page: "1", limit: "100", language: "EN" })
        .then((data) => {
          if (!active) return;
          setCategoryNews((data || []).map((item, idx) => {
            const a = item as ApiArticle;
            return {
              id: a.id ?? a._id ?? `${idx}`,
              title: a.title ?? a.headline ?? "Untitled",
              summary: a.summary ?? a.description ?? undefined,
              expandedText: a.content ?? a.description ?? undefined,
              image: a.image ?? a.imageUrl ?? a.thumbnail ?? undefined,
            };
          }));
        })
        .catch((e) => {
          if (!active) return;
          setCategoryError(e?.message ?? "Failed to fetch news");
        })
        .finally(() => {
          if (!active) return;
          setIsCategoryLoading(false);
        });
    } else {
      setCategoryNews([]);
      setCategoryError(null);
      setIsCategoryLoading(false);
    }
    return () => {
      active = false;
    };
  }, [selectedCategory]);

  // Filter logic
  const filteredSlides = useMemo(() => {
    if (selectedCategory === "All") return slides;
    if (apiCategory) {
      return slides.filter((s) => (s.category || "").toLowerCase() === apiCategory);
    }
    return slides.filter(
      (s) => (s.category || "").toLowerCase() === (selectedCategory || "").toLowerCase()
    );
  }, [slides, selectedCategory, apiCategory]);

  // Auto-slide trending section
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % filteredSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [filteredSlides.length]);

  const filteredHeadlines = useMemo(() => {
    if (selectedCategory === "All") return headlines;
    if (apiCategory) {
      return headlines.filter((h) => (h.category || "").toLowerCase() === apiCategory);
    }
    return headlines.filter(
      (h) => (h.category || "").toLowerCase() === (selectedCategory || "").toLowerCase()
    );
  }, [headlines, selectedCategory, apiCategory]);

  const topHeadlines = filteredHeadlines.slice(0, 10);
  const filteredMore = useMemo(() => {
    if (selectedCategory === "All") return moreApiHeadlines;
    if (apiCategory) {
      return moreApiHeadlines.filter((h) => (h.category || "").toLowerCase() === apiCategory);
    }
    return moreApiHeadlines.filter(
      (h) => (h.category || "").toLowerCase() === (selectedCategory || "").toLowerCase()
    );
  }, [moreApiHeadlines, selectedCategory, apiCategory]);
  const moreHeadlines = showAllHeadlines ? filteredMore : filteredMore.slice(0, 6);

  if (selectedCategory !== "All" && categoryNews.length > 0) {
    return (
      <Wrapper>
        <Container>
          <Section>
            <Title>
              News in category: {categories.find(c => c.slug === selectedCategory)?.name ?? selectedCategory}
            </Title>
            <ButtonWrapper>
              <ViewMoreButton onClick={() => setSelectedCategory("All")}>Back to All News</ViewMoreButton>
            </ButtonWrapper>
          </Section>
          <Section>
            {isCategoryLoading ? (
              <p style={{textAlign: 'center', color: '#999'}}>Loading...</p>
            ) : categoryError ? (
              <p style={{textAlign: 'center', color: '#c00'}}>{categoryError}</p>
            ) : (
              <HeadlinesGrid>
                {categoryNews.map((news, index) => (
                  <NewsCard key={news.id} news={news} rank={index + 1} />
                ))}
              </HeadlinesGrid>
            )}
          </Section>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        {/* ---- TOP TRENDINGS ---- */}
        <Section id="top-trendings">
          <Title>TOP TRENDINGS</Title>
          <Slider>
            {slidesLoading ? (
              <p style={{ textAlign: "center", color: "#999" }}>Loading...</p>
            ) : slidesError ? (
              <p style={{ textAlign: "center", color: "#c00" }}>{slidesError}</p>
            ) : filteredSlides.length > 0 ? (
              filteredSlides.map((slide, index) => (
                <Slide key={slide.id} $active={index === current}>
                  <ImageWrapper>
                    <StyledImage src={slide.image} alt={slide.caption} fill priority />
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
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    style={{
                      border:
                        selectedCategory === cat.slug
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
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    style={{
                      border:
                        selectedCategory === cat.slug
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
              {isLoading ? (
                <p style={{ textAlign: "center", color: "#999" }}>Loading...</p>
              ) : error ? (
                <p style={{ textAlign: "center", color: "#c00" }}>{error}</p>
              ) : topHeadlines.length > 0 ? (
                topHeadlines.map((news, index) => (
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
              {isLoadingMore ? (
                <p style={{ textAlign: "center", color: "#999" }}>Loading...</p>
              ) : errorMore ? (
                <p style={{ textAlign: "center", color: "#c00" }}>{errorMore}</p>
              ) : moreHeadlines.length > 0 ? (
                moreHeadlines.map((news, index) => (
                  <NewsCard key={news.id} news={news} rank={index + 1} />
                ))
              ) : (
                <p style={{ textAlign: "center", color: "#999" }}>
                  No more headlines for {selectedCategory}.
                </p>
              )}
            </HeadlinesGrid>

            {!showAllHeadlines && filteredMore.length > 6 && (
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
