import React from 'react';

export default function HomePage() {
  return (
    <div data-layer="Landing-page" className="LandingPage w-[1728px] h-[4898px] relative bg-white">
        {/* Welcome Section */}
      <div data-layer="Welcom-section" className="WelcomSection w-[1729px] h-[886px] left-0 top-[1067px] absolute">
        <div data-layer="Immerse yourself in the serene atmosphere of our traditional Japanese inn. Experience the perfect blend of ancient customs and modern comfort, surrounded by the beauty of nature and the warmth of Japanese hospitality." className="ImmerseYourselfInTheSereneAtmosphereOfOurTraditionalJapaneseInnExperienceThePerfectBlendOfAncientCustomsAndModernComfortSurroundedByTheBeautyOfNatureAndTheWarmthOfJapaneseHospitality w-[654px] left-[941px] top-[681px] absolute">
          <span className="text-gray-700 text-2xl font-normal font-['Lora'] leading-[29.25px]">Immerse yourself in the serene atmosphere of our traditional Japanese inn.</span>
          <span className="text-gray-700 text-lg font-normal font-['Lora'] leading-[29.25px]"> <br />Experience the perfect blend of ancient customs and modern comfort, surrounded by the beauty of nature and the warmth of Japanese hospitality.</span>
        </div>
        <img
          data-layer="austin-curtis-pJh6jKtzGgk-unsplash 1"
          className="AustinCurtisPjh6jktzggkUnsplash1 w-[747px] h-[522px] left-[910px] top-[110px] absolute"
          src="/images/austin-curtis.jpg"
          alt="Hotel Room"
        />
        <img
          data-layer="shouji-pic"
          className="ShoujiPic w-[341px] h-[454px] left-[465px] top-[367px] absolute"
          src="/images/shouji-pic.jpg"
          alt="Shouji"
        />
        <img
          data-layer="ajisai-pic"
          className="AjisaiPic w-[333px] h-[637px] left-[63px] top-[184px] absolute"
          src="/images/ajisai-pic.jpg"
          alt="Ajisai Flower"
        />
        <div data-layer="Heading 2 → Welcome to Our Ryokan" className="Heading2WelcomeToOurRyokan left-[76px] top-[86px] absolute text-center text-gray-600 text-[64px] font-semibold font-['Lora'] leading-[48px]">
          Welcome to Our Ryokan
        </div>
      </div>

      {/* Hero Section */}
      <img
        data-layer="japanese-ryokan"
        className="JapaneseRyokan w-[1727px] h-[935px] left-0 top-[132px] absolute"
        src="/images/japanese-ryokan.jpg"
        alt="Japanese Ryokan"
      />
      <img
        data-layer="japanese-ryokan"
        className="JapaneseRyokan w-[557px] h-[178px] left-[25px] top-[821px] absolute rounded-[40px] blur-[5px]"
        src="/images/japanese-ryokan-blur.jpg"
        alt="Blurred Ryokan"
      />
      <div data-layer="Wa-Ryokan" className="WaRyokan w-[548px] h-[124px] left-[25px] top-[854px] absolute">
        <div data-layer="Discover the beauty of Japan" className="DiscoverTheBeautyOfJapan left-[15px] top-[80px] absolute text-right text-white text-[40px] font-normal font-['Lora'] leading-[44px] [text-shadow:_0px_4px_6px_rgb(0_0_0_/_0.25)]">
          Discover the beauty of Japan
        </div>
        <div data-layer="Heading 1 → Wa Ryokan" className="Heading1WaRyokan w-[548px] h-12 left-0 top-0 absolute text-right text-white text-8xl font-semibold font-['Lora'] leading-[48px] [text-shadow:_0px_2px_4px_rgb(0_0_0_/_0.25)]">
          Wa-Ryokan
        </div>
      </div>
    </div>
  );
}
