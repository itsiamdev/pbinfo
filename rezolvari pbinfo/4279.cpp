#include <bits/stdc++.h>

using namespace std;

int n,k,a,i,sum,cnt;
int main()
{
    cin>>n>>k;
    for(i=1;i<=n;i++)
   {
       cin>>a;
       if(a%2==1)sum+=a;
       if(a%k==0)cnt++;
   }
    cout<<sum<<" "<<cnt;


    return 0;
}