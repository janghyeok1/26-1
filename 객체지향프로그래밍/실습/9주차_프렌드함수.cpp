#include<iostream>
#include<cstring>
using namespace std;

class mystring{
    friend ostream& operator<<(ostream &, const mystring &);
private:
    char *pbuf;
public:
    mystring(const char *s = NULL){
        if(s == NULL){
            pbuf = new char[1];
            pbuf[0] = NULL;
        }
        else {
            pbuf = new char[::strlen(s) + 1];
            memset(pbuf, 0x00, ::strlen(s) + 1);
            memcpy(pbuf, s, ::strlen(s));
        }
    }
    //생성자
    mystring(mystring &s){
        pbuf = new char[s.getsize() + 1];
        memset(pbuf, 0x00, s.getsize() + 1);
        memcpy(pbuf, s.pbuf, s.getsize());
    }
    //복사 생성자
    ~mystring() {if(pbuf) delete []pbuf;}
    //소멸자
    void print(){cout << pbuf << endl;}
    //출력
    int getsize(){return strlen(pbuf);}
    //크기 반환
    mystring operator+(mystring &s){
        int size = getsize() + s.getsize();
        char *temp = new char[size + 1];
        memset(temp, 0x00, size + 1);
        memcpy(temp, pbuf, getsize());
        memcpy(&temp[getsize()], s.pbuf, s.getsize());
        mystring r(temp);
        delete []temp;
        return r;
    }
    //+ 연산자 중복, 클래스 더하기
};
ostream& operator<<(ostream &output, const mystring &a){
    output << a.pbuf << endl;
    return output;
}
//출력 연산자 중복, 클래스 출력
int main(){
    mystring s1("hello ");
    mystring s2("world");
    s1.print();
    s2.print();
    cout << (s1 + s2);
    return 0;
}