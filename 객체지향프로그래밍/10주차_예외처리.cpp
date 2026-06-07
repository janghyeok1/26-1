#include<iostream>
using namespace std;

class noperson{
private:
    int person;
public:
    noperson(){person = 0;}
    noperson(int p){person = p;}
    int getperson() {return person;}
};

int main(){
    int pizza = 0;
    int person = 0;
    int slice = 0;
    try{
        cout << "피자 조각수: ";
        cin >> pizza;
        cout << "사람 수: ";
        cin >> person;
        if(person == 0) throw noperson(person);
        slice = pizza / person;
        cout << "한 사람당 " << slice << "조각" << endl;
    }
    catch(noperson p){
        cout << "사람이 " << p.getperson() << "명 입니다" << endl;
    }
    return 0;
}