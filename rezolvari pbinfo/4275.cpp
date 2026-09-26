#include <bits/stdc++.h>

using namespace std;

int n,i;
char c;
int main()
{
    cin>>n>>c;
    for(i=1;i<=n;i++)
    {
        for(int j=n;j>0;j--)
        {
            if(j>i)cout<<" ";
            else cout<<c;
        }
        cout<<'\n';
    }
    for(i=n;i>0;i--)
    {
        for(int j=i;j>0;j--)
            {

                cout<<c;
            }
        cout<<'\n';
    }
    return 0;
}