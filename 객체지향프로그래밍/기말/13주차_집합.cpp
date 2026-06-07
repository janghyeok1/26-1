#include<iostream>
#include<set>
using namespace std;
int main(){
    set<int> s;
    s.insert(1);
    s.insert(2);
    s.insert(3);
    set<int>::iterator it = s.find(4);
    if(it != s.end()) cout << *it << endl;
    else cout << "cannot find" << endl;
    return 0;
}