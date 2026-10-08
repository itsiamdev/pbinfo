#include <iostream>
using namespace std;
int n,p,k,ok;

int main()
{
    int i;
    cin>>n;
    k=n;
    ok=1;
    while(ok)
    {
        --k;
        for(i=1;i*i<=k&&ok;++i)
            if(i*i==k)
                p=i,ok=0;
    }
    cout<<n-k<<'\n';
    i=k;
    while(i)
    {
        if(i%p==0&&i!=k)
            cout<<'\n';
        cout<<i<<' ';
        --i;
    }
    return 0;
}