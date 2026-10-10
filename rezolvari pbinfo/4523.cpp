#include <iostream>
using namespace std;
long long n,x=1;
int main()
{
    cin>>n;
    for(int i=1;i<=n;i++)
    {
        x=x*i;
        cout<<x<<' ';
    }
    return 0;
}