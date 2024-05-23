import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from '/logo-hero.svg';
import cardIcon from '/cardIcon.png';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Initial animation setup
    gsap.set(".white-card", { opacity: 0 });
    gsap.set(".some-white-card", { opacity: 0 });
    gsap.set(".white-card", { transformOrigin: "center center" });
    gsap.set(".some-white-card", { transformOrigin: "center center" });

    // Set initial random rotation
    gsap.to(".white-card", {
      rotation: () => Math.random() * 40 - 10,
      duration: 0
    });
    gsap.to(".some-white-card", {
      rotation: () => Math.random() * -50 - 20,
      duration: 0
    });

    // Animation timeline
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });

    tl.from(".black-card", { opacity: 0, scale: 0.8, delay: 0.5 })
      .to(".black-card", { opacity: 1 })
      .to(".white-card", { opacity: 1, stagger: 0.2 }, "-=0.2")
      .to(".some-white-card", { opacity: 1, stagger: 0.2 }, "-=0.2")
      .to(".white-card", { x: "random(-100, 100)", y: "random(-100, 100)", rotation: "random(-45, 45)", stagger: 0.2, duration: 1 })
      .to(".some-white-card", { x: "random(-100, 100)", y: "random(-100, 100)", rotation: "random(-45, 45)", stagger: 0.2, duration: 1 }, "-=1")
      .to(".black-card, .white-card, .some-white-card", { y: -200, opacity: 0, duration: 1 });

    ScrollTrigger.create({
      trigger: ".animation-container",
      start: "top center",
      animation: tl
    });

    // Pause and resume on hover
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        tl.pause();
        gsap.to(card, { rotation: 0, duration: 0.5 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { clearProps: "rotation", duration: 0.5 });
        setTimeout(() => {
          tl.resume();
        }, 2000); // Delay before resuming the animation
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden">
      <div className="flex flex-col items-start justify-between min-h-screen">
        <div className="xs:p-[20px] pt3 p-[50px]">
          <img src={Logo} alt="" />
        </div>
        <div className="p-[50px]">
          <div className="flex items-center">
          <svg class="db" width="47" height="88" viewBox="0 0 47 88" fill="none"><path d="M31.2658 75.2842C26.0942 76.6163 21.9411 79.7506 19.2769 83.9036C18.9635 84.4522 19.1202 85.1574 19.6687 85.4708C23.9785 87.8216 29.1502 88.6052 34.3218 87.3514C39.4935 86.0977 43.6465 82.885 46.3108 78.732C46.6242 78.1834 46.4675 77.4782 45.919 77.1648C41.6092 74.814 36.4375 73.9521 31.2658 75.2842Z" fill="currentColor"></path><path d="M18.4934 61.6499C13.4001 60.2394 8.15001 60.8663 3.76191 63.1387C3.2134 63.4521 2.97832 64.1573 3.29176 64.7059C5.8776 68.9372 9.95226 72.2283 15.0456 73.6388C20.1389 75.0492 25.389 74.4224 29.7771 72.15C30.3256 71.8365 30.5606 71.1313 30.2472 70.5828C27.7397 66.4298 23.5867 63.1387 18.4934 61.6499Z" fill="currentColor"></path><path d="M14.6531 43.3923C10.9702 39.5527 6.11199 37.5154 1.17538 37.2803C0.548512 37.2803 0 37.7504 0 38.3773C0.156718 43.3139 2.03733 48.2505 5.7202 52.0117C9.40307 55.773 14.2613 57.8887 19.1979 58.1237C19.8248 58.1237 20.3733 57.6536 20.3733 57.0267C20.2166 52.0901 18.336 47.1535 14.6531 43.3923Z" fill="currentColor"></path><path d="M18.885 24.0383C17.5529 18.8666 14.4186 14.7136 10.2655 12.0494C9.71702 11.736 9.01179 11.8927 8.69835 12.4412C6.34759 16.7509 5.564 21.9226 6.81774 27.0943C8.07148 32.266 11.2842 36.419 15.4372 39.0832C15.9857 39.3966 16.691 39.2399 17.0044 38.6914C19.4335 34.3817 20.2171 29.21 18.885 24.0383Z" fill="currentColor"></path><path d="M33.6944 16.2795C35.1049 11.1862 34.478 5.93614 32.2056 1.54804C31.8922 0.999529 31.187 0.764452 30.6384 1.07789C26.4071 3.66373 23.116 7.73839 21.7055 12.8317C20.2951 17.925 20.9219 23.1751 23.1943 27.5632C23.5078 28.1117 24.213 28.3468 24.7615 28.0333C28.9145 25.5259 32.2056 21.4512 33.6944 16.2795Z" fill="currentColor"></path></svg>
        <span className="font-bold text-4xl">"Bold."</span>
        <svg class="origin-center rotate-180" width="47" height="88" viewBox="0 0 47 88" fill="none"><path d="M31.2658 75.2842C26.0942 76.6163 21.9411 79.7506 19.2769 83.9036C18.9635 84.4522 19.1202 85.1574 19.6687 85.4708C23.9785 87.8216 29.1502 88.6052 34.3218 87.3514C39.4935 86.0977 43.6465 82.885 46.3108 78.732C46.6242 78.1834 46.4675 77.4782 45.919 77.1648C41.6092 74.814 36.4375 73.9521 31.2658 75.2842Z" fill="currentColor"></path><path d="M18.4934 61.6499C13.4001 60.2394 8.15001 60.8663 3.76191 63.1387C3.2134 63.4521 2.97832 64.1573 3.29176 64.7059C5.8776 68.9372 9.95226 72.2283 15.0456 73.6388C20.1389 75.0492 25.389 74.4224 29.7771 72.15C30.3256 71.8365 30.5606 71.1313 30.2472 70.5828C27.7397 66.4298 23.5867 63.1387 18.4934 61.6499Z" fill="currentColor"></path><path d="M14.6531 43.3923C10.9702 39.5527 6.11199 37.5154 1.17538 37.2803C0.548512 37.2803 0 37.7504 0 38.3773C0.156718 43.3139 2.03733 48.2505 5.7202 52.0117C9.40307 55.773 14.2613 57.8887 19.1979 58.1237C19.8248 58.1237 20.3733 57.6536 20.3733 57.0267C20.2166 52.0901 18.336 47.1535 14.6531 43.3923Z" fill="currentColor"></path><path d="M18.885 24.0383C17.5529 18.8666 14.4186 14.7136 10.2655 12.0494C9.71702 11.736 9.01179 11.8927 8.69835 12.4412C6.34759 16.7509 5.564 21.9226 6.81774 27.0943C8.07148 32.266 11.2842 36.419 15.4372 39.0832C15.9857 39.3966 16.691 39.2399 17.0044 38.6914C19.4335 34.3817 20.2171 29.21 18.885 24.0383Z" fill="currentColor"></path><path d="M33.6944 16.2795C35.1049 11.1862 34.478 5.93614 32.2056 1.54804C31.8922 0.999529 31.187 0.764452 30.6384 1.07789C26.4071 3.66373 23.116 7.73839 21.7055 12.8317C20.2951 17.925 20.9219 23.1751 23.1943 27.5632C23.5078 28.1117 24.213 28.3468 24.7615 28.0333C28.9145 25.5259 32.2056 21.4512 33.6944 16.2795Z" fill="currentColor"></path></svg>
          </div>
        </div>
      </div>
      <div className="animation-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="card w-[250px] h-[350px] bg-black border-2 border-white rounded-xl flex flex-col justify-between p-3 scale-75 black-card">
          <div className="w-[200px] text-white font-bold text-xl">
            Committing treason.
          </div>
          <div className="flex items-center gap-1">
            <img src={cardIcon} width={30} height={30} alt="" />
            <span className="text-white text-xs font-semibold">
              Cards Against Humanity
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="grid grid-cols-3 gap-4 p-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`card w-[250px] h-[350px] bg-white border-2 border-black rounded-xl flex flex-col justify-between p-3 scale-75 ${index % 2 === 0 ? "some-white-card" : "white-card"}`}
            >
              <div className="w-[200px] text-black font-bold text-xl">
                Committing treason.
              </div>
              <div className="flex items-center gap-1">
                <img src={cardIcon} width={30} height={30} alt="" />
                <span className="text-black text-xs font-semibold">
                  Cards Against Humanity
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;