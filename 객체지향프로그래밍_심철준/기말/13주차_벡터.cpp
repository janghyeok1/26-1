#include<iostream>
#include<vector>
using namespace std;

int main(){
    vector<double> score;
    while(true){
        double value = 0.0;
        cout << "성적: ";
        cin >> value;
        if(value < 0.0) break;
        score.push_back(value);
    }
    double highest = 0.0;
    vector<double>::iterator it;
    for(it = score.begin();it < score.end(); it++) if(*it > highest) highest = *it;
    cout << highest << endl;
    return 0;
}