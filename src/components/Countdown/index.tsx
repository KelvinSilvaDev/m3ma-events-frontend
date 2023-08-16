import React, { useState, useEffect } from "react";

export function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState({
    months: 0,
    days: 0,
    hours: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date("2023-12-01T00:00:00");
      const currentDate = new Date();

      const difference = targetDate - currentDate;
      if (difference > 0) {
        const daysInMonth = (date) =>
          new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const months = Math.floor(
          difference / (1000 * 60 * 60 * 24 * daysInMonth(currentDate))
        );
        const daysWithoutMonths = Math.floor(
          difference / (1000 * 60 * 60 * 24) - months * daysInMonth(currentDate)
        );
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

        setTimeRemaining({
          months,
          days: daysWithoutMonths,
          hours,
        });
      } else {
        clearInterval(interval);
        setTimeRemaining({
          months: 0,
          days: 0,
          hours: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col align-middle items-center content-center h-full justify-between py-2">
      <span className="text-white text-lg opacity-100">FALTAM</span>
      <div className="flex justify-evenly w-full">
        <span className="text-white  flex flex-col opacity-100 align-middle items-center justify-center content-center">
          <span className="text-7xl animate-pulse animate-infinite animate-duration-1000 animate-delay-500">
            {timeRemaining.months}
          </span>
          <span className=" text-lg">MESES</span>
        </span>
        <span className="text-white  flex flex-col opacity-100 align-middle items-center justify-center content-center">
          <span className="text-7xl animate-pulse animate-infinite animate-duration-1000 animate-delay-500">
            {timeRemaining.days}{" "}
          </span>
          <span className=" text-lg">DIAS</span>
        </span>
        <span className="text-white  flex flex-col opacity-100 align-middle items-center justify-center content-center">
          <span className="text-7xl animate-pulse animate-infinite animate-duration-1000 animate-delay-500">
            {timeRemaining.hours}
          </span>{" "}
          <span className=" text-lg">HORAS</span>
        </span>
      </div>
      <span className="text-white  opacity-100 text-lg">
        PARA O MEMA VIBE 2023!
      </span>
    </div>
  );
}
