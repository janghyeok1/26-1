#include<iostream>
#include<string>
#include<cstring>
using namespace std;

template <typename T>
class stack{
private:
    T* s;
    int size;
    int top;
public:
    stack(int n = 100) : size(n), top(-1){s = new T[size];}
    ~stack(){delete []s;}
    void push(T v){
        if(isFull()) cout << "full" << endl;
        else {s[++top] = v;}
    }
    T pop(){
        if(isEmpty()){
            cout << "empty" << endl;
            return -1;
        }
        else return s[top--];
    }
    bool isEmpty() const{return top == -1;}
    bool isFull() const{return top == size - 1;}
};
int main(){
    stack<int> s;
    s.push(100);
    s.push(200);
    s.push(300);
    s.push(400);
    cout << s.pop() << endl;
    cout << s.pop() << endl;
    cout << s.pop() << endl;
    cout << s.pop() << endl;
    cout << s.pop() << endl;
    return 0;
}