#include<iostream>
#include<fstream>
#include<cassert>
using namespace std;

int main(){
    ofstream outstrm;
    outstrm.open("file.txt");
    if(!outstrm.is_open()){
        cout << "file cannot be opened";
        assert(false);
    }
    for(int i = 1;i <= 10; i++){outstrm << i * 10 << " ";}
    outstrm.close();
    int data;
    ifstream instrm;
    instrm.open("file.txt");
    if(!instrm.is_open()){
        cout << "file cannot be opened";
        assert(false);
    }
    for(int i = 1;i <= 10; i++){
        instrm >> data;
        cout << data << " ";
    }
    instrm.close();
    return 0;
}