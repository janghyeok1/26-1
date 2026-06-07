#include<iostream>
#include<queue>
#include<string>
using namespace std;

int main(){
    priority_queue<int> q;
    q.push(100);
    q.push(300);
    q.push(40);
    q.push(200);
    while(!q.empty()){
        cout << q.top() << endl;
        q.pop();
    }
    return 0;
}