#include<iostream>
#include<string>
#include<fstream>
#include<cassert>
using namespace std;

int main(){
    int i = 12345;
    double d = 3.14;
    ofstream o("sample", ios :: out | ios :: binary);
    if(!o.is_open()) assert(false);
    o.write(reinterpret_cast<char*>(&i), sizeof(int));
    o.write(reinterpret_cast<char*>(&d), sizeof(double));
    o.close();
    i = 0; 
    d = 0.0;
    ifstream in("sample", ios :: in | ios :: binary);
    if(!in.is_open()) assert(false);
    in.read(reinterpret_cast<char*>(&i), sizeof(int));
    in.read(reinterpret_cast<char*>(&d), sizeof(double));
    in.close();
    cout << i << endl << d << endl;
    return 0;
}