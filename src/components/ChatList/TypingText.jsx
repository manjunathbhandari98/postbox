import { useEffect, useState } from "react";

const TypingText = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 4 ? "." : prev + "."));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-sm text-green-500">typing{dots}</span>;
};

export default TypingText;
