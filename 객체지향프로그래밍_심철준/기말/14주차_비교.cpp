#include<iostream>
#include<vector>
using namespace std;

int main(){
    int value1[9] = {1,2,3,4,5,6,7,8,9};
    int value2[9] = {9,9,3,4,5,6,9,9,9};
    vector<int> v1(&value1[0], &value1[9]);
    vector<int> v2(&value2[0], &value2[9]);
    vector<int>::iterator it1;
    for(it1 = v1.begin();it1 != v1.end();it1++) cout << *it1 << " ";
    cout << endl;
    vector<int>::iterator it2;
    for(it2 = v2.begin();it2 != v2.end();it2++) cout << *it2 << " ";
    cout << endl;
    bool isEqual = equal(v1.begin() + 2, v1.begin() + 5, v2.begin() + 2);
    if(isEqual) cout << "equal" << endl;
    else cout << "not equal" << endl;
    return 0;
}