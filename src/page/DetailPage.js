import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BasicInformation from '../components/Detail/BasicInformation';
import TravelRoute from '../components/Detail/TravelRoute';
import CautionText from '../components/Detail/CautionText';
import ReservationForm from '../components/Detail/ReservationForm';
import KakaoChat from '../components/Detail/KakaoChat';
import SimpleBackdrop from '../components/common/LoadingBackdrop';

const DetailPageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const DetailPage = ({ match }) => {
  const { id } = match.params;
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const searchCountry = fakeCountries.find(cty => cty.id === parseInt(id)); // 나중에 api요청
    if (!searchCountry) return;
    setCountry(searchCountry);
    setLoading(false);
  }, [id]);

  return (
    <>
      {!loading && country ? (
        <div>
          <BasicInformation country={country} />
          <DetailPageWrapper>
            <TravelRoute routes={country.routes} />
            <CautionText category={country.category} />
            <ReservationForm />
            <KakaoChat />
          </DetailPageWrapper>
        </div>
      ) : (
        <SimpleBackdrop loading={loading} />
      )}
    </>
  );
};

export default DetailPage;

const fakeCountries = [
  {
    id: 1,
    name: '캘리포니아',
    thumbnail:
      'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    price: 2012400,
    category: '미주지역',
    routes: [
      {
        id: 1,
        imageId: '',
        toFrom: '인천 → 로스앤젤레스',
        description: `
      [KE017 / 14:30] 인천(ICN) 국제공항 출발 [약 11시간 10분 소요]
      ▶▷▶▷▶ 날짜 변경선 통과 ▶▷▶▷▶
      [09:40] 미국 로스앤젤레스(LAX) 국제공항 도착 후 입국&세관 검사
      유의 ㅣ 안내사항 - ※당일 도착하는 모두투어 아시아나항공 팀이 공항에서 미팅할 수 있습니다.
      현지 미팅정보 - ♣ 미팅보드 : 모두투어-모뉴먼트밸리
      맨스차이니스 극장 관광
      유명 스타들의 핸드프리트가 새겨진 극장
      할리우드 스타 관광 투어 관광
      할리우드 관광
      미국 영화의 중심지
      스타의 거리 관광
      유명 스타들의 이름이 바닥에 새겨진 거리
      선택관광 안내
      ♣ LA 테마 선택관광 ♣
      ■ LA 유니버셜 스튜디오 (가격은 날짜별로 상이합니다.)
      
      ☞ 유니버셜 스튜디오를 가지 않는 고객님은 헐리우드에서 자유시간을 드립니다.
      (인솔자가 있는경우 인솔자가 동반하지만, 인솔자가 없는 단체일 경우 동반하지 않습니다.)
      ☞ 모두투어 미서부 단독상품은 유니버셜 스튜디오 선택관광시 가이드가 동행 및 안내서비스가 제공 됩니다.
      ☞ 선택관광 소요시간은 4~6시간 정도이며, 선택관광을 진행하지 않을시 자유시간에는 별도로 가이드 및 차량은 제공되지 않습니다
      LA유니버셜스튜디오
      `,
        transport: '비행기',
      },
      {
        id: 2,
        imageId: '',
        toFrom: '바스토우 → 라스베이거스',
        description: `
      조식 후 바스토우로 이동
      바스토우 텐저 아울렛 관광
      한국인들에게 사랑받는 브랜드 매장이 한 곳에
      라스베이거스로 이동
      선택관광 안내
      라스베이거스 시티투어 (스트라토스피어전망대포함)
      선택관광 안내
      [선택관광] 태양의서커스 'KA' 공연
      선택관광 안내
      [선택관광] 르레브 공연
      선택관광 안내
      [선택관광] 태양의서커스 'LOVE'
      유의 ㅣ 안내사항 - ※라스베이거스 호텔 숙박시 안내사항
      ※만 21세 미만의 고객님께서는 호텔 내 카지노 이용이 법적으로 금지되어 있으며, 동반 가족/지인 분들의 적극적인 보호를 부탁드립니다.
      ★Tip&Advice★
      ☞ 시간관계상 쇼를 보시고, 라스베가스 시티투어관광이 바로 진행됩니다. 때문에 쇼를 두개이상 보시는 것과 쇼만 선택관광으로 하시는 것은 불가함을 알려드립니다. 단, 라스베이거스 시티투어만 선택하시는 것은 가능합니다.
      ☞ 현지에서 가장 많이 선택하며, 만족도가 높은 쇼는 KA / LE REVE 쇼 입니다.
      ☞ 쇼 옵션의 경우 현지 사정상 라스베이거스의 다른 유명 쇼로 추천이 될 수 있습니다.
      ☞ 편도 리무진은 쇼옵션 같이 하시는 분들과 함께 타게 됩니다.
      ☞ 개인적으로 쇼티켓을 해오시는 경우는 트랜스퍼 비용으로 1인 $30 추가됩니다.
      (가이드가 판매하는 쇼 옵션에 한함) => 당일 가이드가 판매하는 쇼 티켓/타임에 한하며, 이 외 개별티켓은 이동수단 제공하지 않습니다.
      `,
        transport: '버스',
      },
      {
        id: 3,
        imageId: '',
        toFrom: '자이언 캐년 → 브라이스 캐년',
        description: `
      조식 후 출발
      자이언캐년 국립공원 관광
      신의 정원이라 불리는 웅장한 풍경
      레드캐년 관광(조망) 특전
      선셋포인트 - 선라이즈 포인트 구간 트래킹 (약 30~40분 진행)
      브라이스캐년 국립공원 관광
      자연이 만들어 놓은 신비로운 풍경
      캐납으로 이동하여 석식(★스테이크&와인) 및 호텔 투숙
      석식 - 특식
      스테이크&와인(캐납)
      `,
        transport: '버스',
      },
      {
        id: 4,
        imageId: '',
        toFrom: '페이지 → 모뉴먼트 밸리',
        description: `
      조식 후 출발
      글랜캐년 댐 관광(조망)
      콜로라도 강 상류에 위치한 거대한 댐
      안텔로프 캐년 관광
      신비로운 형상의 천연 동굴
      선택관광 안내
      [선택관광] 레이크파웰 유람선(글랜캐년)
      인디언의 성지라 불리는 모뉴먼트 밸리로 이동 및 관광
      모뉴먼트 밸리 관광(조망)
      선택관광 안내
      -> 지프투어시 모래바람으로 인해 개인 마스크를 준비하셔야 합니다.
      모뉴먼트 인디언 지프투어
      플래그스탭으로 이동하여 석식 호텔 투숙
      `,
        transport: '버스',
      },
      {
        id: 5,
        imageId: '',
        toFrom: '세도나 → 그랜드캐년 → 라스베이거스',
        description: `
        기상 후 세계에서 전자기 에너지인 볼텍스!가 가장 많이 나오는 <세도나> 관광
        세도나마을/업다운타운/벨락/에어포트 메사 등
        에어포트 메사 관광(조망)
        벨락 관광(조망)
        대성당바위 관광(조망)
        <세도나는 어디일까???>
        그랜드 캐년을 창조한 것이 신이라면, 그 신들이 사는 곳이 바로 세도나 이다. 알록달록 바위산과 청명한 소나무 숲들이 병풍처럼 에워싸고 있어 신비롭고 오묘한 관광 명소 이다. 예전 LA 다저스의 전설 <박찬호> 선수 가 명상 훈련을 한 곳으로 한국에도 잘 알려져 있다.
        그랜드 캐년으로 이동 [약 3시간 30분 소요]
        그랜드 캐년 관광
        대자연의 신비함이 느껴지는 넓고 깊은 협곡
        선택관광 안내 - ★Tip&Advice★
        ☞ 그랜드 캐년 경비행기 선택관광은 약 45분 소요되며, 탑승시 여권을 소지하셔야 합니다.
        ☞ 고혈압, 심장 질환등 경비행기 탑승에 우려가 있으신 분은 탑승전 꼭 현지가이드와 상의하시기 바랍니다.
        ☞ 현지 기후 및 변동상항에 따라 볼더시티 지역에서의 경비행기로 대체 진행될 수 있습니다.
        [선택관광] 그랜드캐년 경비행기
        선택관광 안내
        [선택관광] 그랜드캐년 아이맥스 영화
        세계최대의 카지노 도시인 라스베이거스로 이동
        선택관광 안내
        [선택관광] 태양의서커스 'KA' 공연
        선택관광 안내
        [선택관광] 태양의서커스 'LOVE'
        선택관광 안내
        [선택관광] 태양의서커스 '미스티어' 공연
        선택관광 안내
        [선택관광] 르레브 공연
      `,
        transport: '버스',
      },
      {
        id: 6,
        imageId: '',
        toFrom: '로스엔젤레스',
        description: `
      중식 후 캘리포니아주 최고의 도시 [로스앤젤레스] 다운타운 NEW 핵심투어!
      ■ 그리피스 천문대(Griffith Observatory)

      1896년에 지역 유지인 그리피스(Griffith) 대령이 천문대와 전시장 등을 지을 부지를 로스앤젤레스 시에 기부하였다. 이 부지에 그리피스 공원이 세워졌고 1935년 5월에 천문대가 공원 내에 들어섰다. 고지대에 있어 로스앤젤레스 시내를 한눈에 조망할 수 있다.

      ■ 올베라 스트리트 : LA에서 가장 오래된 역사의 거리.
      ■ 앤젤스 플라이트 [Angels Flight] & 그랜드 센트럴 마켓
      : 앤젤스 플라이트는 케이블카 철로로 1901년 완공 당시 세계에서 가장 짧은 철로로 유명했다. 1960년대 촬영된 다수의 할리우드 영화와 TV 시리즈에 로스앤젤레스 중심가의 명물로 등장한 바 있다. (영화 라라랜드 촬영장소)

      ■ 산타모니카 비치 및 베니스 비치

      ※LA 다운타운 탐방은 이동 동선상 일부 차창관광으로 진행될 수 있습니다.
      `,
        transport: '버스',
      },
    ],
  },
];
