import { useEffect, useState } from "react";
import s from "./ProgressBar.module.css";
import { useNavigate } from "react-router-dom";

export default function ProgressBar() {
  const navigate = useNavigate();
  const target = 100;
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev < target) return prev + 1;
        clearInterval(interval);
        setTimeout(() => {
          navigate("/home");
        }, 100);
        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [target, navigate]);

  return (
    <div className={s.container}>
      <div className={s.card}>
        <div
          className={s.percent}
          style={{ "--clr": "#a3a2a2", "--num": time }}
        >
          <div className={s.dot}></div>
          <svg>
            <circle cx={175} cy={175} r={175}></circle>
            <circle cx={175} cy={175} r={175}></circle>
          </svg>
          <div className={s.number}>
            <h2>
              {time} <span>%</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
