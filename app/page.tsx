// page.tsx

'use client';

import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';


import Image from "next/image";
import styles from './page.module.css';
import Button from './Button'; // Import the Client Component
import RoomCard from './Components/RoomCard'; // Import the RoomCard component
import React from 'react';


const LandingPage: NextPage = () => {
  const router = useRouter();
  //const onComponent4ContainerClick = () => {
    // Add your code here
    //console.log('General click handler'); // Example action
  //};

  const handleCheckAvailability = () => {
    // Add your code here to handle checking availability
    alert('Checking availability!'); // Example action
  };
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  

  return (    
    <div className={styles.landingPage}>
      {/* Top Bar */}
      <div className={styles.topBar}>
      <div className={styles.signin} onClick={() => router.push('/login')}>
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
        <div className={styles.navRight}> 
          <div className={styles.navigationBar}>
            <div className={styles.home} onClick={() => handleNavigation('/')}>
              <div className={styles.text5}>Home</div>
            </div>
            <div className={styles.rooms1} onClick={() => handleNavigation('/rooms')}>   
              <div className={styles.text5}>Rooms</div>
            </div>
            <div className={styles.restaurant} onClick={() => handleNavigation('/restaurant')}>     
              <div className={styles.text5}>Restaurant</div>
            </div>
            <div className={styles.explore} onClick={() => handleNavigation('/explore')}>   
              <div className={styles.text5}>Explore</div>
            </div>
          </div>
          <div className={styles.booknowbutton} onClick={() => router.push('/booking')}>
            <div className={styles.text5}>Book Now</div>
          </div>
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
        <div className={styles.roomHeader}>
          <h2 className={styles.headingroom}>Rooms</h2>
        
          <div className={styles.roomContentWrapper}>
              <div className={styles.roomtextcontainer}>
                  <p className={styles.roomexampletext}>
                      We take pride in offering serene spaces crafted to provide relaxation and comfort.
                      Whether you seek breathtaking views, traditional charm, or family-friendly comfort, we have the perfect space for you.
                  </p>
              </div>
              
              <Image 
                  className={styles.exampleroompic} 
                  width={684} 
                  height={405} 
                  alt="Example Room" 
                  src="/images/winged-jedi-UALBOB8e1Kk-unsplash.jpg" 
              />
          </div>
        </div>

        <div className={styles.roomsContainer}>
            <RoomCard
                imageSrc="/images/s-tsuchiya-Te28pPfLORQ-unsplash.jpg"
                title="Traditional Tatami Room"
                description="Immerse yourself in authentic Japanese style and simplicity."
                imageClassName={styles.tatamiImage}  //  style for tatami image
                width={400}  //
                height={500} // 
            />
            <RoomCard
                imageSrc="/images/ish-consul-ccKvfKSKH-k-unsplash.jpg"
                title="Mountain View Room"
                description="Enjoy stunning vistas of the surrounding mountains."
                imageClassName={styles.mountainImage}  // style for mountain image
                width={400}  // 
                height={500} //
            />
            <RoomCard
                imageSrc="/images/reisetopia-fbG4S32ssd8-unsplash.jpg"
                title="Family Suite"
                description="Spacious and cozy, perfect for quality time with loved ones."
                imageClassName={styles.familyImage}  //  style for family image
                width={400}  // 
                height={500} //
            />
            <RoomCard
                imageSrc="/images/fabian-kuhne-eksdFRXS28s-unsplash.jpg"
                title="Deluxe Suite"
                description="Indulge in luxury with modern amenities and a private retreat."
                imageClassName={styles.deluxeImage}  // style for deluxe image
                width={400}  // 
                height={500} // 
            />
        </div>

        <div className={styles.checkroomavailabilitybutton}>
            <Button onClick={handleCheckAvailability}>Check Room Availability</Button>
        </div>
      </div>


      {/* Restaurant */}
      <div className={styles.restrantbigcontainer}>
        <div className={styles.headingrestaurant}>Restaurant</div>

        <div className={styles.restaurantImagesContainer}>  {/* Container for restaurant images */}  
          <Image className={styles.restrantexamplepic} width={623} height={498} alt="" src="/images/cuisine.jpg" />
          {/* Row of Three Pictures */}
          <div className={styles.restaurantImagesRow}>
            <Image className={styles.restaurantpic1} width={248} height={322} alt="" src="/images/cody-chan-KaOi0tkTaBA-unsplash.jpg" />
            <Image className={styles.restaurantpic2} width={248} height={322} alt="" src="/images/haley-truong-UcVxV6BN2z8-unsplash.jpg" />
            <Image className={styles.restaurantpic3} width={295} height={322} alt="" src="/images/richard-iwaki-2cpx1N7Us5Q-unsplash.jpg" />
          </div> 
        </div> {/* END: Container for restaurant images */}

        <div className={styles.restauranttextcontainer}>
          <span className={styles.restranttext}>
              <br />
              Discover the true essence of Japanese cuisine. <br />
              Our chefs at Wa-Ryokan prepare dishes that showcase the finest local ingredients, from freshly caught seafood to hand-picked mountain vegetables.<br />
              Enjoy a meal that nourishes both body and soul.
          </span>
        </div>
      </div>



      {/* Explore */}
      <div className={styles.explorebigcontainer}>
        <div className={styles.exploreheading}>Explore</div>
        <div className={styles.exploretextcontainer}>
          <p className={styles.exploretext}>Enhance your stay with our special experiences.<br />
            Discover extraordinary moments beyond ordinary travel.</p>
        </div>
        <div className={styles.exploreCardsContainer}> {/* container for cards */}
          <RoomCard
            imageSrc="/images/ben-lim-UHcwyq05_Gk-unsplash.jpg"
            title="Onsen Hot Springs"
            description="Relax in our natural onsen hot springs, surrounded by stunning scenery. Enjoy mineral-rich waters that soothe your body and mind."
            imageContainerClassName={styles.exploreRoomCardImageContainer}
          />
          <RoomCard
            imageSrc="/images/atanas-malamov-iFZqkkPMtVk-unsplash.jpg"
            title="A Walk Through the Bamboo Forest"
            description="Stroll through serene Bamboo Street, surrounded by towering bamboo and the soothing sounds of nature. A peaceful escape into tranquility."
            imageContainerClassName={styles.exploreRoomCardImageContainer}
          />
          <RoomCard
            imageSrc="/images/mariko-ebine-vraJfjZgeyo-unsplash.jpg"
            title="Zen Garden"
            description="Find peace and balance in our tranquil Zen Garden. Surrounded by carefully arranged rocks, soothing water features, and lush greenery, it's the perfect place to relax and meditate."
            imageContainerClassName={styles.exploreRoomCardImageContainer}
          />
        </div>
      </div>




      {/* Footer */}
       {/* Footer */}
       <div className={styles.footerbigcontainer}>
        <div className={styles.footerContent}> {/* flex container */}
          <div className={styles.aboutuscontainer}>
            <div className={styles.aboutusheading}>About Us</div>
            <div className={styles.aboutustext}>Wa-Ryokan offers an authentic Japanese experience, combining traditional hospitality with modern comforts. Relax in serene rooms, enjoy exquisite dining, and unwind in our peaceful onsen. Your tranquil getaway awaits.</div>
          </div>

          <div className={styles.quicklinkscontainer}> {/* container */}
            <div className={styles.quicklinksheading}>Quick Links</div>
            <div className={styles.footerquicklinklist}>
              <div className={styles.componentroom}>
                <div className={styles.footercomponentext}>Rooms & Rates</div> {/* Modified */}
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
          </div> {/* end of quicklinkscontainer */}

          <div className={styles.contactcontainer}>
            <div className={styles.footercontactheading}>Contact</div>
            <div className={styles.addressContainer}> {/* span to div */}
              <div className={styles.contacttext}>Address: 123456 Sakura Street, Kyoto, Japan</div> {/* p to div */}
              <div>Phone: +811 123-456-7890</div> {/* p to div */}
              <div>Email: info@example.cooom</div> {/* p to div */}
            </div>
          </div> {/* end of contactcontainer */}
        </div> {/* end of footerContent */}
        <div className={styles.footerrightstext}>© 2035 Japanese Ryokan Experience Example. <br />
        All rights reserved.</div>
      <div className={styles.footerbottomline}></div>{/*  bottom line */}
      </div>

    </div>
  );
};

export default LandingPage;