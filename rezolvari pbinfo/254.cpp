#include <iostream>
using namespace std;

int main()
{
    int a, b, n, p;
    cin>>n;
    for(int i=1; i<=n; i++)
    {
        cin>>a>>b;
        p=1;
        while(p*2<=max(a,b))
            p *= 2;
        if(p>=min(a,b))
            cout<<p<<endl;
        else
            cout<<0<<endl;
    }
}