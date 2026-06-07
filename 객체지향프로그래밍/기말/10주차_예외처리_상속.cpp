#include<iostream>
using namespace std;

class parent{
public:
    void display(){cout << "parent" << endl;}
};

class child : public parent{
public:
    void display(){cout << "child" << endl;}
};

int main(){
    try{throw child();}
    //catch(parent& e){e.display();}
    catch(child& e){e.display();}
    catch(parent& e){e.display();}
    return 0;
}