import { Link } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuButton2 from "../buttons/MenuButton2"
import MenuButton3 from "../buttons/MenuButton3"
import MenuButton4 from "../buttons/MenuButton4"
import MenuButton5 from "../buttons/MenuButton5"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
    //console.log(event)
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      console.log("Document is clicked")
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/icons/favicon-32x32.png" alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              key={index}
              item={item}
              onClick={event => handleClick(event)}
            />
          ) : item.link === "/search" ? (
            <MenuButton
              key={index}
              item={item}
              onClick={event => handleClick(event)}
            />
          ) : item.link === "/livestreams" ? (
            <Link to={item.to} style={{ textDecoration: "none" }}>
              <MenuButton2 item={item} />
            </Link>
          ) : item.link === "/team" ? (
            <Link to={item.to} style={{ textDecoration: "none" }}>
              <MenuButton3 item={item} />
            </Link>
          ) : item.link === "/tutorials" ? (
            <Link to={item.to} style={{ textDecoration: "none" }}>
              <MenuButton4 item={item} />
            </Link>
          ) : item.link === "/courses" ? (
            <Link to={item.to} style={{ textDecoration: "none" }}>
              <MenuButton5 item={item} />
            </Link>
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{
              title: "",
              icon: "/images/icons/hamburger.svg",
              link: "/",
            }}
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>
      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 30px;

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`
const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
