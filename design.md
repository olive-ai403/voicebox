---
name: 우리 동네 목소리함
colors:
  background: "#F7F3E8"
  on-background: "#1E2622"
  surface: "#F7F3E8"
  surface-dim: "#E8E1D0"
  surface-bright: "#FFFDF7"
  surface-variant: "#E6DEC9"
  surface-container-lowest: "#FFFEF9"
  surface-container-low: "#F2EDDE"
  surface-container: "#ECE5D3"
  surface-container-high: "#E6DEC9"
  surface-container-highest: "#E0D7BF"
  on-surface: "#1E2622"
  on-surface-variant: "#5B6B62"
  inverse-surface: "#2B332E"
  inverse-on-surface: "#F3F7F2"
  outline: "#7C8C82"
  outline-variant: "#D8D2C0"
  surface-tint: "#005B4D"
  primary: "#005B4D"
  on-primary: "#FFFFFF"
  primary-container: "#DCEFE6"
  on-primary-container: "#00382E"
  inverse-primary: "#7FD6BC"
  secondary: "#F2B24A"
  on-secondary: "#4A2E00"
  secondary-container: "#FFDFAE"
  on-secondary-container: "#5C3D00"
  tertiary: "#3E6B8A"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#D3E4EE"
  on-tertiary-container: "#1A3A4C"
  error: "#B3261E"
  on-error: "#FFFFFF"
  error-container: "#F9DEDC"
  on-error-container: "#410E0B"
  primary-fixed: "#DCEFE6"
  primary-fixed-dim: "#7FD6BC"
  on-primary-fixed: "#00201A"
  on-primary-fixed-variant: "#00382E"
  secondary-fixed: "#FFDFAE"
  secondary-fixed-dim: "#F2B24A"
  on-secondary-fixed: "#2A1800"
  on-secondary-fixed-variant: "#5C3D00"
  tertiary-fixed: "#D3E4EE"
  tertiary-fixed-dim: "#8FC0D6"
  on-tertiary-fixed: "#001F2A"
  on-tertiary-fixed-variant: "#1A3A4C"
  shadow: "#1E2622"
  scrim: "#000000"
typography:
  headline-lg:
    fontFamily: Pretendard
    fontSize: 28px
    fontWeight: "800"
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Pretendard
    fontSize: 22px
    fontWeight: "700"
    lineHeight: 30px
  title-sm:
    fontFamily: Pretendard
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 26px
  title-xs:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: "700"
    lineHeight: 21px
  body-lg:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  body-md:
    fontFamily: Pretendard
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 22px
  body-sm:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 19px
  label-md:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Pretendard
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 14px
    letterSpacing: 0.02em
  button-lg:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: "700"
    lineHeight: 24px
  button-sm:
    fontFamily: Pretendard
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
rounded:
  sm: 6px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  gutter: "{spacing.sm}"
  margin: "{spacing.lg}"
elevation:
  level-0: none
  level-1: "0 1px 3px rgba(30, 38, 34, 0.08)"
  level-2: "0 4px 12px rgba(30, 38, 34, 0.10)"
  level-3: "0 8px 24px rgba(30, 38, 34, 0.14)"
breakpoints:
  mobile: 0px
  tablet: 768px
  desktop: 1024px
grid:
  mobile:
    columns: 1
    gutter: "{spacing.gutter}"
    margin: "{spacing.margin}"
  tablet:
    columns: 2
    gutter: "{spacing.gutter}"
    margin: "{spacing.margin}"
  desktop:
    columns: 4
    gutter: "{spacing.gutter}"
    margin: "{spacing.xl}"
    maxWidth: 1200px
components:
  header:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "{spacing.md} 0"
    orgNameTypography: "{typography.title-xs}"
    orgSubtitleTypography: "{typography.label-sm}"
  hero:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    padding: "{spacing.xl} 0"
    maxContentWidth: 640px
    titleTypography: "{typography.headline-lg}"
    descriptionTypography: "{typography.body-md}"
  footer:
    backgroundColor: "{colors.on-background}"
    textColor: "{colors.inverse-on-surface}"
    typography: "{typography.label-md}"
    padding: "{spacing.lg} 0"
  auth-card:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.xl}"
    shadow: "{elevation.level-2}"
    maxWidth: 400px
    padding: "{spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  button-primary-hover:
    backgroundColor: "{colors.on-primary-fixed-variant}"
  button-outline:
    backgroundColor: transparent
    borderColor: "{colors.outline}"
    textColor: "{colors.on-surface}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.xs} {spacing.md}"
  button-outline-hover:
    backgroundColor: "{colors.surface-container-high}"
  button-accent:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  button-accent-hover:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
  button-google:
    backgroundColor: "{colors.surface-container-lowest}"
    borderColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  button-status:
    backgroundColor: "{colors.surface-container-lowest}"
    borderColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  button-status-active-접수:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    borderColor: transparent
  button-status-active-처리중:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    borderColor: transparent
  button-status-active-완료:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    borderColor: transparent
  card-post:
    backgroundColor: "{colors.surface-container-lowest}"
    borderColor: "{colors.outline-variant}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
  card-post-photo:
    size: 56px
    rounded: "{rounded.DEFAULT}"
  card-post-title:
    typography: "{typography.title-xs}"
    maxLines: 2
  card-post-excerpt:
    typography: "{typography.body-sm}"
    textColor: "{colors.on-surface-variant}"
    maxLines: 1
  card-post-meta:
    typography: "{typography.label-sm}"
    textColor: "{colors.on-surface-variant}"
  badge-status-접수:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-status-처리중:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-status-완료:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  chip-category:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-variant}"
    borderColor: "{colors.outline-variant}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  tab-bar:
    borderColor: "{colors.outline-variant}"
    gap: "{spacing.lg}"
  tab-item:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.button-sm}"
    padding: "{spacing.sm} 0"
  tab-item-active:
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
  input-field:
    backgroundColor: "{colors.surface-container-low}"
    borderColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
  input-field-focus:
    borderColor: "{colors.primary}"
    shadow: "{elevation.level-1}"
  input-field-error:
    borderColor: "{colors.error}"
  textarea-field:
    backgroundColor: "{colors.surface-container-low}"
    borderColor: "{colors.outline-variant}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
    minHeight: 160px
  textarea-field-focus:
    borderColor: "{colors.primary}"
    shadow: "{elevation.level-1}"
  field-label:
    typography: "{typography.label-md}"
    textColor: "{colors.on-surface-variant}"
  field-readonly:
    typography: "{typography.body-md}"
    textColor: "{colors.on-surface-variant}"
  field-error-message:
    typography: "{typography.label-md}"
    textColor: "{colors.error}"
  photo-upload:
    backgroundColor: "{colors.surface-container-lowest}"
    borderColor: "{colors.outline}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.lg}"
  photo-upload-thumb:
    size: 72px
    rounded: "{rounded.sm}"
  photo-upload-dragover:
    borderColor: "{colors.primary}"
    shadow: "{elevation.level-1}"
---

## Brand & Style

**우리 동네 목소리함**은 **오늘도가게(협동상회협동조합)**가 운영하는 동네 생활 제보 서비스입니다. 주민이 골목 가로등, 놀이터, 도로처럼 생활 속에서 겪은 불편이나 제안을 글로 남기면, 오늘도가게가 접수해 처리하고 그 결과를 다시 알려줍니다.

디자인 방향은 **신뢰감 있는 로컬(Local & Trustworthy)** 스타일입니다. 짙은 녹색을 기본 바탕으로 안정감을 주고, 따뜻한 주황을 포인트로만 얹어 딱딱하지 않은 온기를 더합니다. 화면은 크림빛 배경 위에 절제된 카드와 여백으로 구성해, 민원 행정 시스템처럼 차갑지 않게, "동네 이웃이 챙겨준다"는 정직하고 차분한 인상을 지향합니다. 과장된 애니메이션, 강한 그림자, 원색의 대비는 쓰지 않습니다.

오늘 함께 만드는 공통 기능 네 가지 — **글 저장하기 · 사진 올리기 · 로그인·회원가입 · 처리상태와 관리자 화면** — 를 기준으로 아래 컴포넌트 규격을 정합니다.

## Colors

- **주색 Primary (`#005B4D`)**: 헤더·히어로 배경, 핵심 버튼(글 저장하기, 구글 로그인 확정 화면 전환 등), 탭 활성 표시, 처리상태 **완료** 배지에 사용합니다.
- **보조색 Secondary (`#F2B24A`)**: 히어로의 "의견 남기기"처럼 화면에서 눈에 띄어야 하는 딱 하나의 포인트, 처리상태 **처리중** 배지에 사용합니다. 배경 전체를 채우거나 주색과 대등한 비중으로 쓰지 않습니다.
- **제3색 Tertiary (`#3E6B8A`)**: 처리상태 **접수** 배지 전용입니다. 분야 칩 등 다른 용도로 함께 쓰지 않아, 상태 색과 분야 색이 헷갈리지 않게 합니다.
- **배경 Background (`#F7F3E8`)**: 전체 바탕은 따뜻한 미색을 사용합니다. 순수 흰색(`#FFFFFF`)은 카드·입력창의 가장 낮은 표면(`surface-container-lowest`)에서만 제한적으로 씁니다.
- **글자 On-surface (`#1E2622`)**: 본문 글자의 기본색입니다. 보조 설명·메타 정보(작성자·날짜 등)는 이 색을 그대로 쓰지 않고 `on-surface-variant`(`#5B6B62`)로 한 단계 낮춥니다.
- **테두리 Outline**: 카드·입력창 구분선은 `outline-variant`(`#D8D2C0`)를, 강조가 필요한 테두리(아웃라인 버튼, 사진 업로드 박스 등)는 `outline`(`#7C8C82`)을 사용합니다. 진한 검정 테두리는 쓰지 않습니다.
- **에러 Error (`#B3261E`)**: 입력 폼에서 필수 항목을 비운 채 저장했을 때처럼, 진짜 검증 실패 상황에만 씁니다. 그 외의 곳에서는 쓰지 않습니다.
- **그림자 Shadow**: 순수 검정이 아니라 글자색(`#1E2622`)을 8~14% 불투명도로 낮게 깔아, 은은하고 따뜻한 그림자를 만듭니다. 자세한 단계는 아래 Elevation 참고.

## Typography

본문 서체는 **Pretendard**를 사용합니다. 제목/본문/메타/버튼 4갈래, 총 11단계로 고정하고 그 사이 임의의 크기를 만들지 않습니다.

| 용도 | 단계 | 크기 / 줄높이 | 굵기 |
|---|---|---|---|
| 제목 | `headline-lg` | 28px / 36px | 800 (페이지 타이틀, 히어로 제목) |
| 제목 | `headline-md` | 22px / 30px | 700 (섹션 타이틀) |
| 제목 | `title-sm` | 18px / 26px | 600 (폼·모달 제목) |
| 제목 | `title-xs` | 15px / 21px | 700 (게시글 카드 제목, 헤더 단체명) |
| 본문 | `body-lg` | 16px / 26px | 400 (본문 문단) |
| 본문 | `body-md` | 14px / 22px | 400 (입력창·텍스트영역 본문, 히어로 설명) |
| 본문 | `body-sm` | 13px / 19px | 400 (게시글 카드 본문 앞부분) |
| 메타 | `label-md` | 13px / 18px | 500 (필드 라벨, 탭, 처리상태 버튼, 폼 에러 메시지) |
| 메타 | `label-sm` | 11px / 14px | 500 (작성자·날짜, 배지·칩, 헤더 부제 전용) |
| 버튼 | `button-lg` | 16px / 24px | 700 (주요 CTA) |
| 버튼 | `button-sm` | 14px / 20px | 600 (보조 버튼) |

`label-sm`(11px)은 배지·칩·메타 정보 등 극히 제한된 용도로만 쓰고, 읽는 본문 텍스트에는 쓰지 않습니다.

## 페이지 골격 (헤더 · 히어로 · 푸터)

확정한 홈 화면 시안을 기준으로 고정합니다. 로그인 게이트, 마이페이지, 관리자 화면도 같은 헤더·푸터를 재사용합니다.

- **헤더**: 배경은 `primary`, 글자는 `on-primary`(흰색). 아이콘(36×36, `rounded.DEFAULT`) + 단체명 두 줄(위 `오늘도가게` 15px 굵게, 아래 `협동상회협동조합` 11px) 순서로 왼쪽 정렬합니다. 상하 여백 `spacing.md`.
- **히어로**: 배경은 헤더와 같은 `primary` 통짜 블록. 내부 폭은 640px로 제한하고 왼쪽 정렬합니다. 제목은 `headline-lg`(28px/800), 설명은 `body-md` 톤을 90% 불투명도로 낮춘 흰 글자 1~2문장, 버튼은 `button-accent` 하나("의견 남기기")만 둡니다. 상하 여백 `spacing.xl`. 히어로 문구는 서비스가 하는 일(제보 → 처리 → 상태 안내)만 설명하고, 없는 기능은 약속하지 않습니다.
- **푸터**: 배경은 `on-background`(짙은 글자색), 글자는 흰색 계열. 단체명·서비스명 한 줄, 저작권·안내 문구 한 줄로 두 줄 고정. 상하 여백 `spacing.lg`.

## Layout & Spacing

간격은 8px 스케일(`xs 4 / sm 8 / md 16 / lg 24 / xl 40 / xxl 64`) 6단계로 고정합니다. 이 외의 임의 값(예: 10px, 14px, 20px)은 사용하지 않습니다. 페이지 좌우 여백은 `spacing.lg`(24px, 데스크톱은 `spacing.xl` 40px), 컴포넌트 내부 간격과는 별도 트랙으로 관리합니다.

**게시글 카드 그리드 — 반응형 3폭**

| 화면 | 기준폭 | 열 수 | 여백(margin) | 카드 간격(gutter) |
|---|---|---|---|---|
| 모바일 | ~767px | **1열** | 24px | 8px |
| 태블릿 | 768px~1023px | **2열** | 24px | 8px |
| PC | 1024px 이상 | **4열** | 40px, 최대폭 1200px | 8px |

오늘 정한 게시글 카드는 "정보 우선(빽빽하게, 사진 작게)" 방향으로 확정했으므로, PC에서 **4열**을 기준으로 두고 그 이상으로 늘리지 않습니다. 카드 간격은 촘촘하게 `spacing.sm`(8px)을 씁니다. 마이페이지의 "내가 쓴 글" 탭도 같은 그리드를 재사용합니다.

## Elevation & Depth

그림자는 4단계(`level-0~3`)로 고정합니다. 모두 글자색(`#1E2622`) 기반의 저채도 그림자이며, 순수 검정이나 진하고 또렷한 그림자는 쓰지 않습니다.

- **level-0** — 게시글 카드의 기본 상태. 그림자 없이 `outline-variant` 테두리만으로 배경과 구분합니다(정보 밀도가 높아 그림자를 얹으면 화면이 산만해지기 때문).
- **level-1** — 입력창·텍스트영역이 포커스됐을 때, 사진 업로드 박스에 파일을 끌어다 놓을 때(드래그 오버)의 최소한의 피드백.
- **level-2** — 로그인 게이트의 인증 카드처럼, 배경 위에 확실히 떠 있어야 하는 카드 전용.
- **level-3** — 드롭다운, 확인 팝오버 등 다른 콘텐츠 위에 뜨는 요소 전용. 목록·카드에는 쓰지 않습니다.

## Shapes

모서리 값은 6단계(`sm 6 / DEFAULT 8 / md 12 / lg 16 / xl 24 / full`)로 고정합니다.

- **버튼**: `md`(12px) — 단, 처리상태 버튼(`button-status`)은 배지와 같은 알약형을 쓰는 예외로, 아래 `full` 규칙을 따릅니다.
- **게시글 카드 · 입력창 · 텍스트영역 · 사진 업로드 박스**: `DEFAULT`(8px) — 폼 요소와 카드를 같은 단으로 묶어 "글쓰기 화면"과 "목록 화면"의 톤을 통일합니다.
- **로그인 인증 카드**: `xl`(24px) — 페이지 안의 페이지처럼 확실히 구분되는 큰 곡률.
- **배지·칩·처리상태 버튼**: `full`(알약형).
- **사진 썸네일**: `sm`(6px).

## Components

### 버튼 (4종 + 예외 1종)

- `button-primary`: 주색 배경, 흰 글자. 글 저장하기, 로그인 확정처럼 화면당 핵심 액션 1개에만 사용합니다.
- `button-outline`: 투명 배경 + `outline` 테두리. 취소, 로그아웃 등 비중이 낮은 보조 액션.
- `button-accent`: 보조색(주황) 배경, 진한 갈색 글자. 히어로의 "의견 남기기"처럼 페이지에서 가장 눈에 띄어야 하는 단 하나의 유도 액션.
- `button-status`: 처리상태 변경용 알약형 버튼 3개(접수/처리중/완료)를 나란히 두는 전용 버튼. 평소엔 중립(`surface-container-lowest` + `outline-variant` 테두리), 현재 상태인 버튼만 해당 상태 배지와 같은 색(`button-status-active-접수/처리중/완료`)으로 채워 관리자가 한눈에 현재 상태를 확인합니다. **관리자 화면(의견 관리 탭)에서만 사용**합니다.
- **예외 · `button-google`**: 구글 로그인 버튼은 Google 브랜드 가이드라인을 따르는 유일한 예외입니다. 흰 배경 + `outline-variant` 테두리 + 구글 로고 + "Google로 계속하기" 문구를 그대로 사용하고, 우리 주색·보조색으로 다시 칠하지 않습니다. 로그인/회원가입 용도 외에는 이 스타일을 재사용하지 않습니다.

이 5종 외에 새로운 색상의 버튼을 만들지 않습니다.

### 게시글 카드 (`card-post`)

제목·본문 앞부분·사진·처리상태·분야·작성자·작성시간을 한 장에 담는, "정보 우선" 방향으로 확정한 카드입니다.

- 구조: 왼쪽에 정사각 사진(56px, `card-post-photo`), 오른쪽에 상태 배지+분야 칩 한 줄 → 제목(`title-xs`, 최대 2줄) → 본문 앞부분(`body-sm`, 최대 1줄) → 작성자·작성시간(`label-sm`, `홍길*·2026.08.19` 형식으로 한 줄).
- 배경 `surface-container-lowest`, 테두리만 사용(그림자 없음), `rounded.DEFAULT`, 내부 여백 `spacing.sm`.
- 사진을 올리지 않은 글은 회색 자리표시자 아이콘을 그대로 노출합니다. 여러 장을 올려도 카드에는 **첫 번째 사진(대표 사진) 하나만** 보여줍니다.
- 작성시간은 사용자가 입력하는 값이 아니라 저장 시 서버가 자동으로 기록한 값을 그대로 표시합니다.

### 처리상태 배지 (`badge-status`, 3종 고정)

- `badge-status-접수`: 제3색(`tertiary-container`) — 글이 막 등록된 상태.
- `badge-status-처리중`: 보조색(`secondary-container`) — 오늘도가게가 확인·조치 중인 상태.
- `badge-status-완료`: 주색(`primary-container`) — 처리가 끝난 상태.

이 3색은 처리상태 전용입니다. 다른 용도(분야 표시, 할인·이벤트 표시 등)에는 절대 재사용하지 않습니다. 관리자 화면의 `button-status`도 같은 3색 매핑을 그대로 따릅니다.

### 분야 칩 (`chip-category`)

- 배경 `surface-container-high`, 글자 `on-surface-variant`, 테두리 `outline-variant`인 **중립 색 하나**로 고정합니다.
- 분야는 단체마다 개수가 다르고 나중에 늘어나므로, 칩마다 다른 색을 배정하지 않습니다 — 개수가 늘어도 항상 같은 톤이라 화면이 안정적입니다.
- 필터 줄에서는 여러 칩을 `flex-wrap`으로 배치해, 개수가 늘어나면 다음 줄로 넘어갈 뿐 가로 폭이 깨지지 않게 합니다. 관리자 화면의 "분야 관리" 탭에서 분야를 추가·삭제할 때도 이 칩 스타일을 그대로 씁니다.

### 탭 (`tab-bar` / `tab-item`)

마이페이지(내가 쓴 글 / 내 정보)와 관리자 화면(의견 관리 / 분야 관리) 2탭 화면에 공용으로 씁니다.

- 밑줄형 탭 하나로 고정합니다. 탭 사이 간격 `spacing.lg`, 전체 하단에 `outline-variant` 1px 구분선.
- 비활성 탭: `on-surface-variant` 글자, `button-sm` 타이포.
- 활성 탭: 글자색 `primary`, 하단 2px `primary` 밑줄.
- 필터에 쓰는 알약형 칩과 시각적으로 구분되도록, 탭에는 배경색이나 알약 모양을 쓰지 않습니다.

### 입력 폼

글 저장하기(제목·내용·작성자·작성시간)와 사진 올리기에 사용하는 조합입니다.

- `field-label`: 입력창 위에 붙는 라벨. `label-md`, `on-surface-variant`.
- `input-field`: 제목처럼 한 줄짜리 입력. `surface-container-low` 배경 + `outline-variant` 테두리, 포커스 시 테두리가 `primary`로 바뀝니다(`input-field-focus`).
- `textarea-field`: 내용을 쓰는 여러 줄 입력. `input-field`와 같은 배경·테두리·모서리를 쓰고, 최소 높이 160px로 충분한 쓰기 공간을 확보합니다.
- `field-readonly`: 작성자 표시 전용. 로그인한 사용자 이름을 입력창이 아닌 일반 텍스트(`body-md`, `on-surface-variant`)로만 보여주고, 수정 가능한 것처럼 보이는 테두리 상자를 씌우지 않습니다. 작성시간은 폼에 아예 노출하지 않고, 저장된 글의 카드·상세에서만 보여줍니다.
- 필수 항목(제목·내용)을 비운 채 저장을 누르면 `input-field-error`/`textarea-field`에 `error` 색 테두리를 두르고, 입력창 바로 아래 `field-error-message`(`error` 글자색)로 "제목을 입력해주세요"처럼 안내합니다. `error` 색은 이 검증 실패 상황에만 쓰고, 평소 장식으로 쓰지 않습니다.
- `photo-upload`: 점선이 아닌 실선 `outline` 테두리의 사각 박스(`rounded.DEFAULT`, 내부 여백 `spacing.lg`)에 아이콘과 "사진 추가" 안내를 두고, 선택한 사진은 72px 정사각 썸네일(`photo-upload-thumb`)로 한 줄에 나열합니다. 여러 장 첨부를 허용하되, 게시글 카드에는 첫 번째 사진만 대표로 노출된다는 점을 이 화면에서도 안내합니다. 파일을 끌어다 놓으면(`photo-upload-dragover`) 테두리가 `primary` 색으로 바뀌어 놓을 수 있는 위치임을 알려줍니다.
- 하단 액션은 `button-outline`(취소) + `button-primary`(저장) 순서로 오른쪽 정렬합니다.

### 로그인 게이트 (`/login`, `/signup`)

- 배경은 `primary` 전체 화면, 가운데에 인증 카드(`auth-card`) 하나만 둡니다. `surface-container-lowest` 배경, `rounded.xl`, `elevation.level-2`, 최대 폭 400px, 내부 여백 `spacing.xl`.
- 카드 안 구성: 아이콘 + 서비스명, 안내 문구 1~2줄, `button-google` 하나. 구글 인증 외의 로그인 수단은 만들지 않습니다.
- `/login`과 `/signup`은 같은 카드 레이아웃을 쓰고 안내 문구만 다르게 합니다(예: 로그인은 "다시 오셨네요", 회원가입은 "환영해요"). 별도의 필드나 절차를 추가하지 않습니다.

## 하지 말 것 (Don'ts)

1. **배경에 순수 흰색(`#FFFFFF`)을 통째로 쓰지 않는다.** 페이지 배경은 항상 `#F7F3E8` 계열을 유지한다. 흰색은 카드·입력창의 가장 낮은 표면에서만 제한적으로 허용한다.
2. **주색과 보조색을 대등한 비중으로 쓰지 않는다.** 보조색(주황)은 화면당 하나의 포인트로만 쓴다. 배경, 헤더, 큰 영역을 주황으로 채우지 않는다.
3. **그림자를 순수 검정으로 쓰지 않는다.** 반드시 글자색(`#1E2622`) 기반 저투명도 그림자만 쓴다.
4. **정의되지 않은 모서리·간격 값을 쓰지 않는다.** 모서리는 `6/8/12/16/24px/full`, 간격은 `4/8/16/24/40/64px` 외의 임의 값(10px, 14px, 20px 등)을 새 컴포넌트에 쓰지 않는다.
5. **본문·설명 글자를 12px 미만으로 쓰지 않는다.** `label-sm`(11px)은 배지·칩·메타 전용이며 입력창·본문 텍스트에는 쓰지 않는다.
6. **처리상태 3색(접수/처리중/완료)을 다른 용도로 재사용하지 않는다.** 분야 칩은 항상 중립 하나의 색으로 고정하고, 상태 색과 섞어 쓰지 않는다.
7. **`button-google` 스타일을 로그인 외의 곳에 쓰지 않는다.** 반대로 우리 브랜드 색으로 구글 버튼을 다시 칠하지도 않는다.
8. **게시글 목록을 PC에서 4열 이상으로 늘리지 않는다.** 화면이 아무리 넓어도 카드 그리드는 4열을 상한으로 하고, 남는 여백은 `margin`(40px)과 최대폭(1200px)으로 처리한다.
9. **탭과 필터 칩의 모양을 섞지 않는다.** 탭(마이페이지·관리자 화면)은 밑줄형 하나만, 필터·분야는 알약형 칩만 쓴다.
10. **작성시간을 사용자가 입력하게 하지 않는다.** 저장 시 서버가 자동 기록한 값만 표시하고, 폼에 입력 필드로 노출하지 않는다.
11. **에러색을 장식으로 쓰지 않는다.** `error` 계열은 입력 폼 검증 실패처럼 진짜 오류 상황에만 쓰고, 강조나 장식 목적으로 쓰지 않는다.
