#include <iostream>

using namespace std;

int main()
{
    long long int l,r,rez;
    cin>>l>>r;
    if(l%2==0)
        rez=r/2-l/2+1;
    else
        rez=r/2-l/2;
    rez*=rez;
    cout<<rez;
    return 0;
}