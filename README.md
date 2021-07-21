## 노드 회원가입 기능 구현 프로젝트


### Bcrypt 암호화 이전의 평문암호
![bcrpt 암호화 이전의 password](https://user-images.githubusercontent.com/58061847/126438288-be2ddb7a-1ced-413f-810a-d7814bcbe51c.JPG)

### Bcrypt 암호화 순서
1. register route로 이동
2. 유저 정보들을 DB에 저장하기전에 암호화 할 타이밍 (mongoose의 pre 메서드를 사용해 save 메소드 실행 이전에 암호화)
3. salt 생성 (saltRounds = 10;)

### Bcrypt 적용 암호
![bcrypt 암호화 후](https://user-images.githubusercontent.com/58061847/126442649-0164ad85-9347-45cc-987c-808467579709.JPG)
