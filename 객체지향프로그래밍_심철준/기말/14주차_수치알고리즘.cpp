#include<iostream>
#include<algorithm>
#include<string>
#include<vector>
using namespace std;

void display(string e){
    cout << e << " ";
}
int increment(int i){
    return ++i;
}
int main(){
    string name[5] = {"사과", "배", "키위", "레몬", "포도"};
    vector<string> fruit(5);
    vector<string>::iterator it;
    copy(&name[0], &name[5], fruit.begin());
    reverse(fruit.begin(), fruit.end());
    for(it = fruit.begin(); it != fruit.end(); it++) cout << *it << " ";
    cout << endl;
    for_each(fruit.begin(), fruit.end(), display);
    cout << endl;
    vector<int> v;
    vector<int> result(10);
    for(int i = 0; i < 10; i++) {
        v.push_back(i);
        cout << v[i] << " ";
    }
    cout << endl;
    transform(v.begin(), v.end(), result.begin(), increment);
    vector<int>::iterator it1;
    for(it1 = result.begin();it1 != result.end(); it1++){
        cout << *it1 << " ";
    }
    cout << endl;
    it = remove(fruit.begin(), fruit.end(), "레몬");
    for_each(fruit.begin(), fruit.end(), display);
    cout << endl;
    int value[5] = {23,25,72,46,13};
    vector<int> v1(&value[0], &value[5]);
    for(it1 = v1.begin(); it1 != v1.end();it1++) cout << *it1 << " ";
    cout << endl;
    sort(v1.begin(), v1.end());
    for(it1 = v1.begin(); it1 != v1.end();it1++) cout << *it1 << " ";
    cout << endl;
    return 0;
}