// page.tsx

'use client';

import type { NextPage } from 'next';
import { useCallback } from 'react';
import Image from "next/image";
import styles from './page.module.css';
import Button from './Button'; // Import the Client Component
import RoomCard from '../Components/RoomCard.tsx'; // [NEW] Import the RoomCard component

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
       <div className={styles.signin} onClick={onComponent4ContainerClick}>
          <Image className={styles.signinicon} width={20} height={20} alt="" src="/images/login-icon.png" />
          <div className={styles.text5}>Sign in or Join</div>
        </div>
        <div className={styles.language}>
          <Image className={styles.componenticon} width={20} height={20} alt="" src="/images/language-icon.png" />
          <div className={styles.text5}>Languages</div>
        </div>
      </div>


      {/* Navigation Bar */}
      <div className={styles.nav}>
        <div className={styles.wanamae}>
          <Image className={styles.waicon} width={70} height={70} alt="" src="/images/wa-icon.png" />
          <div className={styles.waryokannamae}>和旅館</div>
        </div>
        <div className={styles.navigationBar}>
          <div className={styles.home}>
            <div className={styles.text5}>Home</div>
          </div>
          <div className={styles.rooms1}>   
            <div className={styles.text5}>Rooms</div>
          </div>
          <div className={styles.restaurant}>     
            <div className={styles.text5}>Restaurant</div>
          </div>
          <div className={styles.explore}>   
            <div className={styles.text5}>Explore</div>
          </div>
        </div>
        <div className={styles.booknowbutton} onClick={onComponent4ContainerClick}>
          <div className={styles.text5}>Book Now</div>
        </div>
      </div>







      {/* Welcome Section */}
      {/* Wa-Ryokan */}
      <div className={styles.waRyokan}>
        <div className={styles.backgroundImageContainer}> {/* Hero-pic */}
          <div className={styles.heromaintitle}>Wa-Ryokan</div>
          <div className={styles.herosubtitle}>Discover the beauty of Japan</div>
        </div>
      </div>

      <div className={styles.welcomSection}>
        <div className={styles.welcometoourhotel}>Welcome to Our Hotel</div>
        <Image className={styles.welcomepic1} 
              width={800}
              height={1536}
              alt="" 
              src="/images/yunan-wang-_9Y0IZEwTR0-unsplash.jpg" 
              layout="responsive" />
        <Image className={styles.welcomepic2} 
              width={800}
              height={1067}
              alt="" 
              src="/images/korie-cull-6uxGM_9LJFc-unsplash.jpg" 
              layout="responsive" />
        <Image className={styles.welcomepic3} 
              width={1000}
              height={700}
              alt="" 
              src="/images/austin-curtis-pJh6jktzGgk-unsplash.jpg" 
              layout="responsive" />
        <div className={styles.containerherotext}>
          <span>
            <p>
              <span className={styles.herotextimmerse}>Immerse yourself in the serene atmosphere of our traditional Japanese inn.</span>
            </p>
            <p>Experience the perfect blend of ancient customs and modern comfort, surrounded by the beauty of nature and the warmth of Japanese hospitality.</p>
          </span>
        </div>
      </div>




      {/* Rooms */}
      <div className={styles.roomsbigcontainer}>
      <div className={styles.headingroom}>Rooms</div>
      
      <Image 
        className={styles.exampleroompic} 
        width={684} 
        height={405} 
        alt="" 
        src="/images/winged-jedi-UALBOB8e1Kk-unsplash.jpg" 
      />
      
      <div className={styles.roomtextcontainer}>
        <span className={styles.roomexampletext}>
          We take pride in offering serene spaces crafted to provide relaxation and comfort.
          Whether you seek breathtaking views, traditional charm, or family-friendly comfort, we have the perfect space for you.
        </span>
      </div>

      <div className={styles.roomsContainer}>
        <RoomCard
            imageSrc="/images/tatami-room.jpg"
            title="Traditional Tatami Room"
            description="Immerse yourself in authentic Japanese style and simplicity."
        />
        <RoomCard
            imageSrc="/images/mountain-view.jpg"
            title="Mountain View Room"
            description="Enjoy stunning vistas of the surrounding mountains."
        />
        <RoomCard
            imageSrc="/images/family-suite.jpg"
            title="Family Suite"
            description="Spacious and cozy, perfect for quality time with loved ones."
        />
        <RoomCard
            imageSrc="/images/deluxe-suite.jpg"
            title="Deluxe Suite"
            description="Indulge in luxury with modern amenities and a private retreat."
        />
       </div>
        {/* Cut??*/}
          {/* Cut finish ?*/}
      </div>

      <div className={styles.checkroomavailabilitybutton}>
        <Button onClick={handleCheckAvailability}>Check Room Availability</Button>
      </div>







      {/* Restaurant */}
      <div className={styles.restrantbigcontainer}>
        <div className={styles.headingrestaurant}>Restaurant</div>
        <Image className={styles.restrantexamplepic} width={623} height={498} alt="" src="/images/cuisine.png" />
        <Image className={styles.restaurantpic1} width={248} height={322} alt="" src="/images/cody-chan-KaOi0tkTaBA-unsplash.jpg" />
        <Image className={styles.restaurantpic2} width={248} height={322} alt="" src="/images/haley-truong-UcVxV6BN2z8-unsplash.jpg" />
        <Image className={styles.restaurantpic3} width={295} height={322} alt="" src="/images/richard-iwaki-2cpx1N7Us5Q-unsplash.jpg" />

        <div className={styles.restauranttextcontainer}>
          <span>
            <p>
              <span className={styles.restranttext}>Discover the true essence of Japanese cuisine.</span>
            </p>
            <p>Our chefs at Wa-Ryokan prepare dishes that showcase the finest local ingredients, from freshly caught seafood to hand-picked mountain vegetables.
            </p>
            <p>Enjoy a meal that nourishes both body and soul.</p>
          </span>
        </div>

      </div>









      {/* Explore */}
      <div className={styles.explorebigcontainer}>
        <div className={styles.exploreheading}>Explore</div>
        <div className={styles.exploretextcontainer}>
          <p className={styles.exploretext}>Enhance your stay with our special experiences</p>
          <p>Discover extraordinary moments beyond ordinary travel</p>
        </div>
        <div className={styles.Onsencardcontainer}>
          <div className={styles.explorecardheading}>Onsen Hot Springs</div>
          <div className={styles.explorecardtext}>Relax in our natural onsen hot springs, surrounded by stunning scenery. Enjoy mineral-rich waters that soothe your body and mind.</div>
          <div className={styles.explorecardimagecontainer} />
          <Image className={styles.exploreonsenpic} width={641} height={427} alt="" src="/images/ben-lim-UHcwyq05_Gk-unsplash.jpg" />
        </div>
        <div className={styles.Bamboocardcontainer}>
          <div className={styles.explorecardheading}>A Walk Through the Bamboo Forest</div>
          <div className={styles.explorecardtext}>Stroll through serene Bamboo Street, surrounded by towering bamboo and the soothing sounds of nature. A peaceful escape into tranquility.</div>
          <div className={styles.explorecardimagecontainer} />
          <Image className={styles.explorebamboopic} width={619} height={412} alt="" src="/images/atanas-malamov-iFZqkkPMtVk-unsplash.jpg" />
        </div>
        <div className={styles.zencardcontainer}>
          <div className={styles.explorecardheading}>Zen Garden</div>
          <div className={styles.explorecardtext}>Find peace and balance in our tranquil Zen Garden. Surrounded by carefully arranged rocks, soothing water features, and lush greenery, it's the perfect place to relax and meditate.</div>
          <div className={styles.explorecardimagecontainer} />
          <Image className={styles.explorezenpic} width={569} height={758} alt="" src="/images/mariko-ebine-vraJfjZgeyo-unsplash.jpg" />
        </div>
      </div>
    




      {/* Footer */}
      <div className={styles.footerbigcontainer}>
        <div className={styles.aboutuscontainer}>
          <div className={styles.aboutusheading}>About Us</div>
          <div className={styles.aboutustext}>Wa-Ryokan offers an authentic Japanese experience, combining traditional hospitality with modern comforts. Relax in serene rooms, enjoy exquisite dining, and unwind in our peaceful onsen. Your tranquil getaway awaits.</div>
        </div>
        <div className={styles.quicklinksheading}>Quick Links</div>
          <div className={styles.footerquicklinklist}>
            <div className={styles.componentroom}>
              <div className={styles.footercomponentext}>Rooms</div>
            </div>
            <div className={styles.componentamenities}>
              <div className={styles.footercomponentext}>Amenities</div>
            </div>
            <div className={styles.componentlocation}>
              <div className={styles.footercomponentext}>Location</div>
            </div>
            <div className={styles.componentcontact}>
              <div className={styles.footercomponentext}>Contact Us</div>
            </div>
          </div>
        </div>
        
        <div className={styles.contactcontainer}>
           <div className={styles.footercontactheading}>Contact</div>
           <span className={styles.addressContainer}>
              <p className={styles.contacttext}>Address: 123456 Sakura Street, Example, Japan</p>
              <p >Phone: +000 123-456-7890</p>
              <p >Email: wa-ryokan@example.com</p>
           </span>
        </div>
        <div className={styles.footerrightstext}>© 2335 Japanese Ryokan Example Experience. All rights reserved.</div>
    </div>

  );
};

export default LandingPage;


