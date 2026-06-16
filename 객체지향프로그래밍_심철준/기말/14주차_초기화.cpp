#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<int> v1;
    for(int i = 0; i < 10; i++) {
        v1.push_back(i);
        cout << v1[i] << " ";
    }
    cout << endl;
    fill(v1.begin(), v1.end(), 0);
    for(int i = 0; i < 10; i++) {
        cout << v1[i] << " ";
    }
    cout << endl;
    return 0;
}