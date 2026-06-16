#include<iostream>
using namespace std;

int main(){
    int i = 9;
    double f = 3.141592;
    int *pi;
    double *pf = &f;
    i = static_cast<int>(f);
    cout << i << endl;
    return 0;
}

/*
static_cast<>() 변수 형변환
dynamic_cast<>() 자식 클래스 -> 부모 클래스
const_cast<>() const 속성 제거 or 추가
reinterpret_cast<>() 포인터 타입 변환
*/