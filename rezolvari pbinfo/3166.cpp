#include <iostream>
using namespace std;

int main()
{
    double x,t,y,i;
    long long int T=0;
    cin>>x>>t>>y>>i;
    while(x>y)
        x=x-x/i,T+=t;
    cout<<T;
    return 0;
}