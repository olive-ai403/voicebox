export const STATUS = {
  RECEIVED: '접수',
  IN_PROGRESS: '처리중',
  DONE: '완료',
}

export const STATUSES = [STATUS.RECEIVED, STATUS.IN_PROGRESS, STATUS.DONE]

export const CATEGORIES = ['가로등·전기', '놀이터·시설', '도로·보행로', '환경·청소', '공원·시설']

export const POSTS = [
  {
    id: 1,
    title: '재활용 분리수거장이 매번 지저분해요',
    content:
      '분리수거장 주변에 쓰레기가 항상 널려있어서 냄새도 나고 보기 안 좋아요. 관리가 필요합니다.',
    category: '환경·청소',
    status: STATUS.RECEIVED,
    author: '최하*',
    date: '2026.08.19',
    photo: null,
  },
  {
    id: 2,
    title: '골목 가로등이 며칠째 안 켜져요',
    content:
      '저녁에 골목을 지나는데 가로등이 계속 꺼져 있어서 너무 어둡고 무서워요. 확인 부탁드립니다.',
    category: '가로등·전기',
    status: STATUS.RECEIVED,
    author: '김민*',
    date: '2026.08.18',
    photo: null,
  },
  {
    id: 3,
    title: '놀이터 그네가 삐걱거리고 흔들려요',
    content:
      '아이들이 타는 그네 축 부분에서 계속 삐걱거리는 소리가 나고 흔들림이 심해요. 안전 점검이 필요할 것 같아요.',
    category: '놀이터·시설',
    status: STATUS.IN_PROGRESS,
    author: '박도*',
    date: '2026.08.15',
    photo: null,
  },
  {
    id: 4,
    title: '공원 벤치 페인트가 벗겨져서 옷에 묻어요',
    content: '공원 벤치에 앉았다가 옷에 페인트가 묻었어요. 재도색이 필요할 것 같습니다.',
    category: '공원·시설',
    status: STATUS.IN_PROGRESS,
    author: '정유*',
    date: '2026.08.12',
    photo: null,
  },
  {
    id: 5,
    title: '인도 보도블록이 깨져서 걸려 넘어질 뻔했어요',
    content:
      '마트 앞 보도블록 한 칸이 깨진 채 방치되어 있어 넘어질 뻔했습니다. 빠른 정비 부탁드립니다.',
    category: '도로·보행로',
    status: STATUS.DONE,
    author: '이서*',
    date: '2026.08.10',
    photo: null,
  },
]
