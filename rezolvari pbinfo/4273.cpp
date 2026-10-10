#include <iostream>

using namespace std;

long long n,i,p;

int main()
{
    cin>>n;
    p=1;
    for(i=1;i<=n;i++) p*=i*i;
    cout<<p;
    return 0;
}