import React, { useState } from "react"
import { Link } from "gatsby"

export default function MenuButton5(props) {
  const { item } = props

  // Estado local para controlar cuando se hace hover sobre el div
  const [isHovered6, setIsHovered6] = useState(false)

  return (
    <Link to="/page-3" style={{ textDecoration: "none" }}>
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
          background: isHovered6 ? "rgba(255, 255, 255, 0.1)" : "transparent",
          boxShadow: isHovered6
            ? "0px 10px 20px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)"
            : "none",
        }}
        onMouseEnter={() => setIsHovered6(true)}
        onMouseLeave={() => setIsHovered6(false)}
      >
        <img src={item.icon} alt={item.title} />
        {item.title}
      </div>
    </Link>
  )
}
