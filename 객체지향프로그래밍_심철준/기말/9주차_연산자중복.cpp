#include<iostream>
#include<assert.h>
using namespace std;

class myarray{
    friend ostream& operator<<(ostream &, const myarray &);
private:
    int *data;
    int size;
public:
    myarray(int s){
        size = (s > 0 ? s : 10);
        data = new int[size];
        for(int i = 0; i < size; i++) data[i] = 0;
    }
    //생성자
    ~myarray(){
        delete []data;
        data = NULL;
    }
    //소멸자
    myarray& operator=(const myarray &a){
        if(&a != this){
            delete []data;
            size = a.size;
            data = new int[size];
            for(int i = 0; i < size; i++) data[i] = a.data[i];
        }
        return *this;
    }
    //= 연산자 중복, 다르면 덮어쓰기
    int getsize() const {return size;}
    int& operator[](int index){
        assert(0 <= index && index < size);
        return data[index];
    }
    //[] 연산자 중복, 클래스의 배열 원소 반환
};
ostream& operator<<(ostream& output, const myarray &a){
    int i;
    for(i = 0; i < a.size; i++) output << a.data[i] << " ";
    output << endl;
    return output;
}
//출력 연산자 중복, 배열 출력
int main(){
    myarray a1(5);
    a1[0] = 1;
    a1[1] = 2;
    a1[2] = 3;
    a1[3] = 4;
    cout << a1;
    return 0;
}