#include <bits/stdc++.h>

using namespace std;

int a,maxi,n,i,k;
int main()
{
    cin>>n>>k;
    for(i=1;i<=n;i++)
    {
        cin>>a;
        if(a%k==0)if(a>maxi)maxi=a;
    }
    if(maxi!=0)cout<<maxi;
    else cout<<"NU EXISTA";
    return 0;
}