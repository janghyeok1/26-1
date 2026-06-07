#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> v;
    for(int i = 0;i < 10;i++) v.push_back(i);
    vector<int>::iterator it;
    for(it = v.begin();it != v.end();it++) {
        cout << *it << " ";
        *it = 0;
    }
    cout << endl;
    for(it = v.begin();it != v.end();it++) {
        cout << *it << " ";
    }
    cout << endl;
    return 0;
}