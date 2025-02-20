// page.tsx

'use client';

import type { NextPage } from 'next';
import { useCallback } from 'react';
import Image from "next/image";
import styles from './page.module.css';
import Button from './Button'; // Import the Client Component

const LandingPage: NextPage = () => {
  const onComponent4ContainerClick = useCallback(() => {
    // Add your code here
    console.log('General click handler'); // Example action
  }, []);

  const handleCheckAvailability = () => {
    // Add your code here to handle checking availability
    alert('Checking availability!'); // Example action
  };

  return (    
    <div className={styles.landingPage}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.language}>
          <Image className={styles.componentIcon} width={20} height={20} alt="" src="/images/language-icon.png" />
          <div className={styles.text5}>Languages</div>
        </div>
        <div className={styles.signin} onClick={onComponent4ContainerClick}>
          <Image className={styles.component1Icon} width={20} height={20} alt="" src="/images/login-icon.png" />
          <div className={styles.text12}>Sign in or Join</div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className={styles.nav}>
        <div className={styles.component41} onClick={onComponent4ContainerClick}>
          <div className={styles.text5}>Book Now</div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.offer}>
            <div className={styles.text5}>Explore</div>
          </div>
          <div className={styles.recreation}>
            <div className={styles.text5}>Recreation</div>
          </div>
          <div className={styles.restaurant}>
            <div className={styles.text5}>Restaurant</div>
          </div>
          <div className={styles.rooms1}>
            <div className={styles.text5}>Rooms</div>
          </div>
          <div className={styles.home}>
            <div className={styles.text5}>Home</div>
          </div>
        </div>
        <div className={styles.container1}>
          <Image className={styles.waIcon1} width={70} height={70} alt="" src="/images/wa-icon.png" />
          <div className={styles.div}>和旅館</div>
        </div>
      </div>

      {/* Wa-Ryokan */}
      <div className={styles.waRyokan}>
        <div className={styles.discoverTheBeauty}>Discover the beauty of Japan</div>
        <div className={styles.heading1}>Wa-Ryokan</div>
      </div>

      {/* Welcome Section */}
      <div className={styles.welcomSection}>
        <div className={styles.immerseYourselfInContainer}>
          <span className={styles.address123SakuraContainer1}>
            <p className={styles.address123456Sakura}>
              <span className={styles.immerseYourselfIn1}>Immerse yourself in the serene atmosphere of our traditional Japanese inn.</span>
            </p>
            <p className={styles.address123456Sakura}>Experience the perfect blend of ancient customs and modern comfort, surrounded by the beauty of nature and the warmth of Japanese hospitality.</p>
          </span>
        </div>
        <Image className={styles.austinCurtisPjh6jktzggkUnspIcon} width={747} height={522} alt="" src="/images/austin-curtis-pJh6jKtzGgk-unsplash.jpg" />
        <Image className={styles.shoujiPicIcon} width={341} height={454} alt="" src="/images/korie-cull-6uxGM_9LJFc-unsplash.jpg" />
        <Image className={styles.ajisaiPicIcon} width={333} height={637} alt="" src="/images/yunan-wang-_9Y0IZEwTR0-unsplash.jpg" />
        <div className={styles.heading23}>Welcome to Our Ryokan</div>
      </div>

      {/* Rooms */}
      <div className={styles.rooms}>
        <div className={styles.component4}>
          <Button onClick={handleCheckAvailability}>Check Room Availability</Button>
        </div>
        <div className={styles.deluxeSuite} onClick={onComponent4ContainerClick}>
          <div className={styles.indulgeInLuxury}>Indulge in luxury with modern amenities and a private retreat.</div>
          <div className={styles.heading36}>Deluxe Suite</div>
          <Image className={styles.deluxeSuiteIcon} width={400} height={311} alt="" src="/images/fabian-kuhne-eksdFRXS28s-unsplash.jpg" />
        </div>
        <div className={styles.familySuite}>
          <div className={styles.spaciousAndCozy}>Spacious and cozy, perfect for quality time with loved ones.</div>
          <div className={styles.heading36}>Family Suite</div>
          <Image className={styles.familySuiteIcon} width={413} height={311} alt="" src="/images/reisetopia-fbG4S32ssd8-unsplash.jpg" />
        </div>
        <div className={styles.mountainViewRoom}>
          <div className={styles.enjoyStunningVistas}>Enjoy stunning vistas of the surrounding mountains.</div>
          <div className={styles.heading36}>Mountain View Room</div>
          <Image className={styles.mountainViewRoom1} width={558} height={311} alt="" src="/images/ish-consul-ccKvfKSKH-k-unsplash.jpg" />
        </div>
        <div className={styles.traditionalTatamiRoom} onClick={onComponent4ContainerClick}>
          <div className={styles.immerseYourselfIn}>Immerse yourself in authentic Japanese style and simplicity.</div>
          <div className={styles.heading36}>Traditional Tatami Room</div>
          <Image className={styles.tatamiIcon} width={400} height={312} alt="" src="/images/s-tsuchiya-Te28pPfLORQ-unsplash.jpg" />
        </div>
        <Image className={styles.roomPicIcon} width={684} height={405} alt="" src="/images/winged-jedi-UALBOB8e1Kk-unsplash.jpg" />
        <div className={styles.weTakePrideContainer}>
          <span className={styles.address123SakuraContainer1}>
            <p className={styles.address123456Sakura}>{`We take pride in offering serene spaces crafted to provide relaxation and comfort. `}</p>
            <p className={styles.discoverExtraordinaryMoments}>Whether you seek breathtaking views, traditional charm, or family-friendly comfort, we have the perfect space for you.</p>
          </span>
        </div>
        <div className={styles.heading22}>Rooms</div>
      </div>

      {/* Restaurant */}
      <div className={styles.restrant}>
        <Image className={styles.codyChanKaoi0tktabaUnsplashIcon} width={248} height={322} alt="" src="/images/cody-chan-KaOi0tkTaBA-unsplash.jpg" />
        <Image className={styles.haleyTruongUcvxv6bn2z8UnsplIcon} width={248} height={322} alt="" src="/images/haley-truong-UcVxV6BN2z8-unsplash.jpg" />
        <Image className={styles.richardIwaki2cpx1n7us5qUnspIcon} width={295} height={322} alt="" src="/images/richard-iwaki-2cpx1N7Us5Q-unsplash.jpg" />
        <Image className={styles.cuisineIcon} width={623} height={498} alt="" src="/images/cuisine.png" />
        <div className={styles.discoverTheTrueContainer}>
          <span className={styles.address123SakuraContainer1}>
            <p className={styles.discoverTheTrue}>{`Discover the true essence of Japanese cuisine. `}</p>
            <p className={styles.address123456Sakura}>{`Our chefs at Wa-Ryokan prepare dishes that showcase the finest local ingredients, from freshly caught seafood to hand-picked mountain vegetables. `}</p>
            <p className={styles.address123456Sakura}>Enjoy a meal that nourishes both body and soul.</p>
          </span>
        </div>
        <div className={styles.heading21}>Restaurant</div>
      </div>

      {/* Explore */}
      <div className={styles.explore}>
        <div className={styles.findPeaceAndBalanceInOurParent}>
          <div className={styles.findPeaceAnd}>Find peace and balance in our tranquil Zen Garden. Surrounded by carefully arranged rocks, soothing water features, and lush greenery, it's the perfect place to relax and meditate.</div>
          <div className={styles.heading33}>Zen Garden</div>
          <div className={styles.onsen} />
          <Image className={styles.zenIcon} width={569} height={758} alt="" src="/images/mariko-ebine-vraJfjZgeyo-unsplash.jpg" />
        </div>
        <div className={styles.strollThroughSereneBambooSParent}>
          <div className={styles.strollThroughSerene}>Stroll through serene Bamboo Street, surrounded by towering bamboo and the soothing sounds of nature. A peaceful escape into tranquility.</div>
          <div className={styles.heading34}>A Walk Through the Bamboo Forest</div>
          <div className={styles.onsen} />
          <Image className={styles.takePicIcon} width={619} height={412} alt="" src="/images/atanas-malamov-iFZqkkPMtVk-unsplash.jpg" />
        </div>
        <div className={styles.relaxInOurNaturalOnsenHotParent}>
          <div className={styles.relaxInOur}>Relax in our natural onsen hot springs, surrounded by stunning scenery. Enjoy mineral-rich waters that soothe your body and mind.</div>
          <div className={styles.heading33}>Onsen Hot Springs</div>
          <div className={styles.onsen} />
          <Image className={styles.benLimUhcwyq05GkUnsplash1Icon} width={641} height={427} alt="" src="/images/ben-lim-UHcwyq05_Gk-unsplash.jpg" />
        </div>
        <div className={styles.enhanceYourStayContainer}>
          <p className={styles.address123456Sakura}>{`Enhance your stay with our special experiences `}</p>
          <p className={styles.discoverExtraordinaryMoments}>Discover extraordinary moments beyond ordinary travel</p>
        </div>
        <div className={styles.heading2}>Explore</div>
      </div>
    
      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.heading3}>About Us</div>
          <div className={styles.waRyokanOffersAn}>Wa-Ryokan offers an authentic Japanese experience, combining traditional hospitality with modern comforts. Relax in serene rooms, enjoy exquisite dining, and unwind in our peaceful onsen. Your tranquil getaway awaits.</div>
          <div className={styles.heading31}>Quick Links</div>
          <div className={styles.address123SakuraContainer}>
            <span className={styles.address123SakuraContainer1}>
              <p className={styles.address123456Sakura}>Address: 123456 Sakura Street, Kyoto, Japan</p>
              <p className={styles.address123456Sakura}>Phone: +000 123-456-7890</p>
              <p className={styles.address123456Sakura}>Email: wa-ryokan@example.com</p>
            </span>
          </div>
          <div className={styles.list}>
            <div className={styles.component3}>
              <div className={styles.text}>{`Rooms & Rates`}</div>
            </div>
            <div className={styles.component31}>
              <div className={styles.text}>Amenities</div>
            </div>
            <div className={styles.component32}>
              <div className={styles.text}>Location</div>
            </div>
            <div className={styles.component33}>
              <div className={styles.text}>Contact Us</div>
            </div>
          </div>
        </div>
        <div className={styles.heading32}>Contact</div>
        <div className={styles.japaneseRyokanExperience}>© 2035 Japanese Ryokan Experience. All rights reserved.</div>
      </div>

       <Image className={styles.japaneseRyokanIcon} width={1727} height={935} alt="" src="/images/wa-icon.png" />
       <Image className={styles.japaneseRyokanIcon1} width={557} height={178} alt="" src="/images/wa-icon.png" />
    </div>
  );
};

export default LandingPage;
