import { changeColor } from "@ckbab/js-utils";
import PropTypes from "prop-types";
import React, { useMemo } from "react";

import ArrowDown from "./ArrowDown";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import ArrowUp from "./ArrowUp";
import Beer from "./Beer";
import Calendar from "./Calendar";
import Chat from "./Chat";
import Check from "./Check";
import CheckCircle from "./CheckCircle";
import ChevronDown from "./ChevronDown";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import ChevronUp from "./ChevronUp";
import Cog from "./Cog";
import Cross from "./Cross";
import Football from "./Football";
import Globe from "./Globe";
import Hotel from "./Hotel";
import InfoCircle from "./InfoCircle";
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
import ThumbsDown from "./ThumbsDown";
import ThumbsUp from "./ThumbsUp";
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
      "arrow-down": ArrowDown,
      "arrow-left": ArrowLeft,
      "arrow-right": ArrowRight,
      "arrow-up": ArrowUp,
      beer: Beer,
      calendar: Calendar,
      chat: Chat,
      check: Check,
      "check-circle": CheckCircle,
      "chevron-down": ChevronDown,
      "chevron-left": ChevronLeft,
      "chevron-right": ChevronRight,
      "chevron-up": ChevronUp,
      cog: Cog,
      cross: Cross,
      football: Football,
      globe: Globe,
      hotel: Hotel,
      "info-circle": InfoCircle,
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
      "thumbs-down": ThumbsDown,
      "thumbs-up": ThumbsUp,
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
    "arrow-down",
    "arrow-left",
    "arrow-right",
    "arrow-up",
    "beer",
    "calendar",
    "chat",
    "check",
    "check-circle",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "cog",
    "cross",
    "football",
    "globe",
    "hotel",
    "info-circle",
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
    "thumbs-down",
    "thumbs-up",
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
