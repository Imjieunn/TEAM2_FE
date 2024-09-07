import { Link } from "react-router-dom";
import * as API from "../../api/ApiNotLogin";
import { useEffect } from "react";

const Login = () => {
  const baseUrl = process.env.REACT_APP_API_URL;

  // const getToken = async () => {
  //   try {
  //     const response = await API.get("/auth/kakao");
  //     console.log(response);
  //     // const token = response.data.token;
  //     // if (token) {
  //     //   localStorage.setItem("authToken", token);
  //     //   console.log(token);
  //     // }
  //   } catch (error) {
  //     console.error("Error fetching token:", error);
  //   }
  // };

  return (
    <div className="flex-col-template">
      <div className="px-[65px] flex-col-template gap-[37px] flex-2">
        <img src="/img/loginLogo.svg" alt="로그인 페이지 로고" />
        <p className="text-Blue-100 text-3xl text-center font-pretendardSemibold">
          무한한 자원인 시간으로 만드는 무한한 가능성을 함께 만들어가요.
        </p>
      </div>

      <div className="gap-[33px] flex-col-template flex-1 pb-10">
        <p className="flex gap-1 text-Gray-200">
          <img src="/img/hr.svg" alt="구분선" />
          로그인/회원가입
          <img src="/img/hr.svg" alt="구분선" />
        </p>
        <Link to={`${baseUrl}/auth/kakao`}>
          <img
            src="/img/kakaoLogin.svg"
            alt="카카오 로그인 버튼"
            // onClick={getToken}
          />
        </Link>
        <p className="text-Gray-300">로그인하기</p>
      </div>
    </div>
  );
};

export default Login;
