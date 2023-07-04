"use client";

import { useState, useEffect } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

import Box from "./components/Box";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [flipSeconds, setFlipSeconds] = useState(false);
  const [flipMinutes, setFlipMinutes] = useState(false);
  const [flipHours, setFlipHours] = useState(false);
  const [flipDays, setFlipDays] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2023-07-13T00:00:00");

    const calculateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      if (timeDifference <= 0) {
        // Countdown finished, set countdown to 0
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });

        if (seconds !== countdown.seconds) {
          setFlipSeconds(!flipSeconds); // Trigger card flip
        }

        if (minutes !== countdown.minutes) {
          setFlipMinutes(!flipMinutes);
        }

        if (hours !== countdown.hours) {
          setFlipHours(!flipHours);
        }

        if (days !== countdown.days) {
          setFlipDays(!flipDays);
        }
      }
    };

    const countdownInterval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown, flipDays, flipHours, flipMinutes, flipSeconds]);

  return (
    <main className="h-screen flex flex-col justify-between">
      <div className="h-4/6 w-full flex items-center justify-center">
        <div className="w-11/12">
          <h1 className="font-bold text-white text-xl desktop:text-2xl tracking-[.3em] w-full desktop:w-11/12 mx-auto text-center">
            WE'RE LAUCHING SOON
          </h1>
          <div className="flex flex-row gap-x-4 desktop:gap-x-8 items-center justify-center mt-14">
            <div className="card w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] rounded-lg relative overflow-hidden">
              <div className="h-[1px] opacity-10 w-full bg-black absolute top-1/2 z-10"></div>
              <div className="h-[1px] w-full absolute top-1/2 z-10">
                <div className="w-4 h-4 rounded-full -translate-y-1/2 bg-black opacity-25 absolute -left-2"></div>
                <div className="w-4 h-4 rounded-full -translate-y-1/2 bg-black opacity-25 absolute -right-2"></div>
              </div>
              <div
                className={`page-flip w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] ${
                  flipDays ? "flipped" : ""
                }`}
                onClick={handleClick}>
                <div className="page front rounded-lg w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] text-softred font-bold text-2xl desktop:text-7xl">
                  {countdown.days}
                </div>
                <div className="page back rounded-lg w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] text-softred font-bold text-2xl desktop:text-7xl">
                  {countdown.days}
                </div>
              </div>
            </div>
            {/* days */}
            <div className="card w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] rounded-lg relative overflow-hidden">
              <div className="h-[1px] opacity-10 w-full bg-black absolute top-1/2 z-10"></div>
              <div className="h-[1px] w-full absolute top-1/2 z-10">
                <div className="w-4 h-4 rounded-full -translate-y-1/2 bg-black opacity-25 absolute -left-2"></div>
                <div className="w-4 h-4 rounded-full -translate-y-1/2 bg-black opacity-25 absolute -right-2"></div>
              </div>
              <div
                className={`page-flip w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] ${
                  flipHours ? "flipped" : ""
                }`}
                onClick={handleClick}>
                <div className="page front rounded-lg w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] text-softred font-bold text-2xl desktop:text-7xl">
                  {countdown.hours}
                </div>
                <div className="page back rounded-lg w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] text-softred font-bold text-2xl desktop:text-7xl">
                  {countdown.hours}
                </div>
              </div>
            </div>
            {/* hours */}
            <div className="card w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] rounded-lg relative overflow-hidden">
              <div className="h-[1px] opacity-10 w-full bg-black absolute top-1/2 z-10"></div>
              <div className="h-[1px] w-full absolute top-1/2 z-10">
                <div className="w-4 h-4 rounded-full -translate-y-1/2 bg-black opacity-25 absolute -left-2"></div>
                <div className="w-4 h-4 rounded-full -translate-y-1/2 bg-black opacity-25 absolute -right-2"></div>
              </div>
              <div
                className={`page-flip w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] ${
                  flipMinutes ? "flipped" : ""
                }`}
                onClick={handleClick}>
                <div className="page front rounded-lg w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] text-softred font-bold text-2xl desktop:text-7xl">
                  {countdown.minutes}
                </div>
                <div className="page back rounded-lg w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] text-softred font-bold text-2xl desktop:text-7xl">
                  {countdown.minutes}
                </div>
              </div>
            </div>
            {/* seconds */}
            <div className="card w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] rounded-lg relative overflow-hidden">
              <div className="h-[1px] opacity-10 w-full bg-black absolute top-1/2 z-10"></div>
              <div className="h-[1px] w-full absolute top-1/2 z-10">
                <div className="w-4 h-4 rounded-full -translate-y-1/2 bg-black opacity-25 absolute -left-2"></div>
                <div className="w-4 h-4 rounded-full -translate-y-1/2 bg-black opacity-25 absolute -right-2"></div>
              </div>
              <div
                className={`page-flip w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] ${
                  flipSeconds ? "flipped" : ""
                }`}
                onClick={handleClick}>
                <div className="page front rounded-lg w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] text-softred font-bold text-2xl desktop:text-7xl">
                  {countdown.seconds}
                </div>
                <div className="page back rounded-lg w-[100px] h-[100px] desktop:w-[180px] desktop:h-[180px] text-softred font-bold text-2xl desktop:text-7xl">
                  {countdown.seconds}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center h-[250px] bg-hills bg-cover">
        <div className="flex flex-row justify-center items-center w-2/4 h-full gap-x-6 mx-auto">
          <AiFillFacebook className="text-2xl text-gblue hover:text-softred" />
          <BsPinterest className="text-2xl text-gblue hover:text-softred" />
          <AiOutlineInstagram className="text-2xl text-gblue hover:text-softred" />
        </div>
      </div>
    </main>
  );
}
