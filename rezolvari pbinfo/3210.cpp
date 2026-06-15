#include <iostream>
using namespace std;

int main()
{
    int B,S;
    cin>>B>>S;
    int numCutii=0,rest=0;
    while(S>=B){
        numCutii++;
        S-=B;
    }
    rest=B-S;
    cout<<numCutii<<" "<<rest;
    return 0;
}