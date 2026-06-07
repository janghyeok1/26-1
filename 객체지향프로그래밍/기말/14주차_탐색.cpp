#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main(){
    const int wanted = 6;
    int value[9] = {1,3,5,5,5,8,11,20,30};
    vector<int> v(&value[0],&value[9]);
    vector<int>::iterator it;
    for(it = v.begin();it != v.end();it++){cout << *it << " ";}
    cout << endl;
    bool isinit = binary_search(v.begin(),v.end(), wanted);
    if(isinit) cout << "found" << endl;
    else{
        it = lower_bound(v.begin(), v.end(), wanted);
        v.insert(it, wanted);
    }
    for(it = v.begin();it != v.end();it++){cout << *it << " ";}
    cout << endl;
    return 0;
}