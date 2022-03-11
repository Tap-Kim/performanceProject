import React, { FC, useEffect, useRef, useState } from "react";
const NoImage = 'https://blog.kakaocdn.net/dn/Hh733/btrcA1znbC9/m3cFIkMBMYyJlnHe7WBiN1/img.gif';
const TStoryImage = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fck83td%2FbtrcwxeJJm6%2FugdgkwZcq1YTnNEnksZ4z1%2Fimg.jpg';
import src from '../image/kakaoFriends.png'

const LazyLoading: FC = (): JSX.Element => {
  return (
    <>
      {
        [...Array(1000)].map((val, index) => <LazyImageItem key={index} />)
      }
    </>
  );
};

export default LazyLoading;

export const LazyImageItem: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionObserver); // 인스턴스 생성
    imgRef.current && observer.current.observe(imgRef.current); // 이미지 태그 관찰 시작
  }, [])

  const intersectionObserver = (entires: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entires.forEach((entry) => {
      if (entry.isIntersecting) { // 관찰되고 있는 entry가 보여지게 된 다면
        io.unobserve(entry.target); // 관찰 종료
        setIsLoading(true);
      }
    })
  }

  return <img
    ref={imgRef}
    src={isLoading ? src : NoImage}
    style={{ width: 200, height: 160 }}
    alt="Lazy Loading..."
  />;
};