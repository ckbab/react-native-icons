import { changeColor } from "@ckbab/js-utils";
import PropTypes from "prop-types";
import React, { useMemo } from "react";

import Beer from "./Beer";
import Calendar from "./Calendar";
import Chat from "./Chat";
import Check from "./Check";
import ChevronDown from "./ChevronDown";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import ChevronUp from "./ChevronUp";
import Cross from "./Cross";
import Football from "./Football";
import Globe from "./Globe";
import Hotel from "./Hotel";
import Info from "./Info";
import Level from "./Level";
import Lock from "./Lock";
import Menu from "./Menu";
import More from "./More";
import Notification from "./Notification";
import Pin from "./Pin";
import Plane from "./Plane";
import Plus from "./Plus";
import Pot from "./Pot";
import Search from "./Search";
import Shoe from "./Shoe";
import Stadium from "./Stadium";
import Star from "./Star";
import Ticket from "./Ticket";
import Time from "./Time";
import User from "./User";
import UserPlus from "./UserPlus";
import Walking from "./Walking";

export default function Icon({ color, name, size, style }) {
  const colors = useMemo(() => {
    const innerBorder = "#eee";
    const outerBorder = changeColor(color, "#000", 0.6);
    const background = changeColor(color, "#000", 0.8);
    return { background, innerBorder, outerBorder };
  }, [color]);

  const Component = useMemo(() => {
    const icons = {
      beer: Beer,
      calendar: Calendar,
      chat: Chat,
      check: Check,
      "chevron-down": ChevronDown,
      "chevron-left": ChevronLeft,
      "chevron-right": ChevronRight,
      "chevron-up": ChevronUp,
      cross: Cross,
      football: Football,
      globe: Globe,
      hotel: Hotel,
      info: Info,
      level: Level,
      lock: Lock,
      menu: Menu,
      more: More,
      notification: Notification,
      pin: Pin,
      plane: Plane,
      plus: Plus,
      pot: Pot,
      search: Search,
      shoe: Shoe,
      stadium: Stadium,
      star: Star,
      ticket: Ticket,
      time: Time,
      user: User,
      "user-plus": UserPlus,
      walking: Walking,
    };
    return icons[name];
  }, [name]);

  if (!Component) {
    return null;
  }

  return (
    <Component
      background={colors?.background}
      color={color}
      innerBorder={colors?.innerBorder}
      outerBorder={colors?.outerBorder}
      size={size}
      style={style}
    />
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.oneOf([
    "beer",
    "calendar",
    "chat",
    "check",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "cross",
    "football",
    "globe",
    "hotel",
    "info",
    "level",
    "lock",
    "menu",
    "more",
    "notification",
    "plus",
    "pin",
    "plane",
    "pot",
    "search",
    "shoe",
    "stadium",
    "star",
    "ticket",
    "time",
    "user",
    "user-plus",
    "walking",
  ]),
  size: PropTypes.number,
  style: PropTypes.any,
};

Icon.defaultProps = {
  color: "#cc00ff",
  name: "",
  size: 16,
  style: {},
};
