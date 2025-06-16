const gameData = {
  categories: ["챔피언", "아이템", "게임 용어", "e스포츠", "소환사의 협곡"],
  quizzes: [
    // 챔피언 카테고리
    {
      id: 1,
      category: "챔피언",
      difficulty: "쉬움",
      question: "💬 민수: \"리그오브레전드에서 '악마의 잔영' 별명을 가진 챔피언은?\"",
      choices: ["모르가나", "아트록스", "이블린", "바루스"],
      correct: "이블린"
    },
    {
      id: 2,
      category: "챔피언",
      difficulty: "보통",
      question: "🧠 수빈: \"궁극기가 '죽음의 연꽃'인 챔피언은?\"",
      choices: ["제드", "아칼리", "카타리나", "탈론"],
      correct: "카타리나"
    },
    {
      id: 3,
      category: "챔피언",
      difficulty: "어려움",
      question: "😰 민재: \"최초 출시 챔피언이 아닌 것은?\"",
      choices: ["리 신", "애니", "워윅", "블리츠크랭크"],
      correct: "리 신"
    },
    {
      id: 4,
      category: "챔피언",
      difficulty: "보통",
      question: "🧑‍💼 태민: \"리그오브레전드에서 '공허의 딸'로 알려진 챔피언은?\"",
      choices: ["카사딘", "벨베스", "카이사", "렉사이"],
      correct: "카이사"
    },
    {
      id: 5,
      category: "챔피언",
      difficulty: "어려움",
      question: "🎯 해린: \"패시브 스킬이 '마법석'인 챔피언은?\"",
      choices: ["나르", "말파이트", "라이즈", "오른"],
      correct: "말파이트"
    },

    // 아이템 카테고리
    {
      id: 6,
      category: "아이템",
      difficulty: "쉬움",
      question: "📦 한솔: \"공격 속도를 올려주는 대표 아이템은?\"",
      choices: ["구인수의 격노검", "가고일 돌갑옷", "태양불꽃 방패", "얼어붙은 심장"],
      correct: "구인수의 격노검"
    },
    {
      id: 7,
      category: "아이템",
      difficulty: "보통",
      question: "💡 연우: \"마법 저항력을 올려주는 방어 아이템은?\"",
      choices: ["정령의 형상", "스태틱의 단검", "망자의 갑옷", "핏빛 칼날"],
      correct: "정령의 형상"
    },
    {
      id: 8,
      category: "아이템",
      difficulty: "어려움",
      question: "🛡️ 현우: \"다음 중 체력 회복 효과가 없는 아이템은?\"",
      choices: ["구인수의 격노검", "스테락의 도전", "죽음의 무도", "몰락한 왕의 검"],
      correct: "구인수의 격노검"
    },
    {
      id: 9,
      category: "아이템",
      difficulty: "쉬움",
      question: "⚔️ 도윤: \"치명타 확률을 높여주는 아이템은?\"",
      choices: ["스태틱의 단검", "란두인의 예언", "무한의 대검", "가시 갑옷"],
      correct: "무한의 대검"
    },
    {
      id: 10,
      category: "아이템",
      difficulty: "보통",
      question: "🔍 재현: \"다음 중 생명력 흡수가 있는 아이템은?\"",
      choices: ["몰락한 왕의 검", "얼어붙은 심장", "스태틱의 단검", "고속 연사포"],
      correct: "몰락한 왕의 검"
    },

    // 게임 용어 카테고리
    {
      id: 11,
      category: "게임 용어",
      difficulty: "쉬움",
      question: "🎮 소윤: \"롤에서 'CS'는 무엇의 약자일까?\"",
      choices: ["Creep Score", "Champion Skill", "Combat Strike", "Critical Shot"],
      correct: "Creep Score"
    },
    {
      id: 12,
      category: "게임 용어",
      difficulty: "보통",
      question: "📈 태민: \"'와드'의 주된 목적은?\"",
      choices: ["이동 속도 증가", "공격력 증가", "시야 확보", "체력 회복"],
      correct: "시야 확보"
    },
    {
      id: 13,
      category: "게임 용어",
      difficulty: "어려움",
      question: "🔍 해나: \"'바론 버프'의 공식 명칭은?\"",
      choices: ["내셔 남작의 손길", "정복자의 힘", "바론의 축복", "파괴자의 의지"],
      correct: "내셔 남작의 손길"
    },
    {
      id: 14,
      category: "게임 용어",
      difficulty: "쉬움",
      question: "🕹️ 진우: \"롤에서 '블루'는 무엇을 의미할까?\"",
      choices: ["푸른 전령", "용", "푸른 파수꾼", "내셔 남작"],
      correct: "푸른 파수꾼"
    },
    {
      id: 15,
      category: "게임 용어",
      difficulty: "보통",
      question: "⚡ 아라: \"'로밍'의 의미는?\"",
      choices: ["다른 라인에 지원을 가는 것", "본 라인에서 cs만 먹는 것", "정글 몬스터를 처치하는 것", "기지로 귀환하는 것"],
      correct: "다른 라인에 지원을 가는 것"
    },

    // e스포츠 카테고리
    {
      id: 16,
      category: "e스포츠",
      difficulty: "쉬움",
      question: "🏆 태형: \"리그오브레전드 월드 챔피언십을 흔히 부르는 이름은?\"",
      choices: ["롤림픽", "롤챌린지", "롤드컵", "롤마스터즈"],
      correct: "롤드컵"
    },
    {
      id: 17,
      category: "e스포츠",
      difficulty: "보통",
      question: "🎤 해린: \"T1 팀의 전설적인 미드라이너는 누구일까?\"",
      choices: ["페이커", "데프트", "룰러", "칸나"],
      correct: "페이커"
    },
    {
      id: 18,
      category: "e스포츠",
      difficulty: "어려움",
      question: "🏅 아라: \"2020 롤드컵 우승 팀은?\"",
      choices: ["DRX", "T1", "DAMWON Gaming", "FunPlus Phoenix"],
      correct: "DAMWON Gaming"
    },
    {
      id: 19,
      category: "e스포츠",
      difficulty: "보통",
      question: "🎥 수빈: \"리그오브레전드의 공식 e스포츠 리그 중 유럽 리그 명칭은?\"",
      choices: ["LEC", "LCS", "LPL", "LCK"],
      correct: "LEC"
    },
    {
      id: 20,
      category: "e스포츠",
      difficulty: "보통",
      question: "📢 현우: \"2021 롤드컵 결승에서 DK를 꺾고 우승한 팀은?\"",
      choices: ["EDG", "T1", "Gen.G", "G2 Esports"],
      correct: "EDG"
    },

    // 소환사의 협곡 카테고리
    {
      id: 21,
      category: "소환사의 협곡",
      difficulty: "쉬움",
      question: "🌿 연우: \"맵에서 '드래곤'이 처음 등장하는 시간은?\"",
      choices: ["10분", "2분", "5분", "3분 30초"],
      correct: "5분"
    },
    {
      id: 22,
      category: "소환사의 협곡",
      difficulty: "보통",
      question: "🗻 민재: \"전령은 어느 라인에 주로 사용되나?\"",
      choices: ["탑", "미드", "바텀", "정글"],
      correct: "탑"
    },
    {
      id: 23,
      category: "소환사의 협곡",
      difficulty: "어려움",
      question: "🕰️ 현우: \"내셔 남작은 게임 몇 분에 처음 생성되나?\"",
      choices: ["20분", "15분", "10분", "25분"],
      correct: "20분"
    },
    {
      id: 24,
      category: "소환사의 협곡",
      difficulty: "보통",
      question: "🔥 태민: \"화염 드래곤 버프 효과는?\"",
      choices: ["슬로우 효과", "이동 속도 증가", "체력 재생 증가", "공격력/주문력 증가"],
      correct: "공격력/주문력 증가"
    },
    {
      id: 25,
      category: "소환사의 협곡",
      difficulty: "쉬움",
      question: "⚡ 소윤: \"소환사의 협곡에서 총 억제기는 몇 개일까?\"",
      choices: ["3", "5", "4", "6"],
      correct: "3"
    }
  ]
};

export default gameData;