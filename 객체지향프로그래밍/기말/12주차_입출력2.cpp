#include<iostream>
#include<fstream>
#include<cassert>
using namespace std;

int main(){
    ofstream o;
    o.open("file1", ios :: out | ios :: app);
    if(!o.is_open()) assert(false);
    for(int i = 0;i < 3;i++) o << i << endl;
    o.close();
    char c;
    ifstream i;
    i.open("file1", ios :: in);
    if(!i.is_open()) assert(false);
    while(i.get(c)) cout.put(c);
    i.close();

    return 0;
}