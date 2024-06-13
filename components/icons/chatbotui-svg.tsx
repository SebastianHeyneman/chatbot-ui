import { FC } from "react"

interface ChatbotUISVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const ChatbotUISVG: FC<ChatbotUISVGProps> = ({ theme, scale = 1 }) => {
  return (
    <svg
      width="128"
      height="128"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="256"
        height="256"
        rx="8"
        fill="#F94824"
        style={{
          fill: "#F94824",
          fillOpacity: 1
        }}
      />
      <path
        d="M182.841 76.9604L183.04 169.186H165.946V105.98L85.6464 186.478L73.522 174.354L153.822 94.0539H90.6155V76.9604H182.841Z"
        fill="white"
        style={{
          fill: "white",
          fillOpacity: 1
        }}
      />
    </svg>
  )
}
