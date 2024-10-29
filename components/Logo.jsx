import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="flex gap-1">
      <span>
      {/* For Production Server */}
        {/* <Image
          src="/assets/images/logo_dark.png"
          alt="English Buddy Logo"
          height={100}
          width={200}
        /> */}
        {/* <img src={'/assets/logo/logo_main.png'} alt='test' height="100px" width="100px"/> For Development Server */}
        <img src={'/assets/logo/logo_main_white.png'} alt='test' height="100px" width="100px"/> {/* For Development Server */}
      </span>
    </Link>
  );
}
