import React, { useState } from "react"
import { Link } from "gatsby"

export default function MenuButton2(props) {
  const { item } = props

  // Estado local para controlar cuando se hace hover sobre el div
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link to="/page-6" style={{ textDecoration: "none" }}>
      <div
        style={{
          color: "rgba(255, 255, 255, 0.7)",
          display: "grid",
          gridTemplateColumns: "24px auto",
          gap: props.title ? "10px" : "0px",
          alignItems: "center",
          padding: "10px",
          borderRadius: "10px",
          transition: "0.5s ease-out",
          // Aplica un efecto de resaltado cuando se hace hover sobre el div
          background: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
          boxShadow: isHovered
            ? "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)"
            : "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={item.icon} alt={item.title} />
        {item.title}
      </div>
    </Link>
  )
}
