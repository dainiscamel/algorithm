# 자료구조 기초

  - 탐색(Search): 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정.
  - 자료구조(Data Structure): 데이터를 표현 관리하고 처리하기 위한 구조.

## forEach, map, filter, reduce 동작원리.

``` javascript

  // forEach
  function forEach(callback, thisArg) {
    for(let i=0; i<a.length ;i++){
      callback(a[i],i)
    }
  }

  a=[10,11,12,13]
  //forEach가 배열 요소를 탐색하면서 콜백함수를 계속 호출. for문 대산 사용.
  // v = 배열의 요소,  i = 인덱스
  a.forEach(function(v, i){
    console.log(v, i, this); 
    // 10 0 [1,2]
    // 11 1 [1,2]
    // 12 2 [1,2]
    // 13 3 [1,2]
  },[1,2]);

  // map ? 새로운 배열 생성. map이 생성하는 배열은 원본 배열과 길이가 같다.
  function map(callback, thisArg) {
    let list=[];
    for(let i=0; i<a.length ;i++){
      list.push(callback(a[i], i));
    }
  }

  a = [10,11,12,13];
  
  let answer = a.map(function(v, i){
    if(v%2==0)return v;
  },[1,2]);
  
    console.log(answer); 
    // [10,undefined,12,undefined]

  // filter ? 원본 배열에서 원하는 값을 가져오는 메소드(=새로운 배열 생성 x) 콜백함수가 참을 리턴했을 때의 요소만 배열을    생성해서 리턴.

  a = [10,11,12,13];

  function filter(callback, thisArg) {
    let list=[];
    for(let i=0; i<a.length ;i++){
      //콜백함수를 호출한 값이 참 일때만 push.
      if(callback(a[i], i))list.push(a[i]);
    }
  }
  
  let answer = a.filter(function(v, i){
    return v%2==0;
  },[1,2]);

    console.log(answer); 
    // [10,12]
    
  // reduce ? 배열이 아닌 값을 생성해서 리턴.
  a = [10,11,12,13];

  // 첫번재 인자: 콜백함수 두번째인자: 초기화값
  function reduce(callback, val) {
    let result=val;
    for(let i=0; i<a.length ;i++){
      // result값과 원본 배열값을 callback에 넘긴다.
      result=callback(result,a[i])
      // 0 10
      // 10 11
      // 21 12
      // 33 13
    }
      return result;
      
  }
  
  let answer = a.reduce(function(acc, v){
    return acc+v;
  },0);

    console.log(answer);   
    // 46
```

## 완전탐색
  - 가능한 모든 경우의 수를 다 체크해서 정답을 찾는 방법.

## 투포인터(Two Pointer) 알고리즘
  - 리스트에 순차적으로 접근해야 할 때 두 개의 점의 위치를 기록하면서 처리하는 알고리즘.

## 슬라이딩 윈도우(Sliding Window)알고리즘
  - 배열이나 리스트의 요소의 일정 범위(=공통 요소 재사용)의 값을 비교할때 사용하면 유용한 알고리즘

## 탐색 알고리즘 DFS/BFS

### DFS ? 
  - 깊이 우선 탐색.****
  - 그래프에서 깉은 부분을 우선적으로 탐색하는 알고리즘. 