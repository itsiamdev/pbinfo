#include <bits/stdc++.h>

using namespace std;


int a,sum,cnt;
int main()
{
    cin>>a;
    while(a!=0)
    {
        if(a%2==0)sum+=a;
        if(a/100==0&&a/10!=0)cnt++;
        cin>>a;
    }
    cout<<sum<<" "<<cnt;


    return 0;
}