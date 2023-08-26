import wishlistIcon from "../assets/icons/heart.svg";
import signInIcon from "../assets/icons/sign-in.svg";
import signUpIcon from "../assets/icons/add-user.svg";
import { paths } from "../utils/constants";

const headerActionClass = "block group-hover:underline text-sm";

export const headerActions = [
  {
    content: (
      <>
        <img
          src={wishlistIcon}
          alt="Wishlist icon"
          className="w-[18px] h-[18px]"
        />
        <span className={headerActionClass}>Yêu thích</span>
      </>
    ),
    to: "/tin-da-luu",
  },
  {
    content: (
      <>
        <img src={signInIcon} alt="Wishlist icon" className="w-4 h-4" />
        <span className={headerActionClass}>Đăng nhập</span>
      </>
    ),
    to: paths.LOGIN,
  },
  {
    content: (
      <>
        <img src={signUpIcon} alt="Wishlist icon" className="w-4 h-4" />
        <span className={headerActionClass}>Đăng ký</span>
      </>
    ),
    to: "/dang-ky-tai-khoan",
  },
];
