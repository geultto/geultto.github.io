export default function HomePage() {
  return (
    <main className="py-20">
      <div className="prose lg:prose-xl max-w-4xl mx-auto px-4">
        <h1>👋 안녕하세요 :)</h1>

        <p>
          <strong>글 쓰는 개발자 모임, 글또</strong>의 페이지에 오신 것을 환영합니다
        </p>

        <p>이 문서는 글또에 대한 설명 & 가이드라인에 대해 작성한 문서입니다.</p>

        <p>- 최종 수정 : 2024년 9월 30일</p>

        <div className="flex flex-col gap-2 p-4 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-900 dark:text-blue-50">
          <span className="font-bold text-lg">글또 추후 기수 공지</span>
          <span>글또는 10기까지 운영될 예정입니다(25년 3월까지 10기 운영)</span>
          <span>추가 모집을 받고 있지 않고 있습니다</span>
        </div>

        <h2>글또 커뮤니티의 비전</h2>
        <ul>
          <li>
            <strong>글을 작성하는 개발 직군분들이 모여서, 좋은 영향을 주고 서로 같이 자랄 수 있는 커뮤니티</strong>
          </li>
          <li>개발자들의 성장을 지원하는 커뮤니티</li>
          <li>
            각자의 직군에서 얻을 수 있는 내용을 토대로 글쓰기 진행
            <ul>
              <li>부가적으로 삶의 철학, 여러 고민을 나누는 커뮤니티</li>
            </ul>
          </li>
        </ul>

        <h2>글또 히스토리</h2>
        <img
          src="https://www.dropbox.com/s/5wyi4xax94o1c4m/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-10-22%20%EC%98%A4%ED%9B%84%2012.42.47.png?raw=1"
          alt="글또 히스토리"
          className="w-full"
        />

        <ul className="list-none">
          <li className="mb-6">
            <strong>글또 10기(639명)</strong>
            <ul>
              <li>포인트 시스템 개발</li>
              <li>감사함을 표현하는 종이비행기 개발</li>
              <li>길벗 / 튜링의 사과와 협업</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2023년 11월 ~ 2024년 5월</strong>
            <ul>
              <li>글또 9기(452명)</li>
              <li>CRM Push 메세지 봇 데달부 개발</li>
              <li>데이터 파이프라인 구축(To BigQuery)</li>
              <li>운영 자동화를 위한 글팽이 개발</li>
              <li>LLM 기반 큐레이션</li>
              <li>직무 커피챗</li>
              <li>직무 별 오프라인 반상회</li>
              <li>유데미 / 코드트리와 협업</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2023년 2월 ~ 23년 7월</strong>
            <ul>
              <li>글또 8기(336명) 진행</li>
              <li>글 제출, 패스 자동화</li>
              <li>커피챗과 피드백을 합친 커피드백</li>
              <li>
                <a href="https://github.com/geultto/Village-Neighborhood-Meeting">빌리지 반상회 발표 자료</a>
              </li>
              <li>
                <a href="https://github.com/geultto/geultto-curation">큐레이션 모음</a>
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2022년 5월 ~ 2022년 10월</strong>
            <ul>
              <li>글또 7기(182명) 진행</li>
              <li>글 제출을 편하게 진행하기 위한 또봇 개발</li>
              <li>익명 슬랙 메세지 전송을 위한 대나무숲 봇 개발</li>
              <li>같은 직군별 커피챗</li>
              <li>
                글또 내부 컨퍼런스 (글또콘)
                <ul>
                  <li>
                    <a href="https://github.com/geultto/geultto-conference">글또콘 발표 자료</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2021년 8월 ~ 2022년 1월</strong>
            <ul>
              <li>글또 6기(132명) 진행</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2020년 11월 ~ 2021년 5월</strong>
            <ul>
              <li>글또 5기(94명) 진행</li>
              <li>고민있어요 채널 생성</li>
              <li>
                온라인 모임 2회
                <ul>
                  <li>온라인 모각글</li>
                  <li>온라인 회고</li>
                </ul>
              </li>
              <li>피드백 방식에 대한 전체 회고 ⇒ 더 좋은 방법으로 개선</li>
              <li>신입 멘토링 진행(Private하게)</li>
              <li>쉼에 대한 이야기 : 쉼퍼런스 진행</li>
              <li>
                <a href="https://github.com/geultto/geultto-contents/issues/1">회고 모음집 Github 생성</a>
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2020년 3월 ~ 8월</strong>
            <ul>
              <li>글또 4기(69명) 진행</li>
              <li>신입 멘토링 진행</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2020년 2월</strong>
            <ul>
              <li>마이크로소프트웨어 399호에 "글또의 자동화 요정, 지니 프로젝트" 투고</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2019년 10월</strong>
            <ul>
              <li>데이터야놀자 2019 발표 지원 및 컨설팅</li>
              <li>정민정님의 Gan을 활용한, 내 손글씨를 따라쓰는 인공지능</li>
              <li>이창현님의 타다(TADA) 서비스의 데이터 웨어하우스 : 태초부터 현재까지</li>
              <li>
                <a href="https://zzsza.github.io/diary/2019/10/20/helping-presentation/">발표 컨설팅 관련 글</a>
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2019년 7월 ~ 12월</strong>
            <ul>
              <li>글또 3기(44명) 진행</li>
              <li>슬랙에서 활동</li>
              <li>총 337개 글 작성</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2019년 4월</strong>
            <ul>
              <li>마이크로소프트웨어 396호에 "개발자 글쓰기 모임, 글또" 투고</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2019년 3월</strong>
            <ul>
              <li>
                <a href="https://www.slideshare.net/zzsza/ss-137831892">
                  Write the Docs Seoul : 글쓰는 개발자 모임, 글또 발표
                </a>
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2018년 11월 ~ 2019년 5월</strong>
            <ul>
              <li>글또 2기(25명) 진행</li>
              <li>슬랙에서 활동</li>
              <li>총 230개 글 작성</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2018년 2월 ~ 9월</strong>
            <ul>
              <li>글또 1기(13명) 진행</li>
              <li>페이스북 그룹에서 활동</li>
            </ul>
          </li>

          <li className="mb-6">
            <strong>2018년 1월 3일 생성</strong>
          </li>
        </ul>

        <h2>글또를 만들게 된 계기</h2>
        <ul>
          <li>
            2017년 12월, 개발 블로그를 시작하고 주변 지인들과 이야기를 나눴습니다. 지인들 모두 개발 블로그를 만들었거나
            하고 싶은 의지가 있었어요
          </li>
          <li>
            그러나, 그 의지를 꾸준히 유지하는게 매우 힘들었어요. 꾸준히 글을 작성하는 동기를 주지 못한 것이 큰
            이유였다고 하네요
          </li>
          <li>
            주변 지인분들을 돕기 위해 + 빡세게 관리하기 위해 예치금을 건 글또를 만들었습니다. 예치금을 건 이유는 저도
            마음 고생하지 않고, 작성하지 않은 경우 글을 차감하고 끝(닦달하지 않고)
          </li>
          <li>
            2기, 3기를 하며 많은 분들의 이야기를 듣고, 글또 분들이 성장할 수 있는 커뮤니티로 확장하려고 합니다. 발표
            지원, 모각글 등을 할 예정이에요
          </li>
          <li>
            글 쓰는 개발자 모임이 많이 생기면 좋겠습니다. 꼭 글또가 아니여도, 주변 지인들을 모아 할 수 있도록 저희의
            시스템을 모두 공유합니다. 다만 글또를 참고했다 정도로 작성해주시면 좋을 것 같아요 :)
          </li>
          <li>만들고 싶은 것은 "따뜻한 공간"입니다. 조금이나마 많은 분들에게 따뜻함을 드릴 수 있으면 좋겠어요</li>
        </ul>
      </div>
    </main>
  );
}
