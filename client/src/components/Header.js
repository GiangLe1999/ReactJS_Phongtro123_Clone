import React from "react";

import Button from "./Button";
import logo from "../assets/phongtro123-logo.svg";
import addIcon from "../assets/icons/add-white.svg";
import { headerActions } from "../data/index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="Phòng trọ 123 logo"
          className="w-[240px] h-[70px] object-contain"
        />
      </Link>

      {/* Buttons */}
      <div className="flex items-center gap-[5px] text-text">
        {/* 3 nút không có background */}
        {headerActions.map((item, index) => (
          <Button
            key={index}
            content={item.content}
            to={item.to}
            className="px-[10px] gap-[5px]"
          />
        ))}

        {/* Nút đăng tin mới */}
        <Button
          content={
            <>
              <span className="group-hover:underline">Đăng tin mới</span>
              <img src={addIcon} alt="Add icon" className="w-4 h-4" />
            </>
          }
          className="text-white bg-tertiary gap-[5px] text-sm px-[10px] h-10 ml-[10px]"
          to="/quan-ly/dang-tin-moi"
        />
      </div>
    </div>
  );
};

export default Header;
