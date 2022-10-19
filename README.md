# wanted-pre-onboarding-frontend
### 사용한 라이브러리
- axios
- react-router-dom
- styled-components
- react-icons
### 디렉터리 구조
```bash
src
├── components
│   ├── atoms
│   ├── molecules
│   └── organisms
│   └── pages
│   └── templates
├── utils
    ├── constants
    ├── hooks
    ├── models
    └── services

``` 
### 사용방법
1. 개발 환경 모드는 npm run start 명령어를 실행합니다.
2. Prod 환경 모드는 npm run build 후 serve -s build 명령어를 입력해주세요.

### 특징
1. 아토믹 디자인 패턴 사용: 가장 작은 컴포넌트 단위를 원자로 설정하고, 이것을 바탕으로 상위 컴포넌트를 만드는 방식입니다. 컴포넌트 설계를 할 때 독립성과 재사용성에 대해 고민을 많이 합니다. 큰 컴포넌트는 독립성을 갖고 있지만, 이것을 하나하나 분해해보면 알게모르게 디자인 요소가 재사용이 되는 것들이 꽤 많습니다. 그래서 styled-components를 이용하여 원자 형태의 스타일 컴포넌트를 만들어 기능과 합친 분자(molecules), 유기체(organisms), 템플릿(templates)으로 가서 최종적으로 페이지를 관리할 수 있게 하였습니다. 분자는 원자 컴포넌트들만 구성해서 짜도록하였고, 유기체의 경우에는 원자, 분자, 같은 단위인 유기체로 이루어진 컴포넌트로 구성하여, 독립성을 추구하였습니다.
2. 서비스: Angular2 프레임워크에서 아이디어를 얻었습니다. 리액트와 다르게 앵귤러는 서비스 단위로 의존성을 주입하여 전역 상태를 관리합니다. 그 뿐만 아니라, 전역 상태를 동작시키는 함수도 클래스에 넣어서 선언합니다. 각각의 API 호출 함수를 함수 표현식을 이용하여 선언하는 것보다는 함수가 공통적으로 관리해야하는 루트 카테고리를 클래스로 만들어 동작을 관리하는 것이 코드의 가독성을 높일 수 있다고 판단하여 이렇게 사용하였습니다.  

### 배포 링크
https://react-onboarding-frontend.uw.r.appspot.com/
